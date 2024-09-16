import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import App from './App';

export const routes = [
  {
    path: "/",
    title: '',
    element: <App />,
  },
  {
    path: "/service",
    title: '機能一覧',
    element: <App />,
  },
  {
    path: "/faq",
    title: 'よくあるご質問',
    element: <App />,
  },
  {
    path: "/content",
    title: '導入の流れ',
    element: <App />,
  },
  {
    path: "/plan",
    title: '利用プラン',
    element: <App />,
  },
  {
    path: "/business",
    title: 'お問い合わせ',
    element: <App />,
  },
]
const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
