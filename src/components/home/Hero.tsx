import { Specification } from "../global/Specification"

export const Hero: React.FC = () => {
    return (
        <div className="px-6 md:px-4  pt-4 md:pt-20"  id="about">
            <div className="w-full  md:flex  justify-between items-end text-black">
                <h1 className="text-5xl md:text-6xl font-bold">Seamless Stays,<br /> Effortless Bookings with Blockchain</h1>
                <div className="md:w-1/3 pt-4 md:pt-0">
                    <p className="text-start md:text-start">Dive into a world of comfort and convenience as we connect you with the finest villas, ensuring a perfect getaway tailored to your preferences.</p>
                </div>
            </div>
            <Specification withCta={true}/>
        </div>
    )
}