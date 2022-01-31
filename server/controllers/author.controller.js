const modelFile = 'author.model'; //change the modelFile for each project

// import model and save as a variable

const Author = require(`../models/${modelFile}`) //change Name for each project

// module.exports.mongooseCommands here

module.exports.createAuthor = (req,res) => {
    console.log("req.body is--", req.body)
    Author.create(req.body)
        .then(newAuthor=>{
            console.log("Logging results after creating new author: ", newAuthor)
            res.json({results: newAuthor})
        })
        .catch(err=>{
            console.log("Error when trying to create a new author: ",err)
            res.json(err)
        })
}

module.exports.findAllAuthors = (req,res) => {
    Author.find().sort({firstName:1})
        .then(allAuthors=>{
            console.log("Response when trying to find all authors: ", allAuthors)
            res.json({results: allAuthors})
        })
        .catch(err=>{
            console.log("Error when trying to find all authors: ",err)
            res.json(err)
        })
}

module.exports.findOneAuthor = (req,res) => {
    Author.findOne({_id: req.params.id})
        .then(singleAuthor=>{
            console.log("Response when trying to find a single Author: ", singleAuthor)
            res.json({results: singleAuthor})
        })
        .catch(err=>{
            console.log("Error when trying to find a single author: ", err)
            res.json(err)
        })
}

module.exports.editAuthor = (req,res) => {
    Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedAuthor=>{
            console.log("Response when trying to update an author: ",updatedAuthor)
            res.json({results: updatedAuthor})
        })
        .catch(err=>{
            console.log("Error when trying to edit an author: ",err)
            res.json(err)
        })
}

module.exports.deleteAuthor = (req,res) => {
    Author.remove({_id: req.params.id})
        .then(deletedAuthor=>{
            console.log("Response when trying to delete an author: ", deletedAuthor)
            res.json({results: deletedAuthor})
        })
        .catch(err=>{
            console.log("Error when trying to delete an author: ",err)
            res.json(err)
        })
}