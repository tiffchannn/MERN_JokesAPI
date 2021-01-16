const Joke = require("../models/joke.model");

// returns array of all jokes
module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(allJokes => res.json( { jokes: allJokes }))
    .catch(err => res.json( { Message: "Uh oh! Unable to get all the jokes.", Error: err }))
};

// find one joke by the specified ID
module.exports.findOneJoke = (req, res) => {
  Joke.findOne( { _id: req.params.id })
    .then(oneJoke => res.json( { joke: oneJoke }))
    .catch(err => res.json( { Message: "Uh oh! Unable to get one joke.", Error: err }))
};

// return a random joke
module.exports.randomJoke = (req, res) => {
  Joke.aggregate().sample(1)
    .then(randomJoke => res.json( { joke: randomJoke }))
    .catch(err => res.json( {Message: "Uh oh! Unable to get random joke!", Error: err}))
};

// creates new joke
module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then(newlyCreatedJoke => res.json( { joke: newlyCreatedJoke }))
    .catch(err => res.json( { Message: "Uh oh! Unable to create a new joke.", Error: err }))
};

// update joke with matching ID
module.exports.updateJoke = (req, res) => {
  Joke.updateOne( { _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json( { joke: updatedJoke }))
    .catch(err => res.json( { Message: "Uh oh! Unable to update joke.", Error: err }))
};

// deletes joke at matching ID
module.exports.deleteJoke = (req, res) => {
  Joke.deleteOne( { _id: req.params.id })
    .then(result => res.json( { result: result }))
    .catch(err => res.json( { Message: "Uh oh! Unable to delete joke.", Error: err}))
};
