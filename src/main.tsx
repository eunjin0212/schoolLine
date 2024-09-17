import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Layout from './components/Layout';
import Service from './pages/Service';
import Faq from './pages/Faq';
import Content from './pages/Content';
import Plan from './pages/Plan';
import Business from './pages/Business';
import Home from './pages/Home';

export interface Route {
  path: string;
  title: string;
}

export const routes = {
  path: "/",
  title: '',
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: "/service",
      title: '機能一覧',
      element: <Service />,
    },
    {
      path: "/faq",
      title: 'よくあるご質問',
      element: <Faq />,
    },
    {
      path: "/content",
      title: '導入の流れ',
      element: <Content />,
    },
    {
      path: "/plan",
      title: '利用プラン',
      element: <Plan />,
    },
    {
      path: "/business",
      title: 'お問い合わせ',
      element: <Business />,
    },
  ]
}

const router = createBrowserRouter([routes]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
