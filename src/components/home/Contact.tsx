export const Contact: React.FC = () => {
    return (
        <div className="py-24 md:py-36 px-6 md:px-4">
        <div
            className="hero "
            style={{
                backgroundImage: "url(/img/vila-3.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-xl p-10">
                    <h1 className="mb-5 text-xl md:text-5xl font-bold text-white">Seize your Stay With Villa PBA3</h1>
                    <p className="mb-5 text-white">
                    Don’t hesitate to make our villa your next destination. Experience unparalleled comfort and luxury in a setting designed for relaxation and enjoyment. Book your stay with us and discover why our guests leave with unforgettable memories.
                    </p>
                    <a href="mailto:dimasmaspur@gmail.com" className="btn btn-secondary">Contact Us</a>
                </div>
            </div>
        </div>
        </div>
    )
}