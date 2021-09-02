import axios from "axios";

const getAll = async () => {
    const response = await axios.get('http://localhost:3001/anecdotes')
    return response
}

const postAnecdote = async data => {
    const response = await axios.post('http://localhost:3001/anecdotes', data)
    return response
}

export { getAll, postAnecdote }