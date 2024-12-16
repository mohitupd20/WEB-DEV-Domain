import React from "react";
import Image from "next/image";
const CoreExpertise = "/core-expertise.png"; // Direct path

// DomainCard Component Props
interface DomainCardProps {
  title: string;
  description: string;
}
// Reusable DomainCard Component
const DomainCard: React.FC<DomainCardProps> = ({ title, description }) => {
  return (
    <div className="bg-lime-300 text-black rounded-lg p-6 w-64 shadow-lg">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
};
// OurDomains Component
const OurDomains: React.FC = () => {
  const domainData = [
    { title: "AI/ML", description: "Exploring tools and strategies to protect digital assets and ensure secure systems" },
    { title: "WebDevelopment", description: "Exploring tools and strategies to protect digital assets and ensure secure systems" },
    { title: "CyberSecurity", description: "Exploring tools and strategies to protect digital assets and ensure secure systems" },
    { title: "BlockChain", description: "Exploring tools and strategies to protect digital assets and ensure secure systems" },
    { title: "Creatives", description: "Exploring tools and strategies to protect digital assets and ensure secure systems" },
    { title: "AppDevelopment", description: "Exploring tools and strategies to protect digital assets and ensure secure systems" },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center py-16">
      {/* Header */}
      <div className="relative z-20 text-center">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-albert mb-4">Our Domains</h2>
        <p className="text-lg md:text-xl xl:text-2xl font-albert mt-4 max-w-3xl mx-auto p-8 md:p-12">
          Explore diverse technical domains at CodeNex, including web and app development, cybersecurity, AI/ML, and more,
          empowering members to innovate and excel in the ever-evolving tech landscape.
        </p>
      </div>

      {/* SVG Image - Centered in the Background */}
      
      <div className="absolute top-0 left-0 w-full h-full mt-56 flex items-center justify-center z-0 xl:pd-12 md:block hidden">
        <Image
          src={CoreExpertise}
          alt="Centered Image"
          layout="fill"
          objectFit="contain"
          className="pointer-events-none"
        />
      </div>
      
      {/* Domain Cards */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-64 xl:gap-x-96 gap-y-6 md:gap-y-12 mt-8 md:mt-16 xl:mt-36 mr-2 md:mr-0 z-10">
        {domainData.map((domain, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-limeCustom text-black text-center xl:ml-12 w-72 h-32 md:w-96 md:h-40 rounded-lg p-4"
          >
            <h4 className="text-xl font-bold mb-2">{domain.title}</h4>
            <p className="text-sm leading-relaxed">{domain.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurDomains;
