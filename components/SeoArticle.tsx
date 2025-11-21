import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full max-w-5xl mx-auto mt-20 px-4 mb-12">
            {/* The max-h-[52px] combined with overflow-hidden ensures only about 2 lines are visible initially.
                Line height is typically 1.5rem (24px), so 52px allows just over 2 lines. */}
            <div className={`relative bg-gray-900/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[20000px]' : 'max-h-[52px]'}`}>
                
                {/* Content Container */}
                <div className="p-8 pb-20">
                    <article className="prose prose-invert prose-lg prose-indigo max-w-none">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-200 to-white mb-10 leading-tight">
                            The Complete Guide to Notary Public Services: Verification, Law, and Digital Discovery
                        </h1>
                        
                        <p className="lead text-xl text-gray-300 mb-8 text-justify">
                            In today's complex legal landscape, the <strong className="text-white">Notary Public</strong> serves as the bedrock of trust for critical transactions. Whether you are closing on a home, finalizing a will, or executing a business contract, the seal of a notary is the global standard for authentication. This definitive guide explores every aspect of the notary process, the evolution of mobile services, and how geolocation technology is revolutionizing how we find these essential officials.
                        </p>

                        <div className="bg-gray-800/40 p-8 rounded-xl border border-gray-700 my-10 shadow-lg">
                            <h2 className="text-2xl font-bold text-white mt-0 mb-6">Table of Contents</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-gray-300 list-none pl-0">
                                <li className="flex items-center"><span className="text-indigo-500 mr-2">01.</span> Introduction to Notarial Acts</li>
                                <li className="flex items-center"><span className="text-indigo-500 mr-2">02.</span> Why Do We Need Notaries?</li>
                                <li className="flex items-center"><span className="text-indigo-500 mr-2">03.</span> Types of Notarizations</li>
                                <li className="flex items-center"><span className="text-indigo-500 mr-2">04.</span> Documents That Require Notarization</li>
                                <li className="flex items-center"><span className="text-indigo-500 mr-2">05.</span> The Mobile Notary Revolution</li>
                                <li className="flex items-center"><span className="text-indigo-500 mr-2">06.</span> How Geolocation Technology Helps</li>
                                <li className="flex items-center"><span className="text-indigo-500 mr-2">07.</span> Preparing for Your Appointment</li>
                                <li className="flex items-center"><span className="text-indigo-500 mr-2">08.</span> Comprehensive FAQ</li>
                            </ul>
                        </div>

                        <h2>01. Introduction to Notarial Acts: Guardians of Integrity</h2>
                        <p>A Notary Public is an official of integrity appointed by state government—typically by the Secretary of State—to serve the public as an impartial witness in performing a variety of official fraud-deterrent acts related to the signing of important documents. These official acts are called notarizations, or notarial acts.</p>
                        <p>The central value of notarization lies in the Notary's ability to screen signers for true identity, their willingness to sign without duress or intimidation, and their awareness of the contents of the document or transaction.</p>

                        <h2>02. Why Do We Need Notaries? Preventing Fraud</h2>
                        <p>The primary purpose of a notary is to prevent fraud and forgery. By requiring a signer to appear in person (physically or via approved remote technology) and verify their identity, the notary creates a "chain of trust."</p>
                        <ul>
                            <li><strong>Deterrence:</strong> The requirement to show ID and sign a journal deters impostors.</li>
                            <li><strong>Certainty:</strong> Courts and third parties can rely on the document's authenticity.</li>
                            <li><strong>Formalization:</strong> The act of notarization signals the solemnity and importance of the document.</li>
                        </ul>

                        <h2>03. Types of Notarizations</h2>
                        <p>Not all stamps are the same. Depending on the document, a notary performs different acts:</p>
                        <h3 className="text-indigo-300">Acknowledgments</h3>
                        <p>The signer acknowledges that they signed the document willingly. This is common for deeds, powers of attorney, and agreements. The signer does not need to sign in front of the notary, but must appear to acknowledge the signature.</p>
                        <h3 className="text-indigo-300">Jurats (Oaths & Affirmations)</h3>
                        <p>The signer must swear or affirm that the contents of the document are true. For a jurat, the signer <strong>must</strong> sign the document in the presence of the notary and take an oath.</p>
                        <h3 className="text-indigo-300">Copy Certification</h3>
                        <p>The notary certifies that a copy of a document is a true and accurate reproduction of the original. (Note: This is not allowed in all states, such as New York).</p>

                        <h2>04. Documents That Typically Require Notarization</h2>
                        <p>While requirements vary by jurisdiction, the following almost always require a seal:</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                            <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                                <h4 className="text-white font-bold mt-0">Real Estate</h4>
                                <ul className="text-sm mt-2">
                                    <li>Deeds of Trust</li>
                                    <li>Grant Deeds</li>
                                    <li>Quitclaim Deeds</li>
                                    <li>Mortgage Closings</li>
                                </ul>
                            </div>
                            <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                                <h4 className="text-white font-bold mt-0">Legal / Family</h4>
                                <ul className="text-sm mt-2">
                                    <li>Wills & Trusts</li>
                                    <li>Power of Attorney</li>
                                    <li>Custody Agreements</li>
                                    <li>Affidavits</li>
                                </ul>
                            </div>
                            <div className="bg-gray-800/30 p-6 rounded-lg border border-gray-700">
                                <h4 className="text-white font-bold mt-0">Business</h4>
                                <ul className="text-sm mt-2">
                                    <li>Articles of Incorporation</li>
                                    <li>Commercial Leases</li>
                                    <li>Employment Contracts</li>
                                    <li>Vendor Agreements</li>
                                </ul>
                            </div>
                        </div>

                        <h2>05. The Mobile Notary Revolution</h2>
                        <p>Traditionally, finding a notary meant walking into a bank or a shipping store (like UPS or FedEx) during business hours. However, the rise of the "Gig Economy" has popularized the <strong>Mobile Notary</strong>.</p>
                        <p>Mobile notaries travel to the client—be it a home, hospital, coffee shop, or office. This is particularly vital for:</p>
                        <ul>
                            <li><strong>Hospitalized Patients:</strong> Who cannot travel to finalize healthcare directives.</li>
                            <li><strong>Real Estate Closings:</strong> Signing stacks of loan documents at the borrower's dining table.</li>
                            <li><strong>Busy Professionals:</strong> Who value time over the travel fee cost.</li>
                        </ul>

                        <h2>06. How Geolocation Technology Helps</h2>
                        <p>This application, <em>Simple Notary Finder</em>, represents the modern solution to an age-old problem. By utilizing the HTML5 Geolocation API, we can:</p>
                        <ol>
                            <li><strong>Triangulate Position:</strong> Determine your latitude and longitude with high accuracy.</li>
                            <li><strong>Query Databases:</strong> Compare your location against a database of known public notaries.</li>
                            <li><strong>Calculate Proximity:</strong> Use geospatial algorithms (like the Haversine formula) to sort results by distance.</li>
                        </ol>
                        <p>This eliminates the need for typing zip codes or browsing directories. It is efficient, privacy-centric, and user-friendly.</p>

                        <h2>07. Preparing for Your Appointment</h2>
                        <p>To ensure a smooth process, bring the following:</p>
                        <ul>
                            <li><strong>The Document:</strong> Completely filled out, but <em>unsigned</em> (if a Jurat is required).</li>
                            <li><strong>Valid ID:</strong> A government-issued photo ID (Driver's License, Passport, Military ID) that is current or issued within the last 5 years.</li>
                            <li><strong>All Signers:</strong> Everyone who needs to sign must be present physically.</li>
                            <li><strong>Fees:</strong> Be prepared to pay. States set maximum fees per signature (e.g., $15 in California, $10 in Florida), but mobile travel fees can be extra.</li>
                        </ul>

                        <h2>08. Comprehensive FAQ</h2>
                        <dl className="space-y-6">
                            <div>
                                <dt className="font-bold text-white text-lg">Q: Can a notary give legal advice?</dt>
                                <dd className="mt-2 text-gray-300">A: <strong>Absolutely not.</strong> Unless the notary is also a licensed attorney, they cannot explain the document to you, tell you which form to use, or advise you on the legal implications of signing. This is the "Unauthorized Practice of Law" and is illegal.</dd>
                            </div>
                            <div>
                                <dt className="font-bold text-white text-lg">Q: What if the signer doesn't speak English?</dt>
                                <dd className="mt-2 text-gray-300">A: The notary and the signer must be able to communicate directly without a translator. If the notary cannot understand the signer, they cannot verify that the signer understands the document.</dd>
                            </div>
                            <div>
                                <dt className="font-bold text-white text-lg">Q: Is an expired ID acceptable?</dt>
                                <dd className="mt-2 text-gray-300">A: It depends on the state. For example, California allows IDs issued within the last 5 years, even if expired. Other states require the ID to be current. Always check local laws.</dd>
                            </div>
                            <div>
                                <dt className="font-bold text-white text-lg">Q: What is Remote Online Notarization (RON)?</dt>
                                <dd className="mt-2 text-gray-300">A: RON allows the notary and signer to be in different places, connected via secure audio-video technology. The notary uses digital tools to verify ID and apply an electronic seal. This is legal in many, but not all, states.</dd>
                            </div>
                        </dl>

                        <div className="mt-12 p-6 bg-indigo-900/20 border border-indigo-500/30 rounded-lg text-center">
                            <p className="text-indigo-200 font-semibold">Need a notary now? Scroll up and use our Finder Tool!</p>
                        </div>
                    </article>
                </div>

                {/* Gradient Fade Overlay (only visible when closed) */}
                {!isOpen && (
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-gray-900/80 to-gray-900 flex items-end justify-center pb-2 pointer-events-none">
                    </div>
                )}
            </div>

            {/* Toggle Button */}
            <div className="text-center mt-4 relative z-10">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3 px-10 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300 transform hover:scale-105 flex items-center mx-auto uppercase tracking-wider text-sm"
                >
                    <span>{isOpen ? 'Collapse Article' : 'Read Full Guide'}</span>
                    <svg 
                        className={`w-5 h-5 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SeoArticle;