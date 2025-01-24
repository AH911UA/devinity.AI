import React from "react";
import { HeadCustom } from "../components/Header/HeadCustom";
import Body from "../components/Body";
import { useHomeData } from "../hooks/query";
import Top from "../components/MobileApp/Top";
import TimeLine from "../components/TimeLine";
import AboutTechnology from "../components/MobileApp/AboutTechnology";
import Technologies from "../components/MobileApp/Technologies";
import OurProjects from "../components/MobileApp/OurProjects";
import CrossPlatform from "../components/MobileApp/CrossPlatform";
import EstimateSales from "../components/MobileApp/EstimateSales";
import ContactForm from "../components/MobileApp/ContactForm";
import DefaultBackground from "../components/UI/DefaultBackground";
import AiIntegration from "../components/MobileApp/AiIntegration";
import RequestACall from "../components/AI/RequestACall";

import iconDefi from "../images/blockchain-page/defi.png";
import iconNFT from "../images/blockchain-page/nft.png";
import iconSmartContract from "../images/blockchain-page/smart-contract.png";
import iconDAO from "../images/blockchain-page/dao.png";
import iconLayer from "../images/blockchain-page/layer.png";
import iconGameFi from "../images/blockchain-page/gamefi.png";
import iconCBDC from "../images/blockchain-page/cbdc.png";
import imageFestoWeb from "../images/portfolio/minimal/portfolio-festoweb.jpg";
import imageBoxing from "../images/portfolio/minimal/portfolio-boxing.jpg";
import imagePage from "../images/technologies/technologies_2.png";
import image from "../images/blockchain-page/ai.png";

const Blockchain = ({ id }) => {
  const { article: articleData } = useHomeData();

  const findData = articleData?.find((one) => one?.id == id);

  return (
    <Body colorBackground={"#0B0B0B"}>
      <DefaultBackground>
        <Top
          data={findData}
          title="Blockchain"
          description="We specialise in crafting custom blockchain for enhanced transparency and efficiency in supply chain management and fintech, focusing on secure ledger technology."
          technologies={[
            "Solidity",
            "Golang (Go)",
            "C++",
            "Python",
            "JavaScript",
            "Rust",
          ]}
        />

        <AboutTechnology
          subTitle="About"
          subTitleBold="Technology"
          title="Distributed Ledger Tech (DLT) "
          description="Blockchain technology is a decentralised, distributed ledger system that records transactions across multiple computers, ensuring immutability, transparency, and security through cryptographic hashing. It operates without a central authority, relying on consensus mechanisms like Proof of Work (PoW) and Proof of Stake (PoS) to validate transactions.
<br/>
<br/>
<b>Key features</b>
<ul>
<li>Decentralisation: No central authority</li>
<li>Consensus Mechanisms: Methods like PoW and PoW ensure agreement on the ledger state.</li>
<li>Smart Contracts: Self-executing contracts with terms directly written into code, automating transactions.</li>
<li>Tokenisation: Digital representation of assets on the blockchain, facilitating ownership and transfer.</li></ul>"
          image="blockchain-page/DLT.png"
          maxHeight={485}
        />

        <TimeLine isFirstGreen />

        <Technologies
          data={[
            {
              title: `DeFi`,
              icon: iconDefi,
              description:
                "DeFi leverages blockchain technology to eliminate intermediaries in financial transactions. It includes platforms for lending (Aave), decentralized exchanges (Uniswap), and stablecoins (DAI). It promises greater transparency and access but faces regulatory and security challenges.",
            },
            {
              title: `NFTs`,
              icon: iconNFT,
              description:
                "NFTs are unique digital assets verified on blockchain, representing ownership of items like digital art and collectibles. They enable creators to monetize their work directly but face concerns over market speculation and environmental impact.",
            },
            {
              title: `Smart Contracts`,
              icon: iconSmartContract,
              description:
                "Smart contracts are self-executing contracts with the terms directly written into code on a blockchain. They enable trustless and automated transactions without intermediaries, pivotal in applications like DeFi and NFTs. Challenges include coding errors and legal recognition.",
            },
            {
              title: `DAOs`,
              icon: iconDAO,
              description:
                "DAOs are organizations governed by smart contracts and community voting, aiming for decentralized decision-making. They manage funds and projects transparently but struggle with regulatory recognition and effective governance.",
            },
            {
              title: `Layer 2`,
              icon: iconLayer,
              description:
                "Layer 2 solutions improve blockchain scalability by processing transactions off the main chain, reducing congestion and fees. Examples include the Lightning Network for Bitcoin and Optimistic Rollups for Ethereum. They enhance efficiency but can introduce complexity and security trade-offs.",
            },
            {
              title: `GameFi`,
              icon: iconGameFi,
              description:
                "Allows players to earn cryptocurrency and digital assets through gameplay. Examples include Axie Infinity and Decentraland, where in-game earnings can be traded or sold for real-world value. This model turns gaming into an income source but faces market and regulatory challenges.",
            },
            {
              title: `CBDCs`,
              icon: iconCBDC,
              description:
                "CBDCs are digital forms of a country's fiat currency issued by central banks. They aim to provide the benefits of digital payments with the stability of traditional money. CBDCs promise improved payment systems but raise concerns over privacy and governmental control.",
            },
          ]}
        />

        <CrossPlatform
          title={`Key <span>Differences</span> Between Chains`}
          description={`Here are some of the key differences between crypto chains`}
          styleSubTitle={{
            minWidth: "400px",
          }}
          gap={"100px"}
          posts={[
            {
              title: `BTC`,
              description: `Purpose: Digital Currency <br/>
Consensus: Proof of Work (PoW)<br/>
Block Time: ~10 minutes<br/>
Max Supply: 21 million<br/>
Smart Contracts: Limited<br/>
`,
              image: "blockchain-page/bitcoin.png",
            },
            {
              title: `ETH`,
              description: `Purpose: dApps and smart contracts<br/>
Consensus: Transitioning to Proof of Stake (PoS)<br/>
Block Time: ~15 seconds<br/>
Smart Contracts: Extensive (Solidity)<br/>
Tokens: ERC-20, ERC-721`,
              image: "blockchain-page/eth.png",
            },
            {
              title: `Binance Smart Chain (BSC)`,
              description: `Purpose: Fast dApps and smart contracts<br/>
Consensus: Proof of Staked Authority (PoSA)<br/>
Block Time: ~3 seconds<br/>
Smart Contracts: Ethereum-compatible<br/>
Tokens: BEP-20, BEP-721`,
              image: "blockchain-page/binance.png",
            },
            {
              title: `Solana (SOL)`,
              description: `iPurpose: High-performance dApps<br/>
Consensus: Proof of History (PoH) + PoS<br/>
Block Time: ~400 milliseconds<br/>
Smart Contracts: Supported (Rust, C)<br/>
Features: High throughput`,
              image: "blockchain-page/solana.png",
            },
          ]}
          isReverse
        />
        <RequestACall
          title="Choosing between
Crypto Blockchains"
          description={
            <>
              <b>Bitcoin (BTC):</b> Best for secure and widely accepted digital
              currency transactions.
              <br />
              <b>Ethereum (ETH):</b> Ideal for creating and running
              decentralized applications (dApps) and smart contracts.
              <br />
              <b>Binance Smart Chain (BSC):</b> Great for quick and low-fee
              transactions, with Ethereum compatibility.
              <br />
              <b>Solana (SOL):</b> Excels in high-speed transactions and low
              latency for performance-intensive dApps.
              <br />
              <b>BASE (ETH):</b> Designed for seamless interaction with
              ETH-based decentralised applications and smart contracts
            </>
          }
          styleTitle={{
            fontSize: "56px",
          }}
          imageOther={image}
          height={484}
        />
        {/* 
        title="Enhance Your App's Capabilities With Our Expertise In AI Integration!"
          description="Unlock the power of cutting-edge models like ChatGPT, Mistral, Bing,Google, Facebook, and X (Twitter), seamlessly integrated into your platform.Additionally, leverage other advanced AI APIs such as HubSpot and Salesforce.With AI at the core of your app, you can"
          subTitle={`Empoweryour app to exceed expectations and revolutionize user experiences with ourcomprehensive AI integration solutions.”`}
          list={[
            "Provideseamless automated customer support.",
            "Enhance security with automated fraud detection.",
            "Expediteinvestigations with automated forensics.",
            "Makeinformed decisions with accurate demand predictions.",
            "Personalizeuser experience with smart content suggestions.",
            "Streamlinecontent creation through AI-driven generation algorithms.",
            "Streamlinecontent creation through AI-driven generation algorithms.",
            "Utilizeadvanced data analytics to derive actionable insights and optimize performance.",
          ]}
          button="Request a Call"
         */}
        <AiIntegration />

        <EstimateSales withRequestBtn={false} />

        <OurProjects
          data={[
            {
              title: `Festo Web`,
              description: `The project was completed`,
              link: "/portfolio/2",
              image: imageFestoWeb,
            },
            {
              title: `Boxing Trainer`,
              description: `The project was completed`,
              link: "/portfolio/4",
              image: imageBoxing,
            },
          ]}
        />

        <ContactForm />
      </DefaultBackground>
    </Body>
  );
};

export default Blockchain;

export const Head = () => (
  <HeadCustom
    title={`Create your website with Devinity.AI we are experts websites`}
    description={`We give technology of website with Devinity. From corporate to blogs, we guide you through the process, offering expertise to elevate your online presence`}
    titleShort={`Website Development | Devinity LLC`}
    type={`website`}
    url={`https://devinity.ai/web/`}
    image={imagePage}
    schema={`{
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Create your website with Devinity.AI we are experts websites",
      "url": "https://devinity.ai/web/",
      "description": "We give technology of website with Devinity. From corporate to blogs, we guide you through the process, offering expertise to elevate your online presence",
      "image": "${imagePage}"
    }`}
  />
);
