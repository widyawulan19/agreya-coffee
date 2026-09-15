import Navbar from "../components/Navbar";
import NavButton from "../components/NavButton";
import menu from '../data/cafe3.json'
import type { MenuCategory, MenuItem } from "../types/menu";

// image 
import img1 from '../assets/category/catBg1.png'
import img2 from '../assets/category/catBg2.png'
import img3 from '../assets/category/catBg3.png'
import img4 from '../assets/category/catBg4.png'
import img5 from '../assets/category/catBg5.png'
import img6 from '../assets/category/catBg6.png'
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBackOutline, IoMenu } from "react-icons/io5";

type CategoryName = | "Ice Coffee" | "Hot Coffee" | "Non Coffee Frappe" | "Coffee Frappe" | "Agreya Signature" | "Mont Blanc Series";

const data = menu as MenuCategory[];

export default function CategoryDetailPage() {
    const { title } = useParams();
    const navigate = useNavigate();

    const navigateToCategory = () => {
        navigate('/category-page')
    };

    //FUNGSI MENDAPATKAN DATA PER CATEGORY
    const category = data.find(
        (c) => c.category.toLowerCase() === title?.toLowerCase()
    );

    if (!category) {
        return <div className='p-6'>Category not found</div>
    }

    const categoryPic: Record<CategoryName, string> = {
        "Ice Coffee": img1,
        "Hot Coffee": img2,
        "Non Coffee Frappe": img3,
        "Coffee Frappe": img4,
        "Agreya Signature": img5,
        "Mont Blanc Series": img6
    };


    return (
        <div className='bg-primary h-screen w-[360px] pt-4  flex flex-col items-center  gap-4'>
            <Navbar />

            <div className="w-full flex flex-col items-center gap-2  h-[80vh] overflow-auto">

                {/* HEADER CATEGORY  */}
                <div className='w-[80%] flex items-center justify-between '>
                    <IoArrowBackOutline
                        className='text-xl cursors-pointer'
                        onClick={navigateToCategory}
                    />
                    <h1 className='text-card font-light  font-lora text-accent text-2xl  flex items-center justify-start'>
                        {category.category}
                    </h1>
                    <IoMenu className="text-primary" />
                </div>

                <div className="flex flex-col items-center gap-8 w-full h-full overflow-auto mt-4">
                    <div className="relative w-full h-[70%] mb-8  flex flex-col items-center justify-center">
                        <img
                            src={categoryPic[category.category as CategoryName]}
                            alt={category.category}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-[-50px]  w-full bg-white/5 backdrop-blur-[1px] pt-4 px-5 text-accent">
                            <button
                                className="text-[9px] tracking-[1px] text-white bg-accent px-2 py-1 rounded-xl "
                            >
                                COFFEE SERIES
                            </button>
                            <h2 className="text-2xl font-lora font-light mt-3 mb-1">{category.category}</h2>
                            <p className="text-xs  text-[#404946] leading-5">
                                {category.description}
                            </p>
                        </div>
                    </div>

                    <div className=" w-full flex items-center justify-between px-5 pt-10">
                        <h3 className="font-lora text-lg font-normal">List Menu</h3>
                        <p className="text-xs  text-[#404946] leading-5 ">{category.jumlahItem}  ITEMS</p>
                    </div>

                    <div className=" w-[85%] flex flex-col items-center justify-between ">
                        {category.items.map((item, index) => (
                            <div
                                key={index}
                                className="w-full border-b border-accent py-4.5 px-3 flex flex-col gap-1"
                            >
                                <div className="w-full flex items-center justify-between text-accent">
                                    <h3 className="font-lora text-lg">{item.title}</h3>
                                    <span className="text-xl font-semibold ">{item.price}</span>
                                </div>
                                <p className="text-xs font-light  text-[#404946] leading-5 w-[85%]">{item.desc}</p>
                            </div>
                        ))}

                    </div>
                </div>


            </div>

            <NavButton />
        </div >
    )
}