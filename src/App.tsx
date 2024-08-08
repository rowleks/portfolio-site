import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss'
import About from './pages/aboutpage/About';
import Home from './pages/homepage/Home'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <About />,
    }
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router}/>

    </div>
  )
}

export default App
