import { useState } from "react";

import UserContext from "./user.context.js";

const UserState = (props) => {
	const initialState = {
		userData: {},
	};

	/* const [state, dispatch] = useReducer(UserReducer, initialState); */
	const [state, setState] = useState(initialState);

	const setUserState = async (userData) => {
		try {
			setState(userData);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<UserContext.Provider
			value={{
				userData: state,
				setUserState,
			}}
		>
			{/* eslint-disable-next-line react/prop-types */}
			{props.children}
		</UserContext.Provider>
	);
};

export default UserState;