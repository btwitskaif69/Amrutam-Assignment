import React from 'react';

// --- SVG Icon Components ---
// I've included the social media icons as simple, reusable SVG components.

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 4.24 4.24 2.5 7 2.5h10c2.76 0 4.5 1.74 4.5 4.5v10c0 2.76-1.74 4.5-4.5 4.5H7c-2.76 0-4.5-1.74-4.5-4.5z"></path>
    <path d="m10 15 5-3-5-3z"></path>
  </svg>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3 7.1 0 .2 0 .4-.1.6 0 3.2-2.7 5.8-5.9 5.8-1.6 0-3.1-.5-4.4-1.3 1.5-.1 2.9-.5 4.2-1.2-1.4-.1-2.6-.9-3-2.2.4.1.8.1 1.2 0-1.5-.3-2.6-1.6-2.6-3.2v-.1c.4.2.9.4 1.4.4-1.4-.9-2.2-2.5-2.2-4.2 0-1.3.4-2.5 1-3.5C6.1 9 9.6 11.2 13.3 11.4c-.1-.3-.1-.6-.1-1 0-2.4 1.9-4.3 4.3-4.3 1.2 0 2.3.5 3.1 1.4.9-.2 1.8-.5 2.5-.9-.3 1-.9 1.8-1.7 2.3.8-.1 1.6-.3 2.3-.6z"></path>
    </svg>
);

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const PinterestIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12.5 2.5c-4.4 0-8 3.6-8 8 0 3.3 2 6.2 4.8 7.4-.1-1.1.1-2.4.4-3.5.2-.9 1.5-6.4 1.5-6.4s-.4-.7-.4-1.8c0-1.7 1-2.9 2.2-2.9 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.2 1.2.6 2.2 1.8 2.2 2.1 0 3.8-2.2 3.8-5.4 0-2.8-2-4.9-5.2-4.9z"></path><path d="M12.5 21.5c-1.7 0-3.3-.8-4.3-2"></path>
    </svg>
);


// --- Footer Component ---
const Footer = () => {
  const informationLinks = [
    "About Us",
    "Terms and Conditions",
    "Privacy Policy",
    "Privacy Policy for Mobile Apps",
    "Shipping, return and cancellation Policy",
    "International Delivery",
    "For Businesses, Hotels, and Resorts",
  ];

  const socialIcons = [
    { icon: <FacebookIcon />, href: "#" },
    { icon: <InstagramIcon />, href: "#" },
    { icon: <YoutubeIcon />, href: "#" },
    { icon: <TwitterIcon />, href: "#" },
    { icon: <LinkedinIcon />, href: "#" },
    { icon: <PinterestIcon />, href: "#" },
  ];

  return (
    <footer className="bg-[#f7f8f2] text-[#3a643b] font-sans">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-x-8">
          
          {/* Column 1: Get in touch */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg text-black">Get in touch</h3>
            <a href="mailto:support@amrutam.global" className="hover:underline">support@amrutam.global</a>
            <p>
              Amrutam Pharmaceuticals Pvt Ltd.,<br />
              chitragupt ganj, Nai Sadak, Lashkar,<br />
              Gwalior - 474001
            </p>
            <a href="tel:+919713171999" className="hover:underline">+91 9713171999</a>
            <div className="flex space-x-3 pt-2">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.href} className="bg-[#3A643B] text-white p-2 rounded-full hover:bg-opacity-80 transition-colors duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-lg text-black">Information</h3>
            <ul className="space-y-3">
              {informationLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Subscribe */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-lg text-black">Subscribe to our Newsletter and join Amrutam Family today!</h3>
            <form className="flex mt-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full md:w-auto flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#3A643B]"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;