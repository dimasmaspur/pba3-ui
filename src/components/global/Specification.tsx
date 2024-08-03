export const Specification: React.FC<{ withCta: boolean }> = ({ withCta }) => {
    return (
        <div className="md:flex pt-10 gap-4 text-black">
            <div className="">
                <img src={'/img/vila-1.jpg'} alt="villa 1" className="rounded-xl w-96 hidden md:block" />
            </div>
            <div className="w-full flex flex-col justify-between">
                <img src={'/img/vila-2.jpg'} alt="villa 1" className="rounded-xl w-full h-80 object-cover" />
                <div className="flex w-full items-end gap-4 pt-4 flex-wrap md:flex-nowrap">
                    <div className="flex  gap-4 justify-between w-full flex-wrap md:flex-nowrap">
                        <div className="flex flex-col gap-1 md:w-1/4">
                            <span>Name</span>
                            <div className="badge badge-outline p-4 font-bold w-full">Vila PBA3</div>
                        </div>
                        <div className="flex flex-col gap-1 md:w-1/4">
                            <span className="text-end md:text-start">City</span>
                            <div className="badge badge-outline p-4 font-bold w-full">Jakarta Raya</div>
                        </div>
                        <div className="flex flex-col gap-1 md:w-1/4">
                            <span >Capacity</span>
                            <div className="badge badge-outline p-4 font-bold w-full">4 Bed, 4 Bath</div>
                        </div>
                        <div className="flex flex-col gap-1 md:w-1/4">
                            <span className="text-end md:text-start">Price / Night</span>
                            <div className="badge badge-outline p-4 font-bold w-full">0.001 LISK</div>
                        </div>
                    </div>
                    {
                        withCta && (
                            <button className="btn btn-neutral font-bold btn-sm">Rent Now</button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}