import { BiSolidFoodMenu } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaHouseCircleExclamation } from "react-icons/fa6";
import { IoBook, IoSparklesSharp, IoStorefront } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

export type Tab = "menu" | "recommendation page" | "about";

const NavButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    let activeTab: Tab = "menu";

    if (location.pathname === "/recommendation-page") {
        activeTab = "recommendation page";
    } else if (location.pathname === "/about-page") {
        activeTab = "about";
    } else {
        // aktif untuk /category maupun /category/:name
        activeTab = "menu";
    }

    return (
        <div className="w-full flex items-center justify-center p-5 py-6 h-[60px] bg-white">
            <div className="w-[90%] flex items-center justify-between">
                <div className="flex flex-col items-center justify-center ">
                    <button
                        onClick={() => navigate("/category-page")}
                        className={`
                            flex items-center justify-center
                            w-8 h-8 rounded-xl
                            transition-all duration-200
                            cursor-pointer

                            ${activeTab === "menu"
                                ? "text-icon scale-110"
                                : "text-icon2 hover:text-icon active:text-icon"
                            }
                        `}
                    >
                        <IoBook size={22} />
                    </button>
                    <span
                        className={`
                            text-xs font-medium
                            ${activeTab === "menu"
                                ? "text-icon"
                                : "text-icon2"
                            }
                        `}
                    >
                        Menu
                    </span>
                    {/* <span className="text-xs font-semibold text-icon">Menu</span> */}
                </div>

                <div className="flex flex-col items-center justify-center">
                    <button
                        onClick={() => navigate("/recommendation-page")}
                        className={`
                            flex items-center justify-center
                            w-8 h-8 rounded-xl
                            transition-all duration-200
                            cursor-pointer

                            ${activeTab === "recommendation page"
                                ? "text-icon scale-110"
                                : "text-icon2 hover:text-icon active:text-icon"
                            }
                        `}
                    >
                        <IoSparklesSharp size={20} />
                    </button>
                    <span
                        className={`
                            text-xs font-medium
                            ${activeTab === "recommendation page"
                                ? "text-icon"
                                : "text-icon2"
                            }
                        `}
                    >
                        Recommendation
                    </span>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <button
                        onClick={() => navigate("/about-page")}
                        className={`
                            flex items-center justify-center
                            w-8 h-8 rounded-xl
                            transition-all duration-200
                            cursor-pointer

                            ${activeTab === "about"
                                ? "text-icon scale-110"
                                : "text-icon2 hover:text-icon active:text-icon"
                            }
                        `}
                    >
                        <IoStorefront size={20} />
                    </button>
                    <span
                        className={`
                            text-xs font-medium
                            ${activeTab === "about"
                                ? "text-icon"
                                : "text-icon2"
                            }
                        `}
                    >
                        About
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NavButton;