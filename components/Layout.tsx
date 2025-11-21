import React, { useState, useCallback } from 'react';
import GalaxyBackground from './GalaxyBackground';
import Modal from './Modal';

type ModalType = 'About' | 'Contact' | 'Guide' | 'Privacy' | 'Terms' | 'DMCA' | null;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = useCallback((modal: ModalType) => {
    setActiveModal(modal);
  }, []);

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  const modalContent: Record<NonNullable<ModalType>, React.ReactNode> = {
    About: (
      <div className="space-y-6 text-gray-200 leading-relaxed">
        <p><strong>Simple Notary Finder</strong> is an advanced, location-based utility designed to simplify the often complex process of finding reliable notary public services. In a world that is becoming increasingly digital, the need for physical authentication of documents remains a legal necessity for real estate, estate planning, and financial transactions.</p>
        <p>Our platform leverages modern Geolocation API technology to provide users with an instant, simulated map of notary services in their immediate vicinity. By focusing on speed, privacy, and user experience, we bridge the gap between urgency and availability.</p>
        <p>This project is a testament to modern web development, built with React, TypeScript, and Tailwind CSS, ensuring a responsive and accessible experience across all devices.</p>
        <p><strong>Developer:</strong> HSINI MOHAMED</p>
        <p><strong>Mission:</strong> To provide free, fast, and privacy-focused tools for the general public.</p>
      </div>
    ),
    Contact: (
      <div className="space-y-6 text-gray-200 leading-relaxed">
        <p>We are committed to providing an exceptional user experience. If you have questions regarding this application, encounter technical issues, or wish to discuss business opportunities, please do not hesitate to contact us.</p>
        
        <div className="bg-gray-700/50 p-6 rounded-lg border border-gray-600">
          <h4 className="text-xl font-bold text-indigo-400 mb-4">Contact Information</h4>
          <ul className="space-y-3">
            <li className="flex flex-col sm:flex-row sm:items-center">
              <span className="font-bold w-32 text-gray-400">Developer:</span>
              <span>HSINI MOHAMED</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center">
              <span className="font-bold w-32 text-gray-400">Email:</span>
              <a href="mailto:hsini.web@gmail.com" className="text-indigo-400 hover:text-indigo-300 hover:underline transition-colors">hsini.web@gmail.com</a>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center">
              <span className="font-bold w-32 text-gray-400">Website:</span>
              <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 hover:underline transition-colors">doodax.com</a>
            </li>
             <li className="flex flex-col sm:flex-row sm:items-center">
              <span className="font-bold w-32 text-gray-400">Address:</span>
              <span>Digital Nomad HQ, Global Internet</span>
            </li>
          </ul>
        </div>
        
        <p className="text-sm text-gray-400">For legal inquiries or DMCA notices, please refer to the specific DMCA section or email us with the subject line "Legal Inquiry". We aim to respond to all legitimate requests within 2-3 business days.</p>
      </div>
    ),
    Guide: (
      <div className="space-y-6 text-gray-200 leading-relaxed">
        <h3 className="text-xl font-bold text-white border-b border-gray-600 pb-2">User Guide & Instructions</h3>
        <p>Welcome to Simple Notary Finder. Follow these simple steps to find a notary near you:</p>
        
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-bold text-indigo-300">Initiate Search</h4>
              <p>Click the prominent "Find Notaries Near Me" button on the homepage. This triggers the search process.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-bold text-indigo-300">Grant Permissions</h4>
              <p>Your browser will show a popup asking for location access. You must click "Allow" for the app to function. We only use your location once to calculate distances.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-bold text-indigo-300">Review Results</h4>
              <p>Browse the list of nearby notaries. Results are sorted by proximity. Note the address and hours of operation.</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-900/30 p-4 rounded border border-yellow-700/50 mt-4">
          <p className="text-yellow-200 text-sm"><strong>Note:</strong> This application is currently in demonstration mode. The locations displayed are simulated examples to demonstrate the software's capabilities.</p>
        </div>
      </div>
    ),
    Privacy: (
      <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
        <h3 className="text-xl font-bold text-white">Privacy Policy</h3>
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
        
        <p>At <strong>Simple Notary Finder</strong> (accessible from notary.doodax.com), one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Simple Notary Finder and how we use it.</p>

        <h4 className="text-lg font-bold text-indigo-300 mt-4">1. Log Files</h4>
        <p>Simple Notary Finder follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.</p>

        <h4 className="text-lg font-bold text-indigo-300 mt-4">2. Geolocation Data</h4>
        <p>We request access to your device's geolocation solely to provide the core service of finding nearby points of interest. This data is processed client-side within your browser session. <strong>We do not store, save, or transmit your exact coordinates to any external database or third-party server.</strong> Once you close the browser tab, this data is lost.</p>

        <h4 className="text-lg font-bold text-indigo-300 mt-4">3. Cookies and Web Beacons</h4>
        <p>Like any other website, Simple Notary Finder may use 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

        <h4 className="text-lg font-bold text-indigo-300 mt-4">4. Third Party Privacy Policies</h4>
        <p>Simple Notary Finder's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>
        
        <h4 className="text-lg font-bold text-indigo-300 mt-4">5. GDPR Data Protection Rights</h4>
        <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: The right to access, rectification, erasure, restrict processing, object to processing, and data portability.</p>

        <h4 className="text-lg font-bold text-indigo-300 mt-4">6. Children's Information</h4>
        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Simple Notary Finder does not knowingly collect any Personal Identifiable Information from children.</p>
      </div>
    ),
    Terms: (
      <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
        <h3 className="text-xl font-bold text-white">Terms of Service</h3>
        <p><strong>Agreement between User and Simple Notary Finder</strong></p>
        <p>Welcome to Simple Notary Finder. The notary.doodax.com website (the "Site") is comprised of various web pages operated by HSINI MOHAMED. Simple Notary Finder is offered to you conditioned on your acceptance without modification of the terms, conditions, and notices contained herein (the "Terms"). Your use of Simple Notary Finder constitutes your agreement to all such Terms.</p>

        <h4 className="text-lg font-bold text-indigo-300 mt-4">1. Use of Communication Services</h4>
        <p>The Site may contain bulletin board services, chat areas, news groups, forums, communities, personal web pages, calendars, and/or other message or communication facilities designed to enable you to communicate with the public at large or with a group. You agree to use the Communication Services only to post, send and receive messages and material that are proper and related to the particular Communication Service.</p>

        <h4 className="text-lg font-bold text-indigo-300 mt-4">2. Disclaimer of Liability</h4>
        <p>THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. SIMPLE NOTARY FINDER MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME.</p>

        <h4 className="text-lg font-bold text-indigo-300 mt-4">3. Termination/Access Restriction</h4>
        <p>Simple Notary Finder reserves the right, in its sole discretion, to terminate your access to the Site and the related services or any portion thereof at any time, without notice.</p>
        
        <h4 className="text-lg font-bold text-indigo-300 mt-4">4. Governing Law</h4>
        <p>To the maximum extent permitted by law, this agreement is governed by the laws of the State of [Your State] and you hereby consent to the exclusive jurisdiction and venue of courts in all disputes arising out of or relating to the use of the Site.</p>

        <h4 className="text-lg font-bold text-indigo-300 mt-4">5. Changes to Terms</h4>
        <p>Simple Notary Finder reserves the right, in its sole discretion, to change the Terms under which Simple Notary Finder is offered. The most current version of the Terms will supersede all previous versions. Simple Notary Finder encourages you to periodically review the Terms to stay informed of our updates.</p>
      </div>
    ),
    DMCA: (
      <div className="space-y-6 text-gray-300 leading-relaxed">
        <h3 className="text-xl font-bold text-white">DMCA Copyright Policy</h3>
        <p>Simple Notary Finder ("Company") adopts the following policy toward copyright infringement in accordance with the Digital Millennium Copyright Act (http://www.copyright.gov/legislation/dmca.pdf). The address of the Designated Agent to Receive Notification of Claimed Infringement ("Designated Agent") is listed at the end of this policy.</p>

        <h4 className="text-lg font-bold text-indigo-300 mt-4">Reporting Copyright Infringement</h4>
        <p>If you allege that your intellectual property is being violated, you must submit to the Company:
        1. A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright that has been allegedly infringed;
        2. Identification of the works or materials being infringed;
        3. Identification of the material that is claimed to be infringing including information regarding the specific location of the infringing materials on the Company’s website that the copyright owner seeks to have removed, with sufficient detail so that Company is capable of finding and verifying its existence;
        4. Contact information about the notifier including address, telephone number and, if available, e-mail address;
        5. A statement that the notifier has a good faith belief that the material is not authorized by the copyright owner, its agent, or the law; and
        6. A statement made under penalty of perjury that the information provided is accurate and the notifying party is authorized to make the complaint on behalf of the copyright owner.</p>

        <h4 className="text-lg font-bold text-indigo-300 mt-4">Contact Designated Agent</h4>
        <p>Please contact the Designated Agent at the following email address:</p>
        <p className="text-xl text-white font-bold">hsini.web@gmail.com</p>
      </div>
    ),
  };

  const navLinks: NonNullable<ModalType>[] = ['About', 'Contact', 'Guide', 'Privacy', 'Terms', 'DMCA'];

  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden flex flex-col selection:bg-indigo-500 selection:text-white">
      <GalaxyBackground />
      
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Header */}
        <header className="py-6 px-4 sm:px-8 bg-black/20 backdrop-blur-lg border-b border-white/5 sticky top-0 z-50 transition-all duration-300">
          <nav className="container mx-auto flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.location.reload()}>
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Notary<span className="text-indigo-400">Finder</span>
              </h1>
            </div>
            
            <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
              {navLinks.map(link => (
                <li key={link}>
                  <button onClick={() => openModal(link)} className="text-gray-300 hover:text-white hover:shadow-[0_0_20px_rgba(129,140,248,0.5)] transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/5">
                    {link === 'Privacy' ? 'Privacy' : link}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="md:hidden ml-auto">
              <select 
                onChange={(e) => {
                    if (e.target.value) openModal(e.target.value as ModalType);
                    e.target.value = ""; 
                }} 
                className="bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                 <option value="">Menu</option>
                 {navLinks.map(link => (
                     <option key={link} value={link}>{link}</option>
                 ))}
              </select>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-grow container mx-auto p-4 sm:p-8 flex flex-col items-center w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-8 text-center text-gray-400 bg-black/40 backdrop-blur-md border-t border-white/5 mt-20">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
                {navLinks.map(link => (
                    <button key={link} onClick={() => openModal(link)} className="text-sm hover:text-indigo-400 transition-colors">
                        {link}
                    </button>
                ))}
            </div>
            
            <div className="border-t border-white/10 pt-8 flex flex-col items-center space-y-4">
                <p className="text-sm font-medium text-gray-300">
                  Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 font-bold ml-1 hover:underline">HSINI MOHAMED</a>
                </p>
                <p className="text-xs text-gray-500">
                   &copy; {new Date().getFullYear()} Simple Notary Finder. All rights reserved. | <a href="https://doodax.com" className="hover:text-gray-300">doodax.com</a>
                </p>
            </div>
          </div>
        </footer>
      </div>

      <Modal 
        isOpen={activeModal !== null} 
        onClose={closeModal} 
        title={activeModal === 'Privacy' ? 'Privacy Policy' : activeModal === 'Terms' ? 'Terms of Service' : activeModal || ''}
      >
        {activeModal && modalContent[activeModal]}
      </Modal>
    </div>
  );
};

export default Layout;