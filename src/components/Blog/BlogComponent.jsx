import React from "react";
import { BlogStyledComponent } from "./styled/BlogStyledComponent";
import { GalaryCards } from "./GalaryCards/GalaryCards";
import card1 from '../../images/blog/card-1.png'
import card2 from '../../images/blog/items/blog-item-2-4.png'
import card3 from '../../images/blog/card-3.png'
import card4 from '../../images/blog/items/blog-item-4-1.png'
import card5 from '../../images/blog/items/blog-item-5-1.png'
import card6 from '../../images/blog/items/blog-item-6-2.png'
import card7 from '../../images/blog/items/blog-item-7-1.png'

export const cardsData = [
  {
    id: 1,
    img: card1,
    tag: "#Python practices",
    title: "Machine Learning Basics",
    desc: "Key concepts of machine learning and popular libraries like scikit-learn and TensorFlow.",
    link: "/blog/1",
  },
  {
    id: 2,
    img: card2,
    tag: "#AI",
    title: "Boost App Development with AI",
    desc: "AI simplifies app development, reducing costs and speeding up time-to-market for busy teams.",
    link: "/blog/2",
  },
  {
    id: 3,
    img: card3,
    tag: "#Expo OTA",
    title: "Build Cross-Platform Apps with Expo",
    desc: "Learn how Expo streamlines development for apps that work seamlessly on iOS and Android.",
    link: "/blog/3",
  },
  {
    id: 4,
    img: card4,
    tag: "#AI #MVP #UI/UX #ML",
    title: "Top AI App Ideas for Spring 2025",
    desc: "Explore innovative AI app ideas, from personalized experiences to advanced automation.",
    link: "/blog/4",
  },
  {
    id: 5,
    img: card5,
    tag: "#AdminJS #PWA",
    title: "Seamless AdminJS Integration in PWAs",
    desc: "Discover how AdminJS enables fast and efficient admin panel integration in PWAs.",
    link: "/blog/5",
  },
  {
    id: 6,
    img: card6,
    tag: "#TTS #Eleven Labs #AWS",
    title: "Eleven Labs vs Amazon Polly: TTS Showdown",
    desc: "Compare voice quality, latency, scalability, and cost to pick the best TTS platform.",
    link: "/blog/6",
  },
  {
    id: 7,
    img: card7,
    tag: "#TTS #Eleven Labs #AWS",
    title: "AdminJS: Simplify Your Backend Management",
    desc: "Spin up a powerful admin panel effortlessly with AdminJS, saving time and hassle.",
    link: "/blog/7",
  },
];

export const BlogComponent = () => {
  return (
    <BlogStyledComponent>
      <GalaryCards cards={cardsData} />
    </BlogStyledComponent>
  );
};
