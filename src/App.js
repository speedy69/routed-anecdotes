import { useEffect, useState } from "react"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"
import About from "./components/about"
import Anecdote from "./components/anecdote"
import AnecdoteList from "./components/anecdotesList"
import CreateNew from "./components/createNew"
import Footer from "./components/footer"
import Notification from "./components/notification"
import { getAll } from "./services/anecdoteService"

const App = () => {
  const [anecdotes, setAnecdotes] = useState([])
  const [newMessage, setMessage] = useState(null)

  useEffect(() => {
    getAll().then(res => setAnecdotes(res.data))
  }, [])
  
  return (
    <Router>
      <h1>Software anecdotes</h1>
      <div>
        <Link className='link' to='/'>anecdotes</Link>
        <Link className='link' to='/create'>create new</Link>
        <Link className='link' to='/about'>about</Link>
        <Notification message={newMessage} />
      </div>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/create'>
          <CreateNew setAnecdotes={setAnecdotes} anecdotes={anecdotes} setMessage={setMessage} />
        </Route>
        <Route path='/anecdotes/:id'>
          <Anecdote anecdotes={anecdotes} />
        </Route>
        <Route path='/'>
          <AnecdoteList anecdotes={anecdotes} />
        </Route>
      </Switch>
        <Footer />
    </Router>
  )
}

export default App
