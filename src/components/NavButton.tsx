import { BiSolidFoodMenu } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaHouseCircleExclamation } from "react-icons/fa6";
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
        <div className="w-[90%] flex items-center justify-between p-4  h-[30px]">
            <div className="flex flex-col items-center justify-center gap-1">
                <button
                    onClick={() => navigate("/category-page")}
                    className={`
                        flex items-center justify-center
                        w-8 h-8 rounded-xl
                        transition-all duration-200
                        cursor-pointer

                        ${activeTab === "menu"
                            ? "bg-accent text-white shadow-md scale-110"
                            : "text-gray-400 hover:text-accent active:text-accent"
                        }
                    `}
                >
                    <BiSolidFoodMenu size={22} />
                </button>
                <span className="text-xs">Menu</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
                <button
                    onClick={() => navigate("/recommendation-page")}
                    className={`
                        flex items-center justify-center
                        w-8 h-8 rounded-xl
                        transition-all duration-200
                        cursor-pointer

                        ${activeTab === "recommendation page"
                            ? "bg-accent text-white shadow-md scale-110"
                            : "text-gray-400 hover:text-accent"
                        }
                    `}
                >
                    <FaStar size={20} />
                </button>
                <span className="text-xs">Recommendation</span>
            </div>

            <div className="flex flex-col items-center justify-center gap-1">
                <button
                    onClick={() => navigate("/about-page")}
                    className={`
                        flex items-center justify-center
                        w-8 h-8 rounded-xl
                        transition-all duration-200
                        cursor-pointer

                        ${activeTab === "about"
                            ? "bg-accent text-white shadow-md scale-110"
                            : "text-gray-400 hover:text-accent"
                        }
                    `}
                >
                    <FaHouseCircleExclamation size={20} />
                </button>
                <span className="text-xs">About</span>
            </div>
        </div>
    );
};

export default NavButton;