import Navbar from "../components/Navbar"
import NavButton from "../components/NavButton"

// image 
import img from '../assets/dkultur/about.png'
import img2 from '../assets/dkultur/aboutlock.png'

// icon 
import { MdAccessTime, MdLocationOn, MdMailOutline } from "react-icons/md";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import ImageLoader from "../components/ImageLoader";

export default function AboutPage() {

    return (
        <div className='bg-primary h-screen w-[360px] pt-4 flex flex-col items-center gap-4'>
            <Navbar />

            <div className="w-[90%] h-[80vh] overflow-y-auto flex flex-col gap-4 py-2">
                <div className="w-full flex flex-col items-center mt-1 gap-1 text-center">
                    <span className="tracking-[1px] text-grey text-xs font-medium uppercase">
                        ABOUT US
                    </span>
                    <h2 className="font-lora text-2xl font-medium tracking-[1.5px] text-accent">
                        Our Story
                    </h2>
                </div>

                <div>
                    <ImageLoader
                        src={img}
                        alt="about"
                        className="w-full h-full rounded-2xl mt-1 object-cover border border-[#e4e0e0]"
                    />
                    <div className="mt-2 p-2">
                        <h3 className="font-lora text-accent font-bold text-lg my-1.5">Crafted With Purpose</h3>
                        <p className="text-xs font-light text-[#5A6154] leading-relaxed">
                            Born from a passion for sustainable sourcing
                            and the perfect roast, Ethos Coffee is more
                            than a boutique—it's a sanctuary for the
                            discerning urban palate. We believe that
                            every cup tells a story of the soil, the season,
                            and the hands that nurtured the beans.
                        </p>
                        <hr className="w-[30%] mt-3 border-[#dce0d5]" />
                    </div>
                </div>

                {/* HOURS OPERATIONAL */}
                <div
                    className="
                        w-full
                        rounded-2xl
                        bg-card-soft
                        p-4
                        px-5
                        border border-[#e4e0e0]
                        transition-all
                        duration-300
                        hover:drop-shadow-sm
                    "
                >
                    <h3 className="font-lora font-bold text-base mt-1 mb-3 flex items-center gap-2 text-accent">
                        <MdAccessTime className="text-xl text-accent" />
                        Our Hours
                    </h3>

                    <p className="text-xs leading-5 font-light text-[#5A6154]">
                        Monday - Friday: 7:00 AM - 8:00 PM
                        <br />
                        Saturday - Sunday: 8:00 AM - 6:00 PM
                    </p>

                    <hr className="mt-4 w-12 border-[#dce0d5]" />
                </div>

                {/* LOCATION  */}
                <div
                    className="
                        w-full
                        rounded-2xl
                        bg-card-soft
                        p-4
                        px-5
                        border border-[#e4e0e0]
                        transition-all
                        duration-300
                        hover:drop-shadow-sm
                    "
                >
                    <h3 className="font-lora font-bold text-base mt-1 mb-3 flex items-center gap-2 text-accent">
                        <MdLocationOn className="text-xl text-accent" />
                        Location
                    </h3>

                    <p className="text-xs leading-5 font-light text-[#5A6154]">
                        123 Artisan Alley, Creative District
                    </p>
                    <img
                        src={img2}
                        alt="Location"
                        className="w-full h-auto mt-3 rounded-xl border border-[#e4e0e0]"
                    />

                    <hr className="mt-4 w-12 border-[#dce0d5]" />
                </div>

                {/* INQUIRIES  */}
                <div
                    className="
                        flex
                        gap-3.5
                        items-center
                        justify-start
                        w-full
                        rounded-2xl
                        bg-card-soft
                        p-3.5
                        px-5
                        border border-[#e4e0e0]
                        transition-all
                        duration-300
                        hover:drop-shadow-sm
                    "
                >
                    <div className="p-2.5 rounded-2xl text-accent bg-card-light">
                        <MdMailOutline className="text-lg" />
                    </div>

                    <div>
                        <span className="font-medium text-[10px] text-accent tracking-wider">INQUIRIES</span>
                        <p className="text-xs font-light text-[#5A6154]">hello@dkulturcoffee.com</p>
                    </div>
                </div>

                {/* SOCIAL MEDIA  */}
                <div
                    className="
                        flex
                        gap-3.5
                        items-center
                        justify-start
                        w-full
                        rounded-2xl
                        bg-card-soft
                        p-3.5
                        px-5
                        border border-[#e4e0e0]
                        transition-all
                        duration-300
                        hover:drop-shadow-sm
                    "
                >
                    <div className="p-2.5 rounded-2xl text-accent bg-card-light">
                        <HiGlobeAsiaAustralia className="text-lg" />
                    </div>

                    <div>
                        <span className="font-medium text-[10px] text-accent tracking-wider">FOLLOW OUR JOURNEY</span>
                        <p className="text-xs font-light text-[#5A6154]">dkulturcoffee.com  |  @dkulturcoffee </p>
                    </div>
                </div>
            </div>

            <NavButton />
        </div>
    )
}