import App from './components/App'
import { createRoot } from 'react-dom/client'
import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from './pages/shop/Shop'
import About from './pages/about/About'
import { LazyAbout } from '@/pages/about/About.lazy'
import { LazyShop } from '@/pages/shop/Shop.lazy'

const root = document.getElementById('root')

if (!root) {
    throw new Error('Не найден компонент root!')
}

const container = createRoot(root)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback='Loading...'><LazyAbout/></Suspense>
            },
            {
                path: '/shop',
                element:  <Suspense fallback='Loading...'><LazyShop/></Suspense>
            }
        ]
    },
]);

container.render(
    <RouterProvider router={router}/>
)