import express from 'express';
import { SubmitFeedback } from './services/submitFeedback';
import { PrismaFeedbacksRepository } from './repositories/prisma/prismaFeedbacksRepository';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailerMailAdapter';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackRequest = new SubmitFeedback(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  )

  await submitFeedbackRequest.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});