var express = require('express');
var multer  = require('multer');
var cors = require('cors');
var upload = multer({ dest: 'uploads/' });

var app = express();

app.use(cors());

app.post('/upload', upload.single('avatar'), (req, res, next) => {
  console.log('req file', req.file);
  res.sendStatus(200);
});

app.listen(9001, () => {
  console.log('Example app listening on port 9001!')
});
