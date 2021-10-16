import { useState } from "react"

const useField = (type) => {
    const [value, setValue] = useState("")
    const reg = /^[0-9]+([\\,\\.]?)([0-9]{1,10})?$/g

    const onChange = (event) => {

        if(event.target.value.match(reg) || !event.target.value){
            setValue(event.target.value.replace(',','.'))
        }
            
    }

    return {
        type,
        value,
        onChange
    }
}

export default useField