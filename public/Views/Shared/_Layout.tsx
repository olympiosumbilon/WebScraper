import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation"
import SideMenu from "../SideMenu/Sidemenu";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
function Layout() {
  return (
    <div>
        <Header/>
        <Navigation/>
        <SideMenu/>
        <Hero/>
        <Footer/>
    </div>
  )
}

export default Layout   
