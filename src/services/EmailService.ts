interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  content: string;
  attachment?: string[]; // ? = não obrigatório, e recebendo um array de string
}

interface IMessageDTO {
  // melhor forma de organizar, e saber certinho o que ele aceita.
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  // definindo métodos que a classe tem de ter.
  sendEmail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
  sendEmail({ to, message }: IMessageDTO) {
    console.log(`email enviado para ${to.name}: ${message.content}`);
  }
}

export default EmailService;
