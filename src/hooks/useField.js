import { useState } from "react"

const useField = (type) => {
    const [value, setValue] = useState(0.0)

    const onChange = (event) => {
        setValue(event.target.value)
    }

    return {
        type,
        value,
        onChange
    }
}

export default useField