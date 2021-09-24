import { useState } from "react"

const useField = (type, pattern = null) => {
    const [value, setValue] = useState("")

    const onChange = (event) => {

        if(pattern.test(event.target.value) || !event.target.value)
            setValue(event.target.value)
    }

    return {
        type,
        value,
        onChange
    }
}

export default useField