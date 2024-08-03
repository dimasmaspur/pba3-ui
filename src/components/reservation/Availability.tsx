
export const Availability: React.FC = () => {
    return (
        <div className="w-full flex flex-col justify-center py-14 gap-4 px-6 md:px-4">
            <div className="flex flex-col md:flex-row  mx-auto  gap-2">
                <div className="badge badge-accent p-4">Available</div>
                <div className="badge badge-primary p-6 md:p-4">Start Date: 10 June 2024 - End Date: 20 June 2024</div>
                <div className="badge badge-primary p-4">Total Night: 10 </div>
                <div className="badge badge-primary p-4">Total Price: 10 Lisk</div>
            </div>
            <div className="">
                <button className="btn btn-neutral w-full">Rent this Villa</button>

            </div>
        </div>
    )
}

