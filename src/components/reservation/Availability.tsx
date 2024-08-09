import { useWeb3 } from '@/context/web3Context';
import { ethers } from 'ethers';
import contractABI from '../../../vilaABI.json';
import { CONTRACT_ADDRESS } from '@/constant';
 

export const Availability: React.FC = () => {
    const { provider,status } = useWeb3();

    const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, provider);

    const handleRentVilla = async () => {
        const signer = new ethers.Wallet("1fcf3f6ccd285f2edac000ed4cf0ce72da6c0249224c1092940ab73758094422", provider);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);
        console.log(signer.address)
        const tx = await contract.rentVilla(1);
        console.log(tx)
    }
    return (
        <div className="w-full flex flex-col justify-center py-14 gap-4 px-6 md:px-4">
            <div className="flex flex-col md:flex-row  mx-auto  gap-2">
                <div className="badge badge-accent p-4">Available</div>
                <div className="badge badge-primary p-6 md:p-4">Start Date: {status.purposeStartDate} - End Date: {status.purposeEndDate}</div>
                <div className="badge badge-primary p-4">Total Night: {status.purposeNight} </div>
                <div className="badge badge-primary p-4">Total Price: 10 Lisk</div>
            </div>
            <div className="">
                <button className="btn btn-neutral w-full" onClick={handleRentVilla}>Rent this Villa</button>

            </div>
        </div>
    )
}

