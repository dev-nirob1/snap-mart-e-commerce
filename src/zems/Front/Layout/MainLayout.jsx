import { Outlet } from "react-router-dom";
import NavbarSection from "../../../components/Section/NavbarSection";
import FooterSection from "../../../components/Section/FooterSection";

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