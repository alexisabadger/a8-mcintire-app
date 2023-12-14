// Controllers for the Piece(s of Clothing) Collection

import 'dotenv/config';
import express from 'express';
import * as piece from './model.mjs';
import nodemailer from 'nodemailer';


const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/piece', (req,res) => { 
    piece.createPiece(
        req.body.brand,
        req.body.category, 
        req.body.color,
        req.body.quantity,
        req.body.datePurchased
        )
        .then(piece => {
            console.log(`"${piece.color + " " +
                            piece.brand + " " +
                            piece.category}" was added to the collection.`);
            res.status(201).json(piece);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'SOURCE: app.post /piece' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/piece', (req, res) => {
    piece.retrievePieces()
        .then(piece => { 
            if (piece !== null) {
                console.log(`All pieces of clothing were retrieved from the collection.`);
                res.json(piece);
            } else {
                res.status(404).json({ Error: 'SOURCE: app.get /piece - 404' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'SOURCE: app.get /piece - 400' });
        });
});


// RETRIEVE by ID controller
app.get('/piece/:_id', (req, res) => {
    piece.retrievePieceByID(req.params._id)
    .then(piece => { 
        if (piece !== null) {
            console.log(`"${piece.color + " " +
                            piece.brand + " " +
                            piece.category}" was retrieved,
                            based on its ID.`);
            res.json(piece);
        } else {
            res.status(404).json({ Error: 'SOURCE: app.get /piece/:_id - 404' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'SOURCE: app.get /piece/:_id - 400' });
    });

});


// UPDATE controller ************************************
app.put('/piece/:_id', (req, res) => {
    piece.updatePiece(
        req.params._id, 
        req.body.brand,
        req.body.category,
        req.body.color,
        req.body.quantity,
        req.body.datePurchased
    )
    .then(piece => {
        console.log(`"${piece.color + " " +
                        piece.brand + " " +
                        piece.category}" was updated.`);
        res.json(piece);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'SOURCE: app.put /piece/:_id - 400' });
    });
});


// DELETE Controller ******************************
app.delete('/piece/:_id', (req, res) => {
    piece.deletePieceById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, piece ${deletedCount} was deleted.`);
                res.status(200).send({ Success: '200 - item removed successfully, see network tab for details.' });
            } else {
                res.status(404).json({ Error: 'SOURCE: app.delete /piece/:_id - 404.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'SOURCE: app.delete /piece/:_id - OTHER' });
        });
});




////////////////////////////////////////
/* CONTACT FORM ENDPOINTS */
app.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
  
    // Use mapped values to make the code more readable:
        // First, map userRole value to label
        const userRoleMap = {
            hiringManager: "Hiring Manager",
            recruiter: "Recruiter",
            softwareEngineer: "Software Engineer",
            student: "Student",
            faculty: "Faculty",
            staff: "Staff",
            other: "Other",
            none: "None",
        };
  
        // Next, map the contactSource value to label
        const contactSourceMap = {
            searchEngine: "Search Engine",
            socialMedia: "Social Media",
            wordOfMouth: "Word of Mouth",
            other: "Other",
        };
        const contactSourceValue = req.body.contactSource;
        const contactSourceLabel = contactSourceMap[contactSourceValue] || "Unknown";
    
  
    const userRoleValue = req.body.userRole;
    const userRoleLabel = userRoleMap[userRoleValue] || "None";
  
    // Extract and format checkbox values
    const checkboxes = Object.keys(req.body)
    .filter(key => key !== 'name' && key !== 'email' && key !== 'subject' && key !== 'message' && key !== 'userRole' && key !== 'contactSource')
    .filter(key => req.body[key] === 'yes')
    .join(', ');
  
  
  
  
  
    let responseMessage = `
    <h2>Thank you for your submission, ${name}!</h2>
    <p class="contactReply" id="replyEmail">Email: ${email}</p>
    <p class="contactReply" id="replySubject">Subject: ${subject}</p>
    <p class="contactReply" id="replyMessage">Message: ${message}</p>
    <p class="contactReply" id="replyJobPosition">Your job/position: ${userRoleLabel}</p>
    <p class="contactReply" id="replySeeMoreOf">You'd like to see more of: ${checkboxes}</p>
    <p class="contactReply" id="replyContactSource">How you found me: ${contactSourceLabel}</p>
    `;
  
    // Nodemailer setup
  // Generate SMTP service account from ethereal.email
  nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
    }
  
    console.log('Credentials obtained, sending message...');
  
    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
            user: account.user,
            pass: account.pass
        }
    });
  
    //Message object
    let nodeMailMessage = {
        from: 'mcintiel@oregonstate.edu',
        to: `${email}`,
        subject: `${subject}`,
        text: `${message}`,
        html: 
            `
            <h2>Thank you for your submission, ${name}!</h2>
            <p class="contactReply" id="replyEmail">Email: ${email}</p>
            <p class="contactReply" id="replySubject">Subject: ${subject}</p>
            <p class="contactReply" id="replyMessage">Message: ${message}</p>
            <p class="contactReply" id="replyJobPosition">Your job/position: ${userRoleLabel}</p>
            <p class="contactReply" id="replySeeMoreOf">You'd like to see more of: ${checkboxes} (Selected)</p>
            <p class="contactReply" id="replyContactSource">How you found me: ${contactSourceLabel}</p>
  
        `
    };
  
    transporter.sendMail(nodeMailMessage, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.nodeMailMessage);
            return process.exit(1);
        }
  
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
  });
    // end Nodemailer setup
  
  
  
    //res.send(`${htmlTop}${responseMessage}${htmlBottom}`);
    res.send(`${responseMessage}`);
  });



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});