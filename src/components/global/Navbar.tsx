import { useRouter } from "next/router"

export const Navbar: React.FC = () => {
    const router = useRouter()
    return (
        <div className="navbar bg-base-100 shadow-none">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#000000">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black">
                        <li><a onClick={() => router.push('/#about')}>About Us</a></li>
                        <li><a onClick={() => router.push('/#gallery')}>Gallery</a></li>
                        <li><a onClick={() => router.push('/reservation')}>Reservation</a></li>
                        <li><a onClick={() => router.push('/#contact-us')}>Contact Us</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl" onClick={() => router.push('/')}><span className="text-neutral font-bold">Villa</span><span className="text-black">PBA3</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-black">
                    <li><a onClick={() => router.push('/#about')}>About Us</a></li>
                    <li><a onClick={() => router.push('/#gallery')}>Gallery</a></li>
                    <li><a onClick={() => router.push('/reservation')}>Reservation</a></li>
                    <li><a onClick={() => router.push('/#contact-us')}>Contact Us</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-neutral">Connect Wallet</a>
            </div>
        </div>
    )
}

