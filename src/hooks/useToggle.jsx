import React from 'react'

const useToggle = (initialState = true) => {
	const [toggle, setToggle] = React.useState(initialState)

	const wrappedSetToggle = () => {
		setToggle(!toggle)
	}

	return [toggle, wrappedSetToggle]
}

export default useToggle
