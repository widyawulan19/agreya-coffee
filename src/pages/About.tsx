import Navbar from "../components/Navbar"
import NavButton from "../components/NavButton"

// image 
import img from '../assets/dkultur/about.png'
import img2 from '../assets/dkultur/aboutlock.png'

// icon 
import { MdAccessTime, MdLocationOn, MdMail, MdMailOutline } from "react-icons/md";
import { HiGlobeAsiaAustralia } from "react-icons/hi2";
import ImageLoader from "../components/ImageLoader";

export default function AboutPage() {

    return (
        <div className='bg-primary h-screen w-[360px] pt-4 pb-4 px-4 flex flex-col items-center  gap-4'>
            <Navbar />

            <div className="p-2  flex flex-col gap-2 h-[80vh] overflow-y-auto">
                <div>
                    <h1 className="text-card font-bold text-lg text-center w-full">
                        Our Story
                    </h1>
                    <ImageLoader
                        src={img}
                        alt="about"
                        className="w-full h-full rounded-lg mt-2 "
                    />
                    {/* <img src={img} alt="about" className="w-full h-auto rounded-xs mt-2" /> */}
                    <div className="mt-2 p-2">
                        <h3 className="text-card font-bold text-md my-1.5">Crafted With Purpose</h3>
                        <p className="text-[10px] text-gray-600">
                            Born from a passion for sustainable sourcing
                            and the perfect roast, Ethos Coffee is more
                            than a boutique—it's a sanctuary for the
                            discerning urban palate. We believe that
                            every cup tells a story of the soil, the season,
                            and the hands that nurtured the beans.
                        </p>
                        <hr className="w-[30%] mt-1 border border-gray-300" />
                    </div>
                </div>


                {/* HOURS OPERATIONAL */}
                <div
                    className="
                    my-2
                        w-full
                        rounded-2xl
                        bg-white
                        p-3
                        px-5
                        shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                        border border-gray-100
                        transition-all
                        duration-300
                        hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                    "
                >


                    <h3 className="text-card font-bold text-md mt-1 mb-3 flex items-center gap-2 text-[#7D562D] ">
                        <MdAccessTime className="text-2xl" />
                        Our Hours
                    </h3>

                    <p className="text-xs leading-5 text-gray-600">
                        Monday - Friday: 7:00 AM - 8:00 PM
                        <br />
                        Saturday - Sunday: 8:00 AM - 6:00 PM
                    </p>

                    <hr className="mt-4 w-12 border-gray-300" />
                </div>


                {/* LOCATION  */}
                <div
                    className="
                    my-2
                        w-full
                        rounded-2xl
                        bg-white
                        p-3
                        px-5
                        shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                        border border-gray-100
                        transition-all
                        duration-300
                        hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                    "
                >


                    <h3 className="text-card font-bold text-md mt-1 mb-3 flex items-center gap-2 text-[#7D562D] ">
                        <MdLocationOn className="text-2xl" />
                        Location
                    </h3>

                    <p className="text-xs leading-5 text-gray-600">
                        123 Artisan Alley, Creative District
                    </p>
                    <img src={img2} alt="Location" className="w-full h-auto mt-2 rounded-lg" />

                    <hr className="mt-4 w-12 border-gray-300" />
                </div>

                {/* INQUIRIES  */}
                <div
                    className="
                    my-2
                    flex
                    gap-3
                    items-center
                    justify-start
                        w-full
                        rounded-2xl
                        bg-white
                        p-3
                        px-5
                        shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                        border border-gray-100
                        transition-all
                        duration-300
                        hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                    "
                >


                    <h3 className="p-2 rounded-2xl text-accent bg-[#FFDCBD] ">
                        <MdMailOutline className="text-lg" />
                    </h3>

                    <div>
                        <span className="font-light text-[10px]  text-[#7D562D] tracking-wider">INQUIRIES</span>
                        <p className="text-xs text-gray-600">hello@dkulturcoffee.com</p>
                    </div>
                </div>

                {/* SOCIAL MEDIA  */}
                <div
                    className="
                    my-2
                    flex
                    gap-3
                    items-center
                    justify-start
                        w-full
                        rounded-2xl
                        bg-white
                        p-3
                        px-5
                        shadow-[0_8px_24px_rgba(0,0,0,0.08)]
                        border border-gray-100
                        transition-all
                        duration-300
                        hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                    "
                >


                    <h3 className="p-2 rounded-2xl text-accent bg-[#FFDCBD] ">
                        <HiGlobeAsiaAustralia className="text-lg" />
                    </h3>

                    <div>
                        <span className="font-light text-[10px]  text-[#7D562D] tracking-wider">FOLLOW OUR JOURNEY</span>
                        <p className="text-xs text-gray-600">dkulturcoffee.com  |  @dkulturcoffee </p>
                    </div>
                </div>


            </div>

            <NavButton />
        </div>
    )
}