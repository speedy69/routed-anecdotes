import { useField, useReset } from "../hooks"
import { postAnecdote } from "../services/anecdoteService"

const CreateNew = ({ setAnecdotes, anecdotes, setMessage }) => {
  let content = useField('text')
  let author = useField('text')
  let newInfo = useField('text')
  const reset = useReset('reset', content, author, newInfo)

  const handleSubmit = (e) => {
    e.preventDefault()

    if(content.value !== '')
      postAnecdote( { content: content.value , author: author.value, votes: 0, info: newInfo.value})
        .then(res => res.status === 201 ? setAnecdotes(anecdotes.concat(res.data)) : null)
        .then(res => res === null ? setMessage('someting goes wrong') : setMessage(`a new anecdote ${content.value} created!`))
        .then(r =>  setTimeout(() => {  setMessage(null) }, 10000))
  }

  return(
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
          <tr>
            <td>content </td>
            <td><input {...content={...content, reset: 'doh'}} /></td>
          </tr>
          <tr>
            <td>author</td>
            <td><input {...author={...author, reset: 'pah'}} /></td>
          </tr>        
          <tr>
            <td>url for more info</td>
            <td><input {...newInfo={...newInfo, reset: 'muah'}} /></td>
          </tr>
          <tr>
            <td></td><td><input type='submit' value='create' />
                        <input {...reset} /></td>
          </tr>
          </tbody>
        </table>      
      </form>
    </div>  
  )
  
}

export default CreateNew