import React from 'react'

const useInputFocusOnKeyDown = (inputRef: React.RefObject<HTMLInputElement>, key: string) => {
	function focusElementOnKeyDown(e: KeyboardEvent, El: React.RefObject<HTMLInputElement>) {
		if (!El.current) return;
		if (e.key === key && El.current !== document.activeElement) {
			e.preventDefault();
			El.current.focus();
		}
	}

	React.useEffect(() => {
		addEventListener("keydown", (e: KeyboardEvent) => {
			focusElementOnKeyDown(e, inputRef)
		})

		return () => {
			removeEventListener("keydown", (e: KeyboardEvent) => {
				focusElementOnKeyDown(e, inputRef)
			})
		}
	}, [])
}

export default useInputFocusOnKeyDown