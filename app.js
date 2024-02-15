const express = require('express')
var cors = require('cors');
const mongoose = require ('mongoose')
const UserModel = require ('./User')
const app = express()
const port = 3001
app.use(cors())

app.use(express.json())

mongoose.connect('mongodb://127.0.0.1/lab1_backend',{

})

.then(db => console.log('DB is connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
  UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/get/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findById({_id: id})
    .then(post => res.json(post))
    .catch(err => res.json(err))
})

app.get('/get/:org/:id', (req, res) => {
  const id = req.params.id;
  const org = req.params.org;
  UserModel.find({ _id: id })
    .then(posts => res.json(posts))
    .catch(err => res.json(err));
});

app.post('/create', (req, res) => {
  UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate({_id: id}, {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      org: req.body.org,
      talent: req.body.talent 
  })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id})
    .then(response => res.json(response))
    .catch(err => res.json(err))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})