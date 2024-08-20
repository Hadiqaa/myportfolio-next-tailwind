import Link from 'next/link';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 w-full fixed top-0 left-0 z-50 py-4 sm:py-2">
      <div className="nav-container mx-auto sm:px-3 ">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
          <Link href="/" className="text-custom-beige text-4xl font-AbrilFatface ">
             Hadiqa Sumbal Arshad
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
            <Link href="/about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-2xl  font-NATS text-custom-beige">
                About Me
              </Link>
              <Link href="/resume" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-2xl font-NATS text-custom-beige">
                Resume
              </Link>
              <Link href="/work" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-2xl font-NATS text-custom-beige">
                Work
              </Link>
              <Link href="/contact" className="bg-custom-yellow text-black hover:bg-yellow-600 px-4 py-2 rounded-2xl text-2xl font-NATS ">
                Get in touch!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
