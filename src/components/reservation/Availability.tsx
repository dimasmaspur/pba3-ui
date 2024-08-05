import { useWeb3 } from '@/context/web3Context';
import { ethers } from 'ethers';
import contractABI from '../../../vilaABI.json';
import { CONTRACT_ADDRESS } from '@/constant';
 

export const Availability: React.FC = () => {
    const { account, provider, connectWallet, logout } = useWeb3();
   
   /*
    // THIS IS FOR INTEGRATING TO THE SMART CONTRACT


   const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, provider);

   const handleRentVilla = async (days: number) => {
       const res = await contract.setVillaPricePerDay(days)
       console.log(res)
   }

   const handleGetStatus = async ()=>{
       const [daysRented, startTimestamp, endTimestamp] = await contract.getStatus("0x6858370F0002F8711ab4912e6ec293EB1b32dB34")
       console.log("daysRented: ",daysRented)
       console.log("startTimestamp: ",startTimestamp)
       console.log("endTimestamp: ",endTimestamp)
    }
   */
 

    return (
        <div className="w-full flex flex-col justify-center py-14 gap-4 px-6 md:px-4">
            <div className="flex flex-col md:flex-row  mx-auto  gap-2">
                <div className="badge badge-accent p-4">Available</div>
                <div className="badge badge-primary p-6 md:p-4">Start Date: 10 June 2024 - End Date: 20 June 2024</div>
                <div className="badge badge-primary p-4">Total Night: 10 </div>
                <div className="badge badge-primary p-4">Total Price: 10 Lisk</div>
            </div>
            <div className="">
                {/* <button className="btn btn-neutral w-full" onClick={handleGetStatus}>Get Status</button> */}
                <button className="btn btn-neutral w-full">Rent this Villa</button>

            </div>
        </div>
    )
}

