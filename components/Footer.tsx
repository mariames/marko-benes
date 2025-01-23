import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-200 text-white py-4">
      <div className="flex justify-between items-center container mx-auto px-4">
        {/* Left Side: Copyright Text */}
        <p className="text-sm text-slate-900">
          &copy; 2025 Marijana Vujovic | marijanavujovic92@gmail.com
        </p>

        {/* Right Side: Contact Icons */}
        <div className="flex space-x-4">
          {/* LinkedIn Icon */}
          <a href="mailto:marijanavujovic92@gmail.com" className="flex items-center justify-center rounded-full border border-slate-900 w-10 h-10">
            <Image 
                src="/contact/Linkedin-Black.svg" 
                width={20} 
                height={20} 
                alt="LinkedIn"
                className="object-cover" />
          </a>

          {/* Behance Icon */}
          <a href="tel:+123456789" className="flex items-center justify-center rounded-full border border-slate-900 w-10 h-10">
            <Image 
                src="/contact/Behance-Black.svg" 
                width={20} 
                height={20} 
                alt="Behance"
                className="object-cover" />
          </a>

          {/* Dribbble Icon */}
          <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center rounded-full border border-slate-900 w-10 h-10">
            <Image 
                src="/contact/Dribbble-Black.svg" 
                width={20} 
                height={20} 
                alt="Dribbble"
                className="object-cover" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
