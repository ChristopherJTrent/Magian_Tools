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
import { Layout } from './layout.tsx'

const rootElement = document.getElementById('root')

if (rootElement == null) throw new Error('Root element could not be found')

const root = createRoot(rootElement)

root.render(
	<Layout/>
)

// console.log(document.body)