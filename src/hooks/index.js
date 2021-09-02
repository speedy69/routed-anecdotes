import { useState } from "react"

export const useField = (type) => {
    const [value, setValue] = useState('')

    const onChange = (event) => setValue(event.target.value)

    const reset = () => setValue('')
   
    return { type, value, onChange, reset }
}

export const useReset = (type, ...fields) => {
    const value = type

    const onClick = (event) => {
        fields.forEach(field => {
            field.reset()
        })
    }

    return { type, value, onClick }
}
