import { Outlet } from 'react-router'
import { FooterSection } from '../Components/Footer'
import Nav from '../Components/Nav'

export default function Layout() {
  return (
      <>
          <Nav />
          <Outlet/>
        <FooterSection/>
      </>
  )
}
