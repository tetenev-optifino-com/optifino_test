import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet
} from "react-router-dom";
import {App} from './App.jsx'
import {About} from './About'
import {Wizard} from './Wizard'
import {SiteNav} from './SiteNav.jsx'


const Root = () => {
  return (
    <>
      <SiteNav />
      <div>
        <Outlet />
      </div>
    </>
  ) 
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<App />} />
      <Route path='/wizard/:step' element={<Wizard />} />
      <Route path='/about' element={<About />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)



