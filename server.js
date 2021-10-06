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

// Upload Endpoint
app.post('/send-mail', (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    let recipients = [];
    let mangasTag = ''
    mangasSelected.sort().map((manga, index) => {
        if (index + 1 !== mangasSelected.length)
            mangasTag += `&nbsp;` + manga + `,&nbsp;`;
        else
            mangasTag += `&nbsp;` + manga + `&nbsp;`;

    })
    mangasTag = `<span style="color:#c914c3">&nbsp;` + mangasTag + `&nbsp;<span>`
    output = `
    <div align='center'>
    <h2 style="color:white;
               background-color:#fb6af7;
               text-align:center;
               border: solid 1px #c914c3;
               letter-spacing: 8px;">
      New Post Arrived!!
      </h2><br />
    <hr />
    <span style="font-family: Arial, Helvetica, sans-serif;
    font-size:16px;
    letter-spacing: .1rem;">
    <p>
      Hello Kozeer's members,<br /> 
      New episodes </p>`+ mangasTag + `<p style="color:black">have been posted on our site.<br /> 
      For more information visit:<br /> 
      <a href='www.kozeerofficial.com'>www.kozeerofficial.com</a>
      <br />
      <br />
      Thanks, <br />
      Kozeer team.
    </p>
    <hr style="color:black" />
    <div>
`

    mailService.sendMail(recipients, output)
    return res.json({ fileName: filename, filePath: `${abspath}${filename}` });

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