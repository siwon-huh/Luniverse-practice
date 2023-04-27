import React, { useEffect } from "react";

const useHandleOnEnter = (action: VoidFunction) => {
	const handleOnEnter = (e: KeyboardEvent) => {
		if (e.key === "Enter") {
			e.preventDefault();
			action();
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", handleOnEnter);
		return () => {
			document.removeEventListener("keydown", handleOnEnter);
		};
	}, []);
};

export default useHandleOnEnter;
