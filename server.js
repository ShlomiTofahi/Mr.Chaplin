const express = require('express');
const mongoose = require('mongoose');
// const config = require('config');
// const fileUpload = require('express-fileupload');
var fs = require('fs');
const mailService = require('./services/mailService');

const path = require('path');

const app = express();

//Express Middleware
app.use(express.json());

// app.use(fileUpload({
//   limits: { fileSize: 5 * 1024 * 1024 },
// }));

app.post('/send-mail', (req, res) => {
  try {
    const { name, phone, email, message, livingArea } = req.body;
    let output = `
    <div align='center'>
    <h2 style="color:white;
               background-color:#eba235;
               text-align:center;
               border: solid 1px #af6900;
               letter-spacing: 8px;">
               יש לך בקשה ליצירת קשר חדשה  
    </h2><br />
    <hr />
    <span style="font-family: Arial, Helvetica, sans-serif;
    font-size:16px;
    letter-spacing: .1rem;">
    <h3>פרטי קשר:</h3>
    <div>  
      <div>שם: ${name}</div>
      <div>אימייל: ${email}</div>
      <div>טלפון: ${phone}</div>
    </div>
    <h3>הודעה:</h3>
    <p>${message}</p>
    <hr style="color:black" />
    <div>
`
    console.log(livingArea)
    if (livingArea) {
      output = `
    <div align='center'>
    <h2 style="color:white;
              background-color:#eba235;
              text-align:center;
              border: solid 1px #af6900;
              letter-spacing: 8px;">
              יש לך בקשה ליצירת קשר חדשה  
    </h2><br />
    <hr />
    <span style="font-family: Arial, Helvetica, sans-serif;
    font-size:16px;
    letter-spacing: .1rem;">
    <h3>פרטי קשר:</h3>
    <div>  
      <div>שם: ${name}</div>
      <div>טלפון: ${phone}</div>
      <div>אזור מגורים: ${livingArea}</div>
    </div>
    <hr style="color:black" />
    <div>
  `
    }

    mailService.sendMail("mr.chaplin.oded@gmail.com", email, name, phone, output)
    // mailService.receiveMail(email,"יצירת קשר" ,name, phone, message)
    return res.status(204).send({ msg: "success" });

  } catch (err) {
    return res.status(500).send(err);
  }
});

// Upload Endpoint
// app.post('/upload', (req, res) => {
//   try {
//     const file = req.files.file;
//     const { filename, abspath } = req.body;
//     const fullDir = `${__dirname}/client/public${abspath}`
//     if (!req.files) {
//       return res.status(400).json({ msg: 'No file uploaded' });
//     }
//     if (!fs.existsSync(fullDir)) {
//       fs.mkdirSync(fullDir);
//     }
//       file.mv(`${fullDir}/${filename}`, err => {
//         if (err) {
//           return res.status(500).send(err);
//         }
//         return res.json({ fileName: filename, filePath: `${abspath}${filename}` });
//       });

//   } catch (err) {
//     return res.status(500).send(err);
//   }
// });

// Remove Endpoint
// app.post('/remove', (req, res) => {
//   if (!req.body) {
//     return res.status(400).json({ msg: 'No file to remove' });
//   }
//   const { filepath } = req.body;
//   try {
//     const fullDir = `${__dirname}/client/public${filepath}`
//     const directoryPath = path.dirname(fullDir) 
//     fs.unlinkSync(fullDir);
//     if(fs.readdirSync(directoryPath).length === 0){
//       fs.rmdirSync(directoryPath, { recursive: true })
//     }
//   } catch (err) {
//     return res.status(500).send(err);
//   }

// });

// // DB Config   
// //  const db = require('./config/default').mongoURI;
// const db = config.get('mongoURI');

// // setting MongoDB
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);

// // Connect to Mongo
// mongoose
//   .connect(db)
//   .then(() => console.log('mongoDB Connected..'))
//   .catch(err => console.log(err));


// Use Routes
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/comments', require('./routes/api/comments'));
// app.use('/api/posts', require('./routes/api/posts'));
// app.use('/api/mangas', require('./routes/api/mangas'));
// app.use('/api/chapters', require('./routes/api/chapters'));
// app.use('/api/subscribes', require('./routes/api/subscribes'));
// app.use('/api/settings', require('./routes/api/settings'));
// app.use('/api/characters', require('./routes/api/characters'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));