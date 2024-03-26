import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface SessionState {
	CsrfToken?: string
	sessionToken?: number
}

const initialState:SessionState = {}

const sessionSlice = createSlice({
	name: 'session',
	initialState,
	reducers: {
		acceptCSRFToken(state:SessionState, action: PayloadAction<string>) {
			state.CsrfToken = action.payload
		},
		login(state: SessionState, action: PayloadAction<number>) {
			state.sessionToken = action.payload
		},
		logout(state: SessionState) {
			state.sessionToken = undefined
		}
	}
})

export const {acceptCSRFToken, login, logout} = sessionSlice.actions
export default sessionSlice.reducer