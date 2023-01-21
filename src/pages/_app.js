import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
/* import {SessionProvider  as AuthProvider } from 'next/client'; */
import { SessionProvider } from "next-auth/react"

const MyApp = ({ Component, pageProps:{ session, ...pageProps }}) => {
  return (
   /*  <AuthProvider session={pageProps.session}  > */
   <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider> 

 </SessionProvider>
  )
}

export default MyApp
