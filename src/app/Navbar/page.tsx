import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className='container mx-auto bg-[#e25e25] p-2 mb-2 sticky'>
      <nav className="flex justify-between items-center m-2">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/vercel.svg" 
            alt="Vercel Logo" 
            width={100}
            height={4}
            priority 
          />
          <span>Haiku Portal</span>
        </Link>

        {/* Right side */}
        <div className="flex space-x-4">
          <Link href="/about" className="text-white hover:text-gray-200 transition duration-300">
            About
          </Link>
          <Link href="/services" className="text-white hover:text-gray-200 transition duration-300">
            Services
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200 transition duration-300">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}