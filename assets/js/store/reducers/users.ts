import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type User = {
	id: number
	username: string,
	email: string,
	permission_level: string
}


const usersSlice = createSlice({
	name: 'user',
	initialState: {},
	reducers: {
		acceptUser(state, action: PayloadAction<User>) {
			state[action.payload.id] = action.payload
		}
	}
})

export const {acceptUser} = usersSlice.actions
export default usersSlice.reducer