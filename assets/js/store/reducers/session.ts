import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface SessionState {
	sessionToken?: string
}

const initialState:SessionState = {}

const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		login(state: SessionState, action: PayloadAction<string>) {
			state.sessionToken = action.payload
		},
		logout(state: SessionState) {
			state.sessionToken = undefined
		}
	}
})

export const {login, logout} = sessionSlice.actions
export default sessionSlice.reducer