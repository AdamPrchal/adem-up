import { SectionContainer } from "@/components/SectionContainer";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionHeading } from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { ConsultationForm } from "@/components/ConsultationForm";

const services = [
  {
    name: "SEO",
    description: "Search Engine Optimization for maximum visibility.",
    icon: "search" as keyof typeof dynamicIconImports,
  },
  {
    name: "PPC Advertising",
    description: "Efficient paid advertising campaigns.",
    icon: "dollar-sign" as keyof typeof dynamicIconImports,
  },
  {
    name: "Social Media Management",
    description: "Building a strong online community.",
    icon: "users" as keyof typeof dynamicIconImports,
  },
  {
    name: "Content Marketing",
    description:
      "Engaging and persuasive content that resonates with your audience.",
    icon: "file-text" as keyof typeof dynamicIconImports,
  },
  {
    name: "Email Marketing",
    description: "Tailored campaigns for your target groups.",
    icon: "mail" as keyof typeof dynamicIconImports,
  },
];

const pricingPlans = [
  {
    name: "Starter Plan",
    description:
      "Perfect for small businesses looking to make an initial impact. Includes basic SEO, social media management, and content creation.",
    price: "$500/month",
    icon: "trending-up" as keyof typeof dynamicIconImports,
  },
  {
    name: "Growth Plan",
    description:
      "Designed for growing businesses seeking to expand their reach. Includes advanced SEO, PPC campaigns, comprehensive social media strategy, and email marketing.",
    price: "$1,500/month",
    icon: "bar-chart-2" as keyof typeof dynamicIconImports,
  },
  {
    name: "Premium Plan",
    description:
      "Our all-inclusive package for businesses aiming for leadership in their market. Includes all services in the Growth Plan plus premium content creation, video marketing, and analytics reporting.",
    price: "$3,000/month",
    icon: "award" as keyof typeof dynamicIconImports,
  },
];

const faqs = [
  {
    question: "What services does AdEm Up Marketing offer?",
    answer:
      "We specialize in a comprehensive range of digital marketing services, including Search Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, social media management, content marketing, and email marketing campaigns tailored to meet your business objectives.",
  },
  {
    question: "How do we get started with AdEm Up Marketing?",
    answer:
      "Getting started is easy! Simply contact us through our website form or email us directly. We’ll schedule a consultation to discuss your marketing needs, goals, and how we can help your business grow.",
  },
  {
    question: "Can AdEm Up Marketing help with a small budget?",
    answer:
      "Yes! We believe every business deserves to grow, regardless of its size or budget. We offer flexible pricing plans tailored to your specific marketing needs and financial constraints. Contact us to discuss how we can work within your budget.",
  },
  {
    question: "How are your services priced?",
    answer:
      "Our pricing varies based on the services you require and the scope of your project. We offer customized pricing plans that can include one-time fees for specific projects or monthly packages for ongoing services. For detailed pricing, please contact us so we can understand your needs and provide you with a tailored quote.",
  },
  {
    question: "What are the pricing plans available?",
    answer:
      "We offer three main pricing plans tailored to different business needs and budgets: <br/><br/><strong>Starter Plan</strong>: $500/month, perfect for small businesses looking to make an initial impact with basic SEO, social media management, and content creation. <br/><br/><strong>Growth Plan</strong>: $1,500/month, designed for growing businesses seeking to expand their reach with advanced SEO, PPC campaigns, comprehensive social media strategy, and email marketing. <br/><br/><strong>Premium Plan</strong>: $3,000/month, our all-inclusive package for businesses aiming for market leadership, including all services in the Growth Plan plus premium content creation, video marketing, and analytics reporting.",
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
      <SectionContainer id="aboutUs">
        <SectionHeading>Who We Are</SectionHeading>
        <SectionDescription>
          AdEm Up Marketing is an innovative marketing agency specializing in
          digital marketing and advertising. Our mission is to help brands grow
          through effective strategies and creative content. Since 2015,
          we&apos;ve worked with dozens of clients to transform their online
          presence and strengthen their market position.
        </SectionDescription>
      </SectionContainer>

      <SectionContainer
        id="consultation"
        className="bg-sky-600 text-black pb-24"
      >
        <SectionHeading>Schedule Your Free Consultation</SectionHeading>
        <SectionDescription className="text-center">
          Start your journey to marketing success.
          <br />
          Select a date and time for your free consultation call.
        </SectionDescription>
        <ConsultationForm />
      </SectionContainer>
      <SectionContainer id="services">
        <SectionHeading>Our Services</SectionHeading>
        <SectionDescription>
          We offer a comprehensive range of digital marketing services,
          including:
        </SectionDescription>
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-4 ">
          {services.map((service) => (
            <li
              className="card max-w-96 first:bg-primary even:bg-neutral even:text-white first:text-primary-content shadow-xl border border-neutral-500/20"
              key={service.name}
            >
              <div className="card-body">
                <div className="flex gap-2 items-center">
                  <h3 className="card-title">{service.name}</h3>
                  <Icon name={service.icon} />
                </div>
                <p>{service.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn">Learn More</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </SectionContainer>
      <SectionContainer id="pricing" className="bg-sky-600 text-black pb-24">
        <SectionHeading>Invest in Your Success</SectionHeading>
        <SectionDescription>
          We understand that each client has unique needs and budgets.
          Therefore, we offer flexible pricing models tailored to your goals.
          Contact us for more details and get a customized quote.
        </SectionDescription>
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <li
              className="card max-w-96 last:bg-primary first:text-white xl:odd:translate-y-8 even:bg-neutral even:text-white last:text-primary-content shadow-xl border border-neutral-200/20"
              key={plan.name}
            >
              <div className="card-body">
                <div className="flex gap-2 items-center">
                  <h3 className="card-title">{plan.name}</h3>
                  <Icon name={plan.icon} />
                </div>
                <p className="mb-8">{plan.description}</p>
                <div className="card-actions justify-end items-center">
                  <p className="font-black text-2xl">{plan.price}</p>
                  <button className="btn">Learn More</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer id="faq" className="text-black pb-24">
        <SectionHeading>FAQ</SectionHeading>

        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {faqs.map((question) => (
            <li
              className="card max-w-96 bg-neutral text-white shadow-xl border border-neutral-200/20"
              key={question.question}
            >
              <div className="card-body">
                <h3 className="card-title mb-2">{question.question}</h3>
                <p
                  dangerouslySetInnerHTML={{ __html: question.answer }}
                  className="mb-8"
                ></p>
              </div>
            </li>
          ))}
        </ul>
      </SectionContainer>

      <SectionContainer id="contact">
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
