export const Rewards: React.FC = () => {

    return (
        <div className="pt-24 px-6 md:px-4 text-black">
            <h1 className="text-3xl font-bold" id="rewards">Let's Rent with us to get more rewards</h1>
            
            {/* Basic Reward Tier */}
            <div className="flex flex-col md:flex-row gap-4 pt-8">
                <img src={'/img/reward1.png'} alt="Basic Reward" className="rounded-xl w-50 h-20 object-cover ml-4" />
                <div>
                    <p style={{ fontSize: "2vw" }} className="text-3xl font-bold" id="rewards">Basic: 5-30 VLT</p>
                    <ul className="list-disc ml-6">
                        <li className="text-lg">Enjoy 5% Discount on The Next Rental</li>
                    </ul>
                </div>
            </div>
            
            {/* Silver Reward Tier */}
            <div className="flex flex-col md:flex-row gap-4 pt-8">
                <img src={'/img/rewardsilver.png'} alt="Silver Reward" className="rounded-xl w-50 h-20 object-cover ml-4" />
                <div>
                    <p style={{ fontSize: "2vw" }} className="text-3xl font-bold" id="rewards">Silver: 31-90 VLT</p>
                    <ul className="list-disc ml-6">
                        <li className="text-lg">Enjoy 7% Discount on The Next Rental</li>
                        <li className="text-lg">Early Check-In or Late Check-Out</li>
                        <li className="text-lg">Exclusive Access to Seasonal Promotions</li>
                    </ul>
                </div>
            </div>

            {/* Gold Reward Tier */}
            <div className="flex flex-col md:flex-row gap-4 pt-8">
                <img src={'/img/rewardgold.png'} alt="Gold Reward" className="rounded-xl w-50 h-20 object-cover ml-4" />
                <div>
                    <p style={{ fontSize: "2vw" }} className="text-3xl font-bold" id="rewards">Gold: 91-150 VLT</p>
                    <ul className="list-disc ml-6">
                        <li className="text-lg">Free 1-Day Stay for Every 14 Days Rent</li>
                        <li className="text-lg">Priority Booking</li>
                        <li className="text-lg">Welcome Package</li>
                    </ul>
                </div>
            </div>

            {/* Platinum Reward Tier */}
            <div className="flex flex-col md:flex-row gap-4 pt-8">
                <img src={'/img/VIP.jpg'} alt="Platinum Reward" className="rounded-xl w-50 h-20 object-cover ml-4" />
                <div>
                    <p style={{ fontSize: "2vw" }} className="text-3xl font-bold" id="rewards">Platinum: 150+ VLT</p>
                    <ul className="list-disc ml-6">
                        <li className="text-lg">VIP Concierge Services</li>
                        <li className="text-lg">Complimentary Spa Treatments</li>
                        <li className="text-lg">Enjoy Free Food and Drinks</li>
                        <li className="text-lg">Exclusive Villa Access</li>                        
                    </ul>
                </div>
            </div>

            {/* Cumulative Rewards */}
            <div className="flex flex-col md:flex-row gap-4 pt-8">
                <div className="rounded-xl w-50 h-20 object-cover ml-4" />
                <div>
                    <p style={{ fontSize: "2vw" }} className="text-3xl font-bold" id="rewards">Cumulative Rewards</p>
                    <ul className="list-disc ml-6">
                        <li className="text-lg">Collect 100 VLT tokens over a year to receive a Free Weekend Stay</li>
                        <li className="text-lg">Earn bonus VLT tokens for every 10 consecutive days of rentals</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
