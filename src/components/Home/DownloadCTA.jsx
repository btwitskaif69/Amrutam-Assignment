import React from 'react';
import { FiFileText, FiTrendingUp, FiMessageSquare, FiBell } from 'react-icons/fi';

// --- Asset Imports ---
// In a real project, these would be imported from your assets folder.
// For this example, I'm using placeholder URLs.
const phoneMockupUrl = 'https://placehold.co/350x700/FFFFFF/333333?text=App+Screenshot';
const googlePlayBadgeUrl = 'https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg';
const appStoreBadgeUrl = 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Download_on_the_App_Store_Badge_US-UK_RGB_blk.svg';
const avatar1Url = 'https://placehold.co/40x40/FFC107/FFFFFF?text=A';
const avatar2Url = 'https://placehold.co/40x40/4CAF50/FFFFFF?text=B';
const avatar3Url = 'https://placehold.co/40x40/2196F3/FFFFFF?text=C';


// --- Feature Item Helper Component ---
const FeatureItem = ({ icon, text }) => (
  <div className="flex items-center gap-4 rounded-lg bg-[#FDFBF7] p-4 shadow-sm">
    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#EAF2EA]">
      {icon}
    </div>
    <span className="font-medium text-[#475D5B]">{text}</span>
  </div>
);

// --- Main Component ---
const DownloadCTA = () => {
  const features = [
    { icon: <FiFileText size={24} className="text-[#3A643B]" />, text: 'Access To Prescriptions' },
    { icon: <FiTrendingUp size={24} className="text-[#3A643B]" />, text: 'Track Health Efficiently' },
    { icon: <FiMessageSquare size={24} className="text-[#3A643B]" />, text: 'Direct Chat With Doctors' },
    { icon: <FiBell size={24} className="text-[#3A643B]" />, text: 'In-App Reminders For Consultations' },
  ];

  return (
    <section className="bg-[#F9F5EC] py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2 lg:gap-20">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start">
          <h2 className="text-4xl font-bold text-[#3A643B] lg:text-5xl">
            Download Amrutam Ayurveda App Now
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The Amrutam Ayurveda App is your one-stop app for all things Ayurveda! Apart from mimicking the website, the app has added benefits
          </p>
          
          <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <FeatureItem key={index} icon={feature.icon} text={feature.text} />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#" aria-label="Get it on Google Play">
              <img src={googlePlayBadgeUrl} alt="Google Play badge" className="h-14" />
            </a>
            <a href="#" aria-label="Download on the App Store">
              <img src={appStoreBadgeUrl} alt="App Store badge" className="h-14" />
            </a>
          </div>
        </div>

        {/* Right Column: Image and Floating Elements */}
        <div className="relative flex h-[600px] items-center justify-center">
          
          {/* Phone Mockup */}
          <div className="relative z-10 h-[550px] w-[270px] rounded-[40px] border-8 border-gray-800 bg-white shadow-2xl">
             <div className="absolute inset-0 rounded-[32px] bg-cover bg-center" style={{backgroundImage: `url('https://placehold.co/254x534/90EE90/333333?text=App+UI')`}}></div>
          </div>
          
          {/* Floating Card 1: Engagement Time */}
          <div className="absolute left-0 top-1/4 z-20 w-48 rounded-xl bg-[#3A643B] p-4 text-white shadow-lg">
            <p className="text-sm">Engagement Time</p>
            <p className="text-3xl font-bold">6m 33s</p>
            <svg viewBox="0 0 100 30" className="mt-2">
              <path d="M 0 20 Q 25 5, 50 15 T 100 10" stroke="#90EE90" fill="none" strokeWidth="2"/>
            </svg>
          </div>

          {/* Floating Card 2: Downloads */}
          <div className="absolute bottom-1/4 right-0 z-20 w-48 rounded-xl bg-[#FDFBF7] p-4 text-center shadow-lg">
            <div className="flex justify-center">
              <img src={avatar1Url} alt="User avatar 1" className="h-10 w-10 rounded-full border-2 border-white" />
              <img src={avatar2Url} alt="User avatar 2" className="relative -ml-3 h-10 w-10 rounded-full border-2 border-white" />
              <img src={avatar3Url} alt="User avatar 3" className="relative -ml-3 h-10 w-10 rounded-full border-2 border-white" />
            </div>
            <p className="mt-2 text-2xl font-bold text-[#3A643B]">10K+</p>
            <p className="text-sm text-gray-600">Downloads</p>
          </div>

          {/* SVG Arrows */}
          <div className="absolute inset-0 z-0">
            <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Arrow to top-right of phone */}
              <path d="M 120 180 Q 150 120, 220 130" stroke="#3A643B" strokeWidth="1.5" strokeDasharray="4 4" />
              {/* Arrow to bottom-left of phone */}
              <path d="M 330 420 Q 280 480, 220 450" stroke="#3A643B" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadCTA;
