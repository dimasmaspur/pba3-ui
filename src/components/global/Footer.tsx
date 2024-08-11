import { useRouter } from "next/router"

export const Footer: React.FC = () => {
    const router = useRouter()

    return (
        <div className="md:pt-24 px-6 md:px-4">
            <footer className="footer footer-center bg-gray-100 text-base-content rounded p-10">
                <nav className="md:grid md:grid-flow-col gap-4">
                    <a className="link link-hover" onClick={() => router.push('/#about')}>About us</a>
                    <a className="link link-hover" onClick={() => router.push('/#rewards')}>Rewards</a>
                    <a className="link link-hover" onClick={() => router.push('/#gallery')}>Gallery</a>
                    <a className="link link-hover" onClick={() => router.push('/reservation')}>Reservation</a>
                    <a className="link link-hover" onClick={() => router.push('/#contact-us')}>Contact Us</a>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Pelita Bangsa Academy Kelompok 3</p>
                </aside>
            </footer>
        </div>
    )
}