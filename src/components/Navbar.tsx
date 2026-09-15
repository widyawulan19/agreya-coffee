import { NavLink } from "react-router-dom";
import { IoHome, IoAlertCircleOutline, IoMenu } from "react-icons/io5";
import logo from '../assets/logo-icon.png'




export default function Navbar() {
    const linkStyle = "px-4 py-2 text-icon";


    return (
        <nav className="w-[90%]">
            <div className="w-full flex items-center justify-between  gap-4 color-accent">
                <NavLink to="/" className={linkStyle}><IoHome size={20} /></NavLink>
                <div className="w-[120px] h-[50px] flex items-center justify-center">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[30px] h-[30px]"
                    />
                </div>
                <NavLink to="/about-page" className={linkStyle}><IoMenu size={23} /></NavLink>
            </div>
        </nav>
    )
}