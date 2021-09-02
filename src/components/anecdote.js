import { useParams } from "react-router-dom"

const Anecdote = ({ anecdotes }) => {
    const id = useParams().id
    const anecdote = anecdotes.find(f => f.id === Number(id))

    if(!anecdote) return null

    return(
        <div>
            <h2>{anecdote.content}</h2>
            <p>has {anecdote.votes} votes</p>
            <p>for more info see <a href={anecdote.info} target='_blank' rel="noreferrer">{anecdote.info}</a></p>
        </div>
    )
}

export default Anecdote