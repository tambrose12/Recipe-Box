import { Children, useState } from "react"


export const useInputs = (anArray = ['']) => {

    const [value, setInputs] = useState(anArray)

    const add = () => setInputs(arrayOfInputs => [...arrayOfInputs, ''])

    const display = () => {
        return Children.toArray(value.map((placeholder, i) => {
            const onChange = ({ target: { value } }) => {
                setInputs(prevArray => {
                    const newArray = [...prevArray]
                    newArray[i] = value
                    return newArray
                })
            }
            const props = { onChange, placeholder, value: value[i] }
            return <input {...props} placeholder="Add An Ingredient..." />
        }))
    }
    return { value, display, add }

}