import React from "react";
import Image from "next/image";
import designIcon from "../public/img/icon-design.svg";
import cryptoIcon from "../public/img/icon-crypto.svg";
import businessIcon from "../public/img/icon-business.svg";
import photoIcon from "../public/img/icon-photography.svg";
import animationIcon from "../public/img/icon-animation.svg";
const features = [
  {
    id: 1,
    title: "Animation",
    description:
      "Learn the latest animation techniques to create stunning motion design and captivate your audience and learn new ways to do things.",
    icon: animationIcon,
  },
  {
    id: 2,
    title: "Design",
    description:
      "Create beautiful, usable interfaces to help shape the future of how the web looks amazing on a flat screen tv and ese. ",
    icon: designIcon,
  },
  {
    id: 3,
    title: "Photography",
    description:
      "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos and all the other effects.",
    icon: photoIcon,
  },
  {
    id: 4,
    title: "Crypto",
    description:
      "All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course and up your skills to be job ready.",
    icon: cryptoIcon,
  },
  {
    id: 5,
    title: "Business",
    description:
      "A step-by-step playbook to help you start, scale, and sustain your business without outside investment or other help from external sources.",
    icon: businessIcon,
  },
];

export default function Feature() {
  return (
    <section className="grid grid-cols-1 gap-12 container px-4 mx-auto md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 mb-12 max-w-md  md:pt-32 md:max-w-screen-2xl lg:max-w-screen-xl  md:gap-6 md:gap-y-12 ">
      <div className="bg-gradient-to-t from-frost-bite to-outrageous-orange rounded-lg shadow-2xl">
        <p className="text-3xl text-white font-bold py-4 px-4">
          Check out our <br className="" /> most popular courses!
        </p>
      </div>
      {features.map((feature) => (
        <div
          key={feature.id}
          className="flex flex-col bg-white shadow-2xl rounded-xl lg:px-6 lg:py-6"
        >
          <div className="-mt-8 px-4 py-2 md:-mt-10 lg:-mt-14">
            <Image src={feature.icon} />
          </div>
          <div className="px-4 py-4 md:px-6 ">
            <h3 className="mb-4 font-bold text-xl md:py-4 lg:pb-6">
              {feature.title}
            </h3>
            <p className="text-roman-silver">{feature.description}</p>
          </div>
          <div>
            <button className="mb-4 pl-4 text-carnation-pink text-lg font-semibold lg:pl-6 lg:mb-6 md:mb-8 md:pl-6">
              Get Started
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
