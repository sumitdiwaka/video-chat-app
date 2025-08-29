import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Routes,Route, Navigate } from 'react-router'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import * as Sentry from "@sentry/react";

const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes);

const App = () => {
  return (
       <>
       <SignedIn>
        <SentryRoutes>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<Navigate to={'/'} replace />} />
        </Routes>
        {/* <UserButton /> */}
        </SentryRoutes>
      </SignedIn>


      <SignedOut>
        <SentryRoutes>
       <Routes>
         <Route path='/auth' element={<AuthPage />} />
         <Route path='*'  element={<Navigate to={'/auth'} replace />} />
       </Routes>
       </SentryRoutes>
      </SignedOut>
      
    </>
  )
}

export default App
