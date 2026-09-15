import Navbar from "../components/Navbar";
import NavButton from "../components/NavButton";
import img from '../assets/dkultur/rec1.png'
import menu from '../data/cafe2.json'
import type { MenuCategoryCafe, MenuItemCafe } from "../types/menu";
import ImageLoader from "../components/ImageLoader";

const data = menu as MenuCategoryCafe[];

export default function RecommendationPage() {
    const allItems: MenuItemCafe[] = data.flatMap((c) => c.items);

    const ourPick = allItems.find((item) =>
        item.menuPicks.includes("mainMenu")
    )

    const ourBestSeller = allItems.filter((item) =>
        item.menuPicks.includes("guest")
    );


    return (
        <div className='bg-primary h-screen w-[360px] pt-4 pb-4 px-4 flex flex-col items-center  gap-4'>
            <Navbar />

            <div className="p-2  flex flex-col gap-2 h-[80vh] overflow-y-auto  ">

                {/* HEADER  */}
                <div>
                    <h1 className='text-card font-bold  flex items-center justify-start'>
                        Recommendation
                    </h1>
                </div>
                <div className=" border-l-3 border-gray-600 p-3 bg-gray-200 ">
                    <p className="text-[10px]">
                        Not sure what to order? Start with our customer favorites, carefully selected for the best Dekultur experience.
                    </p>
                </div>

                {/* BARISTA PICK  */}
                <div className='flex flex-col items-center justify-center gap-2 mt-4 mb-4'>
                    <h2 className="text-lg font-semibold flex items-center justify-center">Barista Picks</h2>
                    <div className="w-[90%] h-full rounded-2xl bg-white border border-[#E8DDDD]" >
                        <ImageLoader
                            src={img}
                            alt="Recommendation 1"
                        />
                        {/* <img src={img} alt="Recommendation 1" /> */}

                        <div className=" flex flex-col items-start justify-start p-4 gap-2.5">
                            <div className=" w-full flex items-center justify-between font-bold">
                                <h3>{ourPick?.name}</h3>
                                <p>30K</p>
                            </div>
                            <p className="text-xs text-soft-accent font-light ">{ourPick?.description}</p>
                        </div>
                    </div>
                </div>

                {/* BEST SELLER MENU  */}
                <div>
                    <div className="mt-4 p-2 pr-1 w-full flex items-center justify-between text-accent text-md font-bold border-b-1 border-gray-200 bg-gray-200 border-b-1 border-b-accent">
                        <h3 className=""> Our Best Seller </h3>
                        <div className="w-[90px] flex items-center justify-start gap-5 ">
                            <p>M</p>
                            <p>L</p>
                        </div>
                    </div>
                    <div className="px-2 py-2">
                        {ourBestSeller.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between p-3 border-b-1 border-b-gray-200"
                            >
                                <h4 className="text-sm">{item.name}</h4>
                                <div className="w-[100px]  flex items-center justify-center gap-5">
                                    <span className="text-sm">{item.price.medium}K</span>
                                    <span className="text-sm">{item.price.large}K</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <NavButton />
        </div >
    )
}