const {register} = require("../models");
const nodemailer = require("nodemailer");
const Queue = require("bull");
const path = require("path");
const puppeteer = require("puppeteer");
require('dotenv').config();



const response = {
    status: true,
    message: "Data OK",
    data: [],
    info: []
};
let nama = "";
let alamat = "";
let no_telpon ="";
let dir = path.join(__dirname, '../public/pdf');

class registerController {

    static async sendMail(req, res) {
        const {body} = req;
        const sendMailQueue = new Queue("sendMail", {
            redis: {
                host: process.env.REDIS_HOST,
                port: process.env.REDIS_PORT,

            }
        });

        try {
            const save = await register.create(
                {
                    nama: body.nama, 
                    email: body.email, 
                    password: body.password, 
                    alamat: body.alamat, 
                    no_telpon: body.no_telpon
                }
            );
            response.message = "sukses";

            nama = body.nama;
            alamat = body.alamat;
            no_telpon = body.no_telpon;

            response.data = save;
            const data = {
                email: body.email
            };

            const options = {
                delay: 1000,
                attempts: 2
            };

            sendMailQueue.add(data, options);
            sendMailQueue.process(async (job) => {
                console.log({job});
                return await registerController.send(job.data.email);
            });
            const t = new Date();
            const current = t.toLocaleString();
            t.setSeconds(t.getSeconds() + 10);
            response.info = `(${current}) email will send in ${t.toLocaleString()}`
            res
                .status(201)
                .json(response);
        } catch (error) {
            response.status = false;
            response.message = error.message;
            res
                .status(400)
                .json(response);
        }

    }

    static send(email) {
        const mail = new Promise((resolve, reject) => {
            let mailOptions = {
                from: process.env.USER_EMAIL,
                to: email,
                subject: `Selamat Bergabung ${nama}`,
                text: "This email is from bull job scheduler tutorial.",
                attachments: [{
                    filename: 'somefile.pdf',
                    path: `${dir}/somefile.pdf`,
                    contentType: 'application/pdf'
                  }],
                
            };
            const transport = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.USER_EMAIL,
                    pass: process.env.PASSWORD_EMAIL
                }
            });
            transport.sendMail(mailOptions, (err, info) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(info);
                }
            });
        });
    }

}

module.exports = registerController;