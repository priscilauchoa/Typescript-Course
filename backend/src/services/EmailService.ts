interface IMailTo{
    name: string,
    email: string
}

interface IMailMessage {
    subject: string,
    body: string,
    attachment?: string[];
}

interface IMessageDTO {
    to: IMailTo;
    message: IMailMessage
}
//DTO data transfer object


class EmailService {
    sendMail({to, message}: IMessageDTO){
        console.log(`Email sent to ${to.name}: ${message.subject}`)
    }
}

export default EmailService;