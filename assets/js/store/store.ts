import {combineReducers, configureStore} from '@reduxjs/toolkit'
import uiReducer from './reducers/ui.ts'
import sessionReducer from './reducers/session.ts'

const rootReducer = combineReducers({
	ui: uiReducer,
	session: sessionReducer
})
export const store = configureStore({
	reducer: rootReducer
})
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type ReduxAction = {type: string}