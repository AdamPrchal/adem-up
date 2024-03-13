import { SectionContainer } from "@/components/SectionContainer";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionHeading } from "@/components/SectionHeading";
import Image from "next/image";

const services = [
  {
    name: "SEO",
    description: "Search Engine Optimization for maximum visibility.",
    icon: "search",
  },
  {
    name: "PPC Advertising",
    description: "Efficient paid advertising campaigns.",
    icon: "dollar-sign",
  },
  {
    name: "Social Media Management",
    description: "Building a strong online community.",
    icon: "users",
  },
  {
    name: "Content Marketing",
    description:
      "Engaging and persuasive content that resonates with your audience.",
    icon: "file-text",
  },
  {
    name: "Email Marketing",
    description: "Tailored campaigns for your target groups.",
    icon: "mail",
  },
];

const pricingPlans = [
  {
    name: "Starter Plan",
    description:
      "Perfect for small businesses looking to make an initial impact. Includes basic SEO, social media management, and content creation.",
    price: "$500/month",
    icon: "trending-up",
  },
  {
    name: "Growth Plan",
    description:
      "Designed for growing businesses seeking to expand their reach. Includes advanced SEO, PPC campaigns, comprehensive social media strategy, and email marketing.",
    price: "$1,500/month",
    icon: "bar-chart-2",
  },
  {
    name: "Premium Plan",
    description:
      "Our all-inclusive package for businesses aiming for leadership in their market. Includes all services in the Growth Plan plus premium content creation, video marketing, and analytics reporting.",
    price: "$3,000/month",
    icon: "award",
  },
];

export default function Home() {
  return (
    <main className="bg-base-100">
      <section className="flex justify-center items-center flex-col pb-32 bg-gradient-to-r from-cyan-800 to-blue-800">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-64 rounded-full mb-4 shadow-xl"
        />
        <h1 className="font-bold text-center text-balance text-5xl text-primary mb-4">
          Elevate Your Brand to New Heights
        </h1>
        <p className="text-2xl text-center text-balance text-neutral-300 mb-8">
          AdEm Up Marketing - Your Pathway to Digital Success
        </p>
        <a href="#more" className="btn btn-primary">
          Learn More ↓
        </a>
      </section>
      <SectionContainer>
        <SectionHeading>Who We Are</SectionHeading>
        <SectionDescription>
          AdEm Up Marketing is an innovative marketing agency specializing in
          digital marketing and advertising. Our mission is to help brands grow
          through effective strategies and creative content. Since 2015,
          we&apos;ve worked with dozens of clients to transform their online
          presence and strengthen their market position.
        </SectionDescription>
      </SectionContainer>
      <SectionContainer>
        <SectionHeading>Our Services</SectionHeading>
        <SectionDescription>
          We offer a comprehensive range of digital marketing services,
          including:
        </SectionDescription>
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-4 ">
          {services.map((service) => (
            <li
              className="card w-96 first:bg-primary even:bg-neutral even:text-white first:text-primary-content shadow-xl border border-neutral-500/20"
              key={service.name}
            >
              <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn">Learn More</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </SectionContainer>
      <SectionContainer className="bg-sky-600 text-black pb-24">
        <SectionHeading>Invest in Your Success</SectionHeading>
        <SectionDescription>
          We understand that each client has unique needs and budgets.
          Therefore, we offer flexible pricing models tailored to your goals.
          Contact us for more details and get a customized quote.
        </SectionDescription>
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {pricingPlans.map((service) => (
            <li
              className="card w-96 last:bg-primary first:text-white xl:odd:translate-y-8 even:bg-neutral even:text-white last:text-primary-content shadow-xl border border-neutral-200/20"
              key={service.name}
            >
              <div className="card-body">
                <h2 className="card-title">{service.name}</h2>
                <p className="mb-8">{service.description}</p>
                <div className="card-actions justify-end items-center">
                  <p className="font-black text-2xl">{service.price}</p>
                  <button className="btn">Learn More</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </SectionContainer>
      <SectionContainer>
        <SectionHeading>Got Questions? We&apos;re Here for You!</SectionHeading>
        <SectionDescription>
          Whether you have a query about our services, need a consultation, or
          just want to say hi, feel free to contact us.
        </SectionDescription>
        <p>help@adem.cz</p>
        <p>+420 171 345 239</p>
        <p>Brněnská 1, Brno 613 00 </p>
      </SectionContainer>
    </main>
  );
}
