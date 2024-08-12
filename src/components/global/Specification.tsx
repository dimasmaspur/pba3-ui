import { useRouter } from 'next/router';

export const Specification: React.FC<{ withCta: boolean }> = ({ withCta }) => {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/reservation'); // Navigate to the Reservation page
    };

    return (
        <div className="md:flex pt-10 gap-4 text-black">
            {/* Left Image Section */}
            <div className="hidden md:block">
                <img src="/img/longpool.jpg" alt="Villa 1" className="rounded-xl w-96" />
            </div>

            {/* Right Content Section */}
            <div className="w-full flex flex-col justify-between">
                <img src="/img/vila-2.jpg" alt="Villa 2" className="rounded-xl w-full h-80 object-cover" />

                {/* Villa Details */}
                <div className="flex w-full items-end gap-4 pt-4 flex-wrap md:flex-nowrap">
                    <div className="flex gap-4 w-full">
                        <div className="flex flex-col gap-1 md:w-1/4">
                            <span>Villa Name</span>
                            <div className="badge badge-outline p-4 font-bold w-full">Pelita Bangsa Villa</div>
                        </div>
                        <div className="flex flex-col gap-1 md:w-1/4">
                            <span>City or Region</span>
                            <div className="badge badge-outline p-4 font-bold w-full">Uluwatu, Bali</div>
                        </div>
                        <div className="flex flex-col gap-1 md:w-1/4">
                            <span>Capacity</span>
                            <div className="badge badge-outline p-4 font-bold w-full">4 Bed, 4 Bathroom</div>
                        </div>
                        <div className="flex flex-col gap-1 md:w-1/4">
                            <span>Price/Night</span>
                            <div className="badge badge-outline p-4 font-bold w-full">0.001 ETH</div>
                        </div>
                    </div>
                    {withCta && (
                        <button
                            className="btn btn-primary bg-green-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                            onClick={handleButtonClick}
                        >
                            Book Now
                        </button>
                    )}
                </div>
                   
            {/* Main Facilities */}
            <div className="flex gap-8 justify-between w-full flex-wrap md:flex-nowrap pt-5">
                    <div className="flex flex-col gap-1 md:w-1/2">
                        <span>Main Facilities</span>
                        <ul className="list-disc ml-6">
                            <li className="text-lg">AC, Free Wifi, and Fully Equipped Kitchen </li>
                            <li className="text-lg">Spacious Lounge, Terrace and Balcony Areas</li>
                            <li className="text-lg">Private Pool, Garden</li>
                            <li className="text-lg">Vast Parking Space</li>
                        </ul>
                    </div>
                    
                </div>

                
            </div>
        </div>
    );
};
