import React from 'react';
import ProjectCard from '../sub/ProjectCard';

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-10 px-10">
        <ProjectCard
          src="/web3.png"
          title="Web3 Decentralized Crypto Exchange-(React js, JavaScript, Node js, Solidity , Hardhat, Ether js)"
          description="DAap crypto exchange to trade tokens and interact with the Blockchain. Coded from scratch using different technologies allowing users mutilple trading interactions and functionalities."
          linkUrl="https://cryptoexchange.on.fleek.co/"
        />
        <ProjectCard
          src="/ticket.png"
          title="Ticketmaster Events DAap - (React js, JavaScript, Node js, Solidity, Ether js, Hardhat)"
          description="This application allows users to explore upcoming events, view available dates, and select and do transactions to receive a digital ticket in the form of a unique NFT directly into their wallet."
          linkUrl="https://tikeckmasterweb3.on.fleek.co/"
        />
        <ProjectCard
          src="/ecommerce.png"
          title="Ecommerce DAap - (React js, JavaScript, Solidity, HardHat, Ether js) "
          description="Ecommerce DAap to purchase through Blockchain technology. Each product purchase triggers a smart contract that manages the order, ensuring the merchant fulfills and delivers it on-chain."
          linkUrl="https://ecommercedaap.on.fleek.co/"
        />
        <ProjectCard
          src="/chia.png"
          title="Decentralized App for blockchain transactions- (Angular, Node js, Express, Mongo DB)"
          description="Chia Network operates as a company focused on blockchain technology and smart transaction platforms. It includes a decentralized and secure blockchain and transaction platform."
          linkUrl="https://www.chia.net/"
        />
        <ProjectCard
          src="/booking.png"
          title="Booking Clone Web Scraper- (Next js, React js, TypeScript, Tailwind, Shadcn)"
          description="Web scraping app, use in the ethical way to extract information from any site, using Oxylabs. The front of the app displays a clone of the booking.com site."
          linkUrl="https://booking-clone-nextjs.netlify.app/"
        />

        <ProjectCard
          src="/seoboost.png"
          title="SaaS Technical SEO - (Next js, Shadcn, React js, TypeScript, Node js, Google Cloud)"
          description="SaaS application to facilitate and automate SEO technical tasks to improve analytics reports and performance insights. "
          linkUrl=""
        />

        <ProjectCard
          src="/supportdesk.png"
          title="Support Tikect App MERN Stack - (React js, Node js, Mongo DB)"
          description="Support Ticket App with MERN technology with full authentication and CRUD features using Redux to manage the state. "
          linkUrl="https://ticket-app-front.onrender.com"
        />

        <ProjectCard
          src="/netsport.png"
          title="Full-Stack Events Sport App - (Next js, React,Node js, TypeScript, SQL, AWS)"
          description="SaaS app to register for socialising sport events, where users can authenticate, make online reservations and payments. I used technologies to build components, relational database such as SQL, and AWS. "
          linkUrl="https://netsport.app/"
        />
        <ProjectCard
          src="/contentcreation.png"
          title="Full-Stack Content AI -(React js, Node js, Express js, Mongo DB)"
          description="Paragraph is a SaaS App which is  platform that allows artist, writers, podcasters and beyond to build a sustain building and connecting with their community."
          linkUrl="https://paragraph.xyz/"
        />

        <ProjectCard
          src="/hotelapp.png"
          title="Hotel booking portal application- (Angular)"
          description="Hotel booking app which allows to select and book dates utilising Angular routing and all CRUD operations."
          linkUrl="https://hotel-app-angular.netlify.app/"
        />
        <ProjectCard
          src="/insurance.png"
          title="Insurance Comparision SaaS - (Vue js, SQL)"
          description="Beshak is a mission to bring resources, tools and experts that ensures you are never puzzled, and buy insurance with confidence."
          linkUrl="https://www.beshak.org/"
        />
      </div>
    </div>
  );
}

export default Projects;
