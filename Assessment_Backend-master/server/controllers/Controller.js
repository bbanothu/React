const model = require('../models').postGressModel;

// Get functions
const sampleEndpoint = async (req, res) => {
    model.create({ message : "hello"}).then(function(task) {
    })
    res.status(201).send(`User added with ID:`)
}

const getAllPosts = async (req, res) => {
  model.findAll({
  }).then(function(posts){
    res.send({message:'posts list',data:posts});
  }).catch(function(err){
    console.log('Oops! something went wrong, : ', err);
  });
}


// Post functions
const createPost = async (req, res) => {
  const mymessage = req.body.message;
  model.create({ message : mymessage}).then(function(task) {
  })
  res.status(201).send(`Post Added Successfully`)
}


const incLikes = async (req, res) => {
  const myID = req.body.id;
  console.log(myID)
  model.increment(
    {likes: 1 },
    {where: {id: myID}}
  )
  .then(function(rowsUpdated) {
    res.status(201).send(`Post Added Successfully`)
  })
}

const decLikes = async (req, res) => {
  const myID = req.body.id;
  console.log(myID)
  model.decrement(
    {likes: 1 },
    {where: {id: myID}}
  )
  .then(function(rowsUpdated) {
    res.status(201).send(`Post Added Successfully`)
  })
}

const deletePost = async (req, res) => {
  const myID = req.body.id;
  model.destroy(
    {where: {id: myID}}
  )
  .then(function(rowsUpdated) {
    res.status(201).send(`Post Deleted Successfully`)
  })

}

module.exports = {
    sampleEndpoint,
    createPost,
    getAllPosts,
    incLikes,
    decLikes,
    deletePost
};