import Navbar from "../components/Navbar";
import NavButton from "../components/NavButton";
import menu from '../data/cafe3.json'
import ImageLoader from "../components/ImageLoader";
import type { MenuCategory, MenuItem } from "../types/menu";
import img1 from '../assets/recommendation/guest1.png'
import img2 from '../assets/recommendation/guest2.png'
import img3 from '../assets/recommendation/Dirty_Coffee.jpeg'
import img4 from '../assets/recommendation/pandan.jpeg'
import img5 from '../assets/recommendation/dirty_matcha.jpeg'

const data = menu as MenuCategory[];

export default function RecommendationPage() {
    const allItems: MenuItem[] = data.flatMap((c) => c.items);

    const ourBestSeller = allItems.filter((item) =>
        item.menuPicks?.includes("guestPicks")
    );

    const baristaPicks = allItems.filter((item) =>
        item.menuPicks?.includes("barista")
    )

    const guestFavImg: Record<string, string> = {
        "Salted Shaken Latte": img1,
        "Cappuccino": img2,
        "Dirty Latte": img3,
        "Dirty Matcha": img5,
        "Rahayu": img4
    };

    return (
        <div className='bg-primary h-screen w-[360px] pt-4 flex flex-col items-center  gap-4'>
            <Navbar />

            <div className="w-[90%] h-[80vh] overflow-y-auto flex flex-col items-center gap-6 py-6">
                {/* HEADER */}
                <div className="w-[90%] text-accent shrink-0">
                    <span className="text-[10px] tracking-[1px]">
                        HANDPICKED FOR YOU
                    </span>

                    <h2 className="text-2xl font-lora tracking-[1.5px] leading-[25px] mt-2">
                        Today's Recommendations
                    </h2>
                </div>

                {/* GUEST PICKS */}
                <div className="w-[80%]  flex flex-col gap-6 mt-4">
                    {/* TITLE */}
                    <div className="w-full">
                        <h3 className="font-lora text-xl text-accent mb-1">
                            ✨ Guest Favorites
                        </h3>

                        <p className="text-small font-light text-[#5A6154]">
                            The most-loved menu selections, enjoyed and recommended by
                            our guests every day.
                        </p>
                    </div>

                    {/* LIST */}
                    <div className="w-full flex flex-col gap-6">
                        {ourBestSeller.map((item, index) => (
                            <div
                                key={index}
                                className="w-full flex flex-col items-center justify-center mt-1.5 rounded-2xl border border-gray-100"
                            >
                                {/* IMAGE */}
                                <ImageLoader
                                    src={guestFavImg[item.title] || ''}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* INFO */}
                                <div className="flex flex-col items-center justify-center p-4  gap-0.5 bg-gray-100 rounded-b-2xl">
                                    <div className="w-full flex items-center justify-between">
                                        <h4 className="font-lora text-lg text-accent">
                                            {item.title}
                                        </h4>

                                        <span className="text-lg text-accent font-lora font-bold">
                                            {item.price}
                                        </span>
                                    </div>
                                    {/* DESCRIPTION */}
                                    <p className="text-xs font-light text-[#5A6154]">
                                        {item.desc}
                                    </p>
                                    <div className="flex items-center w-full">
                                        {item.extraTag && item.extraTag.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {item.extraTag.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="text-small bg-[#dce0d5] text-[#5A7863] px-2 py-1 rounded-full"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* BARISTA PICKS  */}
                <div className="w-[80%]  flex flex-col gap-6 mt-6">
                    {/* TITLE */}
                    <div className="w-full">
                        <h3 className="font-lora text-xl text-accent mb-1">
                            ☕️ Barista Picks
                        </h3>

                        <p className="text-small font-light text-[#5A6154]">
                            Carefully curated by our baristas, these selections are their personal favorites and recommendations for a delightful coffee experience.
                        </p>
                    </div>

                    {/* LIST */}
                    <div className="w-full flex flex-col gap-6">
                        {baristaPicks.map((item, index) => (
                            <div
                                key={index}
                                className="w-full flex flex-col items-center justify-center mt-1.5 rounded-2xl border border-gray-100"
                            >
                                {/* IMAGE */}
                                <ImageLoader
                                    src={guestFavImg[item.title] || ''}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* INFO */}
                                <div className="flex flex-col items-center justify-center p-4  gap-0.5 bg-gray-100 rounded-b-2xl">
                                    <div className="w-full flex items-center justify-between">
                                        <h4 className="font-lora text-lg text-accent">
                                            {item.title}
                                        </h4>

                                        <span className="text-lg text-accent font-lora font-bold">
                                            {item.price}
                                        </span>
                                    </div>
                                    {/* DESCRIPTION */}
                                    <p className="text-xs font-light text-[#5A6154]">
                                        {item.desc}
                                    </p>
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