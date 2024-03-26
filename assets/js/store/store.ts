import {combineReducers, configureStore} from '@reduxjs/toolkit'
import uiReducer from './reducers/ui.ts'

const rootReducer = combineReducers({
	ui: uiReducer
})
export const store = configureStore({
	reducer: rootReducer
})
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type ReduxAction = {type: string}