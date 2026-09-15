import Navbar from "../components/Navbar";
import menu from '../data/cafe3.json'
import type { MenuCategory } from "../types/menu";


// image 
import img1 from '../assets/category/cat1.png'
import img2 from '../assets/category/cat2.png'
import img3 from '../assets/category/cat3.png'
import img4 from '../assets/category/cat4.png'
import img5 from '../assets/category/cat5.jpeg'
import img6 from '../assets/category/cat6.png'
import { useNavigate } from "react-router-dom";
import NavButton from "../components/NavButton";
import ImageLoader from "../components/ImageLoader";
import { IoArrowForward } from "react-icons/io5";

type CategoryName = | "Ice Coffee" | "Hot Coffee" | "Non Coffee Frappe" | "Coffee Frappe" | "Agreya Signature" | "Mont Blanc Series";

const data = menu as MenuCategory[];

export default function CategoryPage() {
    const navigate = useNavigate();

    const navigateToCategory = (title: string) => {
        navigate(`/category-detail-page/${encodeURIComponent(title)}`);
    }


    const categoryPic: Record<CategoryName, string> = {
        "Ice Coffee": img1,
        "Hot Coffee": img2,
        "Non Coffee Frappe": img3,
        "Coffee Frappe": img4,
        "Agreya Signature": img5,
        "Mont Blanc Series": img6,
    };


    return (
        <div className='bg-primary h-screen w-[360px] pt-4  flex flex-col items-center gap-4 '>
            <Navbar />
            <div className="w-[90%] flex flex-col items-center gap-4  h-[80vh] overflow-auto">
                <div className="w-[90%] flex flex-col items-center mt-5 gap-2">
                    <span className="tracking-[1px] text-grey text-xs font-medium ">DISCOVERY</span>
                    <h2 className="font-medium tracking-[1px] text-accent text-[25px] ">Our Collections</h2>
                    <p className="font-light text-accent text-xs w-[90%] text-center leading-[20px]">
                        Experience the art of artisanal brewing.
                        From our signature Java Series to refined Mont Blanc Compositions, each category represents a curated journey through aroma and texture .
                    </p>
                </div>

                <div className="p-2 flex flex-col gap-5 w-[85%] h-full mt-4 ">
                    {data.map((item) => (
                        <div
                            className={`
                                flex flex-col 
                                cursor-pointer
                                transition-all
                                duration-300
                                ease-out
                                hover:scale-100
                                hover:-translate-y-1
                                hover:drop-shadow-md
                                rounded-4xl
                                border border-[#e4e0e0]
                                ${item.id % 2 === 0
                                    ? "bg-card-light"
                                    : "bg-card-soft"
                                }
                                
                                `}
                            key={item.id}
                            onClick={() => navigateToCategory(item.category)}

                        >
                            <div className=" p-5 text-accent flex flex-col gap-1.5">
                                <span className="text-sm font-light">0{item.id}</span>
                                <h2 className="text-xl font-bold">{item.category}</h2>
                                <p className="text-xs text-[#404946] font-light">{item.description}</p>
                                <p className="text-sm  flex items-center gap-1.5">{item.jumlahItem} items <IoArrowForward /></p>
                            </div>

                            <div className="rounded-b-4xl">
                                <img
                                    className="rounded-b-4xl w-full h-full object-cover"
                                    src={categoryPic[item.category as CategoryName]}
                                    alt={item.category}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <NavButton />
        </div>
    )
}