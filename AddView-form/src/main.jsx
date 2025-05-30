import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FormHandling from './assets/components/FormHandling'
import './assets/CSS/style.css'
import UserDataHandling from './assets/components/UserDatahandling'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <FormHandling/>
 {/* always remember to import your main component so that you can see your relevant output of that component or if you want than you can comment out previous component */}
 <UserDataHandling></UserDataHandling>
  </StrictMode>,
)
// single file work or multiple file work strategy
// in single file you want to use multiple functions than how to use? because upto now we studied single file single function
