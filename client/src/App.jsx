//import Component from path
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import React, {useState} from 'react';
import NewAuthorForm from './components/NewAuthorForm';
import AllAuthors from './components/AllAuthors';
import EditAuthorForm from './components/EditAuthorForm'
import Error from './components/Error'


function App() {

  let [newAuthorAdded,setNewAuthorAdded] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
        <h3>Favorite Authors!</h3>
        <hr />
        <Switch>

          <Route exact path="/">
            <AllAuthors newAuthorAdded={newAuthorAdded}/>
            <Link to="/author/new">Add an Author</Link>
          </Route>

          <Route exact path="/author/new">
            <NewAuthorForm newAuthorAdded={newAuthorAdded} setNewAuthorAdded={setNewAuthorAdded}/>
          </Route>

          <Route exact path="/author/edit/:id">
            <EditAuthorForm></EditAuthorForm>
          </Route>

          <Route exact path="/error">
            <Error></Error>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
