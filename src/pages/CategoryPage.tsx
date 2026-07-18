import Navbar from "../components/Navbar";
import menu from '../data/cafe2.json'
import type { MenuCategoryCafe } from "../types/menu";


// image 
import img1 from '../assets/dkultur/cat1-new.png'
import img2 from '../assets/dkultur/cat2.png'
import img3 from '../assets/dkultur/cat3.png'
import img4 from '../assets/dkultur/cat4.png'
import img5 from '../assets/dkultur/cat5.png'
import img6 from '../assets/dkultur/cat6.png'
import { useNavigate } from "react-router-dom";
import NavButton from "../components/NavButton";
import ImageLoader from "../components/ImageLoader";

type CategoryName = | "Dekultur Signature" | "Coffee" | "Non Coffee" | "Traditional Coffee" | "Refresher" | "Tea";

const data = menu as MenuCategoryCafe[];

export default function CategoryPage() {
    const navigate = useNavigate();

    const navigateToCategory = (name: string) => {
        navigate(`/category-detail-page/${encodeURIComponent(name)}`);
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

            <div className="w-[90%]">
                <h2 className="font-bold text-accent text-lg mb-2">Our Menu</h2>
                <p className="font-light text-soft-accent text-[11px]">
                    Browse our handcrafted coffee, refreshing beverages, and freshly prepared snacks—made to brighten every day.
                </p>
            </div>

            <div className="p-2 flex flex-col gap-4  h-[75vh] overflow-y-auto ">
                {data.map((item, index) => (
                    <div className="list-card" key={index}>
                        <div
                            className="cursor-pointer overflow-hidden rounded-xl"
                            onClick={() => navigateToCategory(item.category)}
                        >
                            <ImageLoader
                                src={categoryPic[item.category as CategoryName]}
                                alt={item.category}
                                className="
                                    transition-all
                                    duration-300
                                    ease-out
                                    hover:scale-105
                                    hover:-translate-y-1
                                    hover:drop-shadow-xl
                                "
                            />
                            {/* <img
                                src={categoryPic[item.category as CategoryName]}
                                alt={item.category}
                                className="
                                    transition-all
                                    duration-300
                                    ease-out
                                    hover:scale-105
                                    hover:-translate-y-1
                                    hover:drop-shadow-xl
                                "
                            /> */}
                        </div>
                    </div>
                ))}
            </div>

            <NavButton />


        </div>
    )
}