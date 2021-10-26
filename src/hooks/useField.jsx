import { useState } from "react"

const useField = (type) => {
    const [value, setValue] = useState("")
    const reg = /^[0-9]+([\\,\\.]?)([0-9]{1,10})?$/g

    const onChange = (event) => {

        const eventValue = event.target.value.toString().replace(',','.')
    
        if(eventValue.match(reg) || !eventValue){
            console.log("####", eventValue)
            setValue(eventValue)
        }
    }

    return {
        type,
        value,
        onChange
    }
}

export default useField