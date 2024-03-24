import React from "react"
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import { Index } from "./components/index.tsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>
    }
])

export const Layout:React.FC = () => {
    return (
        <RouterProvider router={router}>

        </RouterProvider>
    )
}