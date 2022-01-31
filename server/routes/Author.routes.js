// import controller file using require() and save it as a variable (ex: NameController)

const controllerFile = "author.controller" //change this for each project

const AuthorController = require(`../controllers/${controllerFile}`) //change NameController for each project

module.exports = (app) => {
    // routes go here along with functions from controller
    app.get('/api/authors', AuthorController.findAllAuthors)
    app.get('/api/authors/:id', AuthorController.findOneAuthor)
    app.post('/api/authors', AuthorController.createAuthor)
    app.put('/api/authors/edit/:id', AuthorController.editAuthor)
    app.delete('/api/authors/delete/:id', AuthorController.deleteAuthor)
}
