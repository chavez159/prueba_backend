import { useState } from 'react'
import { Route, Router, Routes } from 'react-router'
import { Home } from './pages/Home'
import { AppRouter } from './router/router'
import { GoogleOAuthProvider } from '@react-oauth/google'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
       <GoogleOAuthProvider clientId="151373060419-l6vbn23matisacnmi9hu2p5v9d0mh3vr.apps.googleusercontent.com">
     <AppRouter/>
     </GoogleOAuthProvider>
   </>
   )
}

export default App
