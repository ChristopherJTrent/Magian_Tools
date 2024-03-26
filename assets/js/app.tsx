// If you want to use Phoenix channels, run `mix help phx.gen.channel`
// to get started and then uncomment the line below.
// import "./user_socket.js"

// You can include dependencies in two ways.
//
// The simplest option is to put them in assets/vendor and
// import them using relative paths:
//
//     import "../vendor/some-package.js"
//
// Alternatively, you can `npm install some-package --prefix assets` and import
// them using a path starting with the package name:
//
//     import "some-package"
//
import React from 'react'
import {createRoot} from 'react-dom/client'
import Layout from './layout.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import {Index} from './pages/index.tsx'
import { Browse } from './pages/browse.tsx'
const rootElement = document.getElementById('root')

if (rootElement == null) throw new Error('Root element could not be found')

const root = createRoot(rootElement)


const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <Index />
			},
			{
				path: '/browse',
				element: <Browse />
			}
		]
	},
	{
		path: '*',
		element: <Navigate to={'/'} />
	}
])

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router}>
			</RouterProvider>
		</Provider>
	</React.StrictMode>
)

// console.log(document.body)