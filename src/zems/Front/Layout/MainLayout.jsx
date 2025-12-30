import { Outlet } from "react-router-dom";
import NavbarSection from "../../../components/Section/Navbar/NavbarSection";
import FooterSection from "../../../components/Section/Footer/FooterSection";

const MainLayout = () => {
    return (
        <div>
            <NavbarSection/>
            <Outlet/>
            <FooterSection/>
        </div>
    );
};

export default MainLayout;