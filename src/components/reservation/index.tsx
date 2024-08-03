import { Navbar } from "../global/Navbar";
import { Footer } from "../global/Footer";
import { Option } from "./Option";
import { Specification } from "../global/Specification";
import { Availability } from "./Availability";
export const ReservationPage: React.FC = () => {
    return (
        <>
            <Navbar />
            <Option />
            <div className="px-6 md:px-4">
                <Specification withCta={false} />
            </div>
            <Availability/>
            <Footer />

        </>
    )
}

