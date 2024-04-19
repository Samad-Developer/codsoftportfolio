import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer id='footer' className="bg-black text-white py-8 border-t border-[#333333]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <span className="ml-2 text-xl font-bold">Abdus Samad</span>
        </div>
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <Link href="https://www.linkedin.com/in/abdussamad27/">
            <span className="cursor-pointer" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin-icon.png" alt="LinkedIn" width={30} height={30} />
            </span>
          </Link>
          <Link href="https://twitter.com/@abdussamad_27">
            <span className="cursor-pointer" target="_blank" rel="noopener noreferrer">
              <Image src="/twitter-icon.png" alt="Twitter" width={30} height={30} />
            </span>
          </Link>
          <Link href="https://www.instagram.com/caringsamad/">
            <span className="cursor-pointer" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram-icon.png" alt="Instagram" width={30} height={30} />
            </span>
          </Link>
          <Link href="https://www.tiktok.com/@samad_yousafzai">
            <span className="cursor-pointer" target="_blank" rel="noopener noreferrer">
              <Image src="/tiktok-icon.png" alt="TikTok" width={30} height={30} />
            </span>
          </Link>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center text-sm mt-4">
        <p>&copy; {new Date().getFullYear()} Abdus Samad. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
