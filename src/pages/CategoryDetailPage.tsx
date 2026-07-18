import Navbar from "../components/Navbar";
import NavButton from "../components/NavButton";
import menu from '../data/cafe2.json'
import type { MenuCategoryCafe } from "../types/menu";

// image 
import img1 from '../assets/dkultur/cat1-new.png'
import img2 from '../assets/dkultur/cat2.png'
import img3 from '../assets/dkultur/cat3.png'
import img4 from '../assets/dkultur/cat4.png'
import img5 from '../assets/dkultur/cat5.png'
import img6 from '../assets/dkultur/cat6.png'
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBackOutline, IoMenu } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa";
import ImageLoader from "../components/ImageLoader";

type CategoryName = | "Dekultur Signature" | "Coffee" | "Non Coffee" | "Traditional Coffee" | "Refresher" | "Tea";

const data = menu as MenuCategoryCafe[];

export default function CategoryDetailPage() {
    const { name } = useParams();
    const navigate = useNavigate();

    const navigateToCategory = () => {
        navigate('/category-page')
    };

    //FUNGSI MENDAPATKAN DATA PER CATEGORY
    const category = data.find(
        (c) => c.category.toLowerCase() === name?.toLowerCase()
    );

    if (!category) {
        return <div className='p-6'>Category not found</div>
    }

    const categoryPic: Record<CategoryName, string> = {
        "Dekultur Signature": img1,
        "Coffee": img2,
        "Non Coffee": img3,
        "Traditional Coffee": img4,
        "Refresher": img5,
        "Tea": img6
    };


    return (
        <div className='bg-primary h-screen w-[360px] pt-4 pb-4 px-4 flex flex-col items-center  gap-4'>
            <Navbar />

            <div className="p-2  flex flex-col gap-2 h-[80vh]  ">

                {/* HEADER CATEGORY  */}
                <div className='w-[95%] flex items-center justify-between '>
                    <IoArrowBackOutline
                        className='text-xl cursors-pointer'
                        onClick={navigateToCategory}
                    />
                    <h1 className='text-card font-bold  flex items-center justify-start'>
                        {category.category}
                    </h1>
                    <IoMenu className="text-primary" />
                </div>

                <div className=" h-[75vh] overflow-y-auto flex flex-col gap-2 ">
                    <div className=" border-l-3 border-gray-600 p-3 bg-gray-200 ">
                        <p className="text-[10px]">
                            {category.categoryDesc}
                        </p>
                    </div>

                    {/* IMAGE CATEGORY  */}
                    <div className='flex items-center justify-center w-full'>
                        <ImageLoader
                            src={categoryPic[category.category as CategoryName]}
                            alt={category.category}
                        />
                        {/* <img src={categoryPic[category.category as CategoryName]} alt="" /> */}
                    </div>

                    {/* MENU LIST  */}
                    <div>
                        <div className="mt-4 p-2 pr-1 w-full flex items-center justify-between text-accent text-md font-bold border-b-1 border-gray-200 bg-gray-200">
                            <h3 className="" >{category.category}</h3>
                            <div className="w-[90px] flex items-center justify-start gap-5 ">
                                <p>M</p>
                                <p>L</p>
                            </div>
                        </div>

                        <div className="px-2 py-2">
                            {category.items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between p-3 border-b-1 border-b-gray-200"
                                >
                                    <h4
                                        style={{ fontSize: '14px' }}
                                        className={
                                            item.tags.includes("best seller")
                                                ? "text-accent font-bold"
                                                : "text-accent font-light"
                                        }
                                    >
                                        {item.name}
                                    </h4>
                                    {item.tags.includes("best seller") && (
                                        <span className="text-[10px] text-white bg-accent px-1 py-1 rounded-lg">
                                            <FaThumbsUp />
                                        </span>
                                    )}

                                    <div className="w-[100px]  flex items-center justify-center gap-5">
                                        <span className="text-sm">{item.price.medium}K</span>
                                        <span className="text-sm">{item.price.large}K</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>




            </div>

            <NavButton />
        </div >
    )
}