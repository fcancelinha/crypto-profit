import { useState } from "react"

const useNumberField = (type) => {
    const [value, setValue] = useState(0)

    const onChange = (event) => {
        setValue(Number(event.target.value))
    }

    return {
        type,
        value,
        onChange
    }
}

export default useNumberField