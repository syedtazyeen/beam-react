import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { appRouter } from './router'
import { reduxStore } from './redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>,
)
