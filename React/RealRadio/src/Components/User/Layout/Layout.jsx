import Header from "./Header";
import Footer from "./Footer";
import { Outlet} from "react-router-dom"
import { useEffect } from "react";

export default function Layout(){

    useEffect(() => {
    // Clear admin session whenever this layout renders
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("id");
  }, []); // Runs once when the customer layout mounts


    return(
        <>
        <Header></Header>

        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}
