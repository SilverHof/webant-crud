import { Header } from './Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer/Footer'
import './Layout.scss'


export const Layout = () => {
   return (
      <>
         {/* <Header /> */}
         <main className="main">
            <Outlet />
         </main>
         {/* <Footer /> */}
      </>
   )
}