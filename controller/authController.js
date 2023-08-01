const user = require('../models/user');
var jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'kirantirmale2362001@gmail.com',
//       pass: 'lpeoxqpvvgwavblf'
//     }
//   });
//   const mailOptions = {
//     from: 'kirantirmale2362001@gmail.com',
//     to: 'urmilachavan5667@gmail.com',
//     subject: 'Sending Email using Node.js',
//     path: './form',
//     attachments: [{
//         filename: 'form.html',
//         path: './form.html',
//     }
//     ]
    
//   };

exports.signup = async (req, res)=>{
    try {
        const data = await user.create(req.body)
        return res.status(200).json({data:data})
    } catch (error) {
        return res.status(400).json("user not found")
    }
}

exports.login = async(req,res)=>{
    try {
        const data = await user.findOne({password:req.body.password,email: req.body.email})
        if (data?.username) {
            if (data.password == req.body.password) {
                const token = jwt.sign({ email: data.email, role: data.role }, 'rohan#125', { expiresIn: '10h' });
                // transporter.sendMail(mailOptions, function(error, info){
                //     if (error) {
                //       console.log(error);
                //     } else {
                //       console.log('Email sent: ' + info.response);
                //     }
                //   });
                return res.status(200).json({data: data,token:token})
            } else {
                return res.status(200).json({message: "Invalid email id or password"})
            }
        } else {
            return res.status(200).json({message: "user not found"})
        }
        
    } catch (error) {
        return res.status(400).json("user not found")
    }
}


