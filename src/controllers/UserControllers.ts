import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  {
    name: "Pedro",
    email: "pedro@hotmail.com",
  },
];

export default {
  async index(req: Request, res: Response) {
    return res.send(users);
  },
  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendEmail({
      to: {
        name: "Pedro",
        email: "pedro_oliver13@hotmail.com",
      },
      message: {
        subject: "Bem-Vindo ao sistema",
        content: "Hello World",
      },
    });

    return res.send("Olha o terminal");
  },
};

// O typescript vai reclamar, caso ele tenha argumentos obrigatórios.
