import Banner from "@/components/modules/Home/Banner/Banner";
import About from "@/components/modules/Home/About/About";
import FeaturedProjects from "@/components/modules/Home/FeaturedProjects/FeaturedProjects";
import FeaturedBlogs from "@/components/modules/Home/FeaturedBlogs/FeaturedBlogs";
import ContactForm from "@/components/modules/Home/Contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Abidur Rahman Arko is a full-stack web developer and a tech enthusiast. He is passionate about web development and loves to work with React, Node.js, and MongoDB.",
};

const HomePage = () => {
  return (
    <div>
      <Banner />
      <section id="about">
        <About />
      </section>
      <FeaturedProjects />
      <FeaturedBlogs />
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
};

export default HomePage;
