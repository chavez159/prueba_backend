import { useState } from 'react'
import { Route, Router, Routes } from 'react-router'
import { Home } from './pages/Home'
import { AppRouter } from './router/router'
import { GoogleOAuthProvider } from '@react-oauth/google'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
       <GoogleOAuthProvider clientId="151373060419-hflbjm4m12o1odr0frs1v4ad7rvpael6.apps.googleusercontent.com">
     <AppRouter/>
     </GoogleOAuthProvider>
   </>
   )
}

export default App
