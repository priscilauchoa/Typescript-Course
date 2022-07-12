import { Request, Response} from 'express'
import EmailService from '../services/EmailService';

const users = [ 
    {
        name: "Priscila",
        email: 'priscila@gmail.com'
    }
]

export default {
    async index(req: Request, res: Response){
        return res.json(users)
    },

   async create(req: Request, res: Response){
    const emailService = new EmailService();

    emailService.sendMail({name: 'Priscila', email: 'priscila@gmail.com'}, { subject: 'Welcome to the system', body: 'Hii Pri'});
    
    return res.send()
   }
};
