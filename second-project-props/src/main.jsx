import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home'
import '../src/assets/css/style.css'


createRoot(document.getElementById('root')).render(

  <StrictMode>

   <Home/>
   {/* in main.jsx file we only called home component */}

    {/* in home component we called header and footer  as child component of home */}

   {/* <Header/>
   <Footer/> */}

  </StrictMode>,
)
