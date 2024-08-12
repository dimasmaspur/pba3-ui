export const Gallery: React.FC = () => {

    return (
        <div className="pt-24 px-6 md:px-4 text-black" >
            <h1 className="text-3xl font-bold" id="gallery">Explore More of Our Gallery</h1>
            <div className="flex flex-col md:flex-row gap-4 pt-8">
                <img src={'/img/bed.jpg'} alt="villa 1" className="rounded-xl w-96 h-80 object-cover" />
                <img src={'/img/pool.jpg'} alt="villa 1" className="rounded-xl w-full h-80 object-cover" />
            </div>
            <div className="flex flex-col md:flex-row gap-4 pt-6">
                <img src={'/img/balcony.jpg'} alt="villa 1" className="rounded-xl md:w-1/4 h-80 object-cover" />
                <img src={'/img/vila-7.jpg'} alt="villa 1" className="rounded-xl md:w-1/4 h-80 object-cover" />
                <img src={'/img/cliff.jpg'} alt="villa 1" className="rounded-xl w-full h-80 object-cover" />
            </div>
            <div className="flex flex-col md:flex-row gap-4  pt-6">
                <img src={'/img/vila-8.jpg'} alt="villa 1" className="rounded-xl w-3/4 h-80 object-cover" />
                <img src={'/img/vila-1.jpg'} alt="villa 1" className="rounded-xl w-70 h-80 object-cover" /> 
                <img src={'/img/vila-9.jpg'} alt="villa 1" className="rounded-xl w-80 h-80 object-cover" />
               
                
                
                
            </div>
        </div>
    )
}