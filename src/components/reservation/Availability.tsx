import { useWeb3 } from '@/context/web3Context';
import { ethers } from 'ethers';
import contractABI from '../../../vilaABI.json';
import { CONTRACT_ADDRESS } from '@/constant';
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const Availability: React.FC = () => {
    const { provider, status } = useWeb3();
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null);
    const [rentalPeriodMessage, setRentalPeriodMessage] = useState<string | null>(null);
    const [vltTokenMessage, setVltTokenMessage] = useState<string | null>(null);
    const [confirmationStatus, setConfirmationStatus] = useState<'success' | 'error' | null>(null);
    const [totalPayment, setTotalPayment] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false)
    const villaPricePerDay = ethers.parseEther("0.001"); // Price per day in ETH

    const calculateTotalPayment = () => {
        if (startDate && endDate) {
            const rentalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
            if (rentalDays > 0) {
                const total = villaPricePerDay * BigInt(rentalDays);
                setTotalPayment(ethers.formatEther(total));
            } else {
                setTotalPayment(null);
            }
        } else {
            setTotalPayment(null);
        }
    };

    useEffect(() => {
        calculateTotalPayment();
    }, [startDate, endDate]);

    const handleRentVilla = async () => {
        if (!provider) {
            console.error('Provider is not available');
            setConfirmationMessage('Provider is not available');
            setConfirmationStatus('error');
            return;
        }

        if (!startDate || !endDate) {
            console.error('Start date or end date is not selected');
            setConfirmationMessage('Start date or end date is not selected');
            setConfirmationStatus('error');
            return;
        }

        const rentalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

        if (rentalDays <= 0) {
            console.error('Rental duration must be greater than zero');
            setConfirmationMessage('Rental duration must be greater than zero');
            setConfirmationStatus('error');
            return;
        }

        try {
            setLoading(true)
            // Get signer
            const signer = await provider.getSigner();
            console.log("signer: ",signer)
            // Create contract instance
            const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);

            // const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, signer);

            const totalPaymentInEther = villaPricePerDay * BigInt(rentalDays);

            const tx = await contract.rentVilla(rentalDays, { value: totalPaymentInEther });
            console.log(tx);

            // Wait for the transaction to be confirmed
            await tx.wait();
            console.log('Transaction confirmed');
            setRentalPeriodMessage(`Rental Period: ${rentalDays} Days`);
            setVltTokenMessage(`You've Earned ${rentalDays} VLT to your Wallet`);
            setConfirmationMessage('Transaction Confirmed');
            setConfirmationStatus('success');
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error('Error renting villa:', error);
            setConfirmationMessage('Error renting villa. Please try again.');
            setRentalPeriodMessage(null);
            setVltTokenMessage(null);
            setConfirmationStatus('error');
        }

    };
    return (
        <div className="px-6 md:px-4 pt-4 md:pt-10">


            {/* Date Selection and Confirmation */}
            <div className="w-full text-black">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">Select Rental Date Here</h1>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="form-group flex flex-col gap-2 w-full md:w-auto">
                            <label className="badge badge-primary font-bold">Select Start Date</label>
                            <DatePicker
                                selected={startDate ?? undefined}
                                onChange={(date) => setStartDate(date as Date)}
                                selectsStart
                                startDate={startDate ?? undefined}
                                endDate={endDate ?? undefined}
                                placeholderText="Select start date"
                                className="input input-bordered input-success w-full max-w-xs"
                                dateFormat="dd-MMM-yyyy"
                            />
                        </div>
                        <div className="form-group flex flex-col gap-2 w-full md:w-auto">
                            <label className="badge badge-primary font-bold">Select End Date</label>
                            <DatePicker
                                selected={endDate ?? undefined}
                                onChange={(date) => setEndDate(date as Date)}
                                selectsEnd
                                startDate={startDate ?? undefined}
                                endDate={endDate ?? undefined}
                                minDate={startDate ?? undefined}
                                placeholderText="Select end date"
                                className="input input-bordered input-success w-full max-w-xs"
                                dateFormat="dd-MMM-yyyy"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-end w-full md:w-auto">
                        <span className="text-end md:text-start mr-3">Total Payment:</span>
                        {totalPayment && (
                            <div className="badge font-bold">
                                {totalPayment} ETH
                            </div>
                        )}
                        {
                            loading ? (
                                <span className="loading loading-bars loading-lg"></span>
                            ) : (
                                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={handleRentVilla}>
                                    Confirm Rent Villa
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* Confirmation Message */}
            {confirmationMessage && (
                <div
                    className={`mt-4 text-center p-2 rounded ${confirmationStatus === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
                >
                    {confirmationMessage}
                    {rentalPeriodMessage && (
                        <div className="mt-2">
                            {rentalPeriodMessage}
                        </div>
                    )}
                    {vltTokenMessage && (
                        <div className="mt-2">
                            {vltTokenMessage}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
