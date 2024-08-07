import { useState } from 'react';
import { Specification } from "../global/Specification"
import { Contact } from "../home/Contact"

export const Option: React.FC = () => {
    const [startDate, setStartDate] = useState<string>('');
    const [endDate, setEndDate] = useState<string>('');
    const [dayDifference, setDayDifference] = useState<number>(0);

    const calculateDayDifference = () => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const difference = Math.floor((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
            return difference;
        }
        return 0;
    };

    const handleDateChange = () => {
        const difference = calculateDayDifference();
        setDayDifference(difference);
        console.log(difference);
    };

    return (
        <>
            <div className="py-12 md:py-20 px-6 md:px-4" id="contact-us">
                <div className="hero" style={{ backgroundImage: "url(/img/vila-3.jpg)" }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-xl p-10">
                            <h1 className="mb-5 text-xl md:text-5xl font-bold text-white">Seize your Stay With Villa PBA3</h1>
                            <p className="mb-5 text-white">
                                Don’t hesitate to make our villa your next destination. Experience unparalleled comfort and luxury in a setting designed for relaxation and enjoyment. Book your stay with us and discover why our guests leave with unforgettable memories.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-6 md:px-4 pt-4 md:pt-10">
                <div className="w-full md:flex justify-between items-end text-black">
                    <h1 className="md:w-1/2 text-5xl md:text-6xl font-bold">Please select rental date</h1>
                    <div className="md:w-1/2 flex flex-col md:flex-row items-end gap-2">
                        <div className="form-group flex flex-col gap-2 w-full item">
                            <label htmlFor="startDate">Start Date</label>
                            <input
                                name="startDate"
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                className="input input-bordered input-success w-full max-w-xs" />
                        </div>
                        <div className="form-group flex flex-col gap-2 w-full">
                            <label htmlFor="endDate">End Date</label>
                            <input
                                name="endDate"
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                className="input input-bordered input-success w-full max-w-xs" />
                        </div>
                        <button className="btn btn-neutral" onClick={handleDateChange}>Check Availability</button>
                    </div>
                </div>
                {dayDifference > 0 && (
                    <div className="pt-4 text-lg">
                        Selisih hari: {dayDifference} hari
                    </div>
                )}
            </div>
            {/* <Specification withCta={false} /> */}
        </>
    )
}
