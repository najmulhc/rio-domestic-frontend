import { Outlet } from "react-router"
import Footer from "../shared/footer/Footer"
import Navbar from "../shared/navbar/Navbar"
const Container = () => {
    return (
        <>
        <Navbar />
        <Outlet/>
        <Footer/>
        </>
    )
}

export default Container;