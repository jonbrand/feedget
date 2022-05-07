import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mailAdapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "81d8da2bc04e6c",
    pass: "1731f52e887cfb"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
    from: 'Equipe Feedget <test@feedget.com',
    to: 'Jonatas Brandao <jonbranaraujo18@gmail.com>',
    subject,
    html: body,
  })
  }
}