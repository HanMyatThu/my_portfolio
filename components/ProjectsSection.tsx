"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

interface ProjectCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
  tag: string[]
}

const projectsData: ProjectCardProps[] = [
  {
    id: 1,
    title: "A Shopping Cart (API + UI)",
    description: "A simple shopping cart with Next Js, TypeScript, ShadCN UI, Context, Next API and Stripe Payment",
    image: "/images/projects/1.png",
    tag: ["All", "Course"],
    gitUrl: "https://github.com/HanMyatThu/shopping_cart",
    previewUrl: "https://simplecart.drazcoding.com/",
  },
  {
    id: 2,
    title: "TTB Touch",
    description: "Mobile Banking Application of TMB Bank developed with React, React Native, Javascript, Material UI , Redux , Storybook and more.",
    image: "/images/projects/2.png",
    tag: ["All", "Work"],
    gitUrl: "https://apps.apple.com/th/app/ttb-touch/id884079963",
    previewUrl: "https://apps.apple.com/th/app/ttb-touch/id884079963",
  },
  {
    id: 3,
    title: "Rice ATM Machine",
    description: "This Project was created during Covid period in Myanmar with the help of other people. I took a reference from Vietnam and created a similar one to help the people of my country. This was developed with Node, React, Javascript and etc.",
    image: "/images/projects/3.png",
    tag: ["All", "Public", "Work"],
    gitUrl: "https://github.com/HanMyatThu/coviddonation_server",
    previewUrl: "/https://www.facebook.com/watch/?v=669423680310719",
  },
  {
    id: 4,
    title: "A Robust Backend With Nest JS",
    description: "APIs developed with Nest JS framework, using Typescript, Postgresql, Docker, JWT, Passport and more.",
    image: "/images/projects/4.png",
    tag: ["All", "Course"],
    gitUrl: "https://github.com/HanMyatThu/nest_backend",
    previewUrl: "https://github.com/HanMyatThu/nest_backend",
  },
  {
    id: 5,
    title: "Discord Clone",
    description: "Chat application similiar to Discord,using Next 14, SocketIo, Prisma, Postgres, Tailwind, ShadCN UI",
    image: "/images/projects/5.png",
    tag: ["All", "Course"],
    gitUrl: "https://github.com/HanMyatThu/custom-discord",
    previewUrl: "https://github.com/HanMyatThu/custom-discord",
  },
  {
    id: 6,
    title: "NFT MarketPlace On Ethereum",
    description: "NFT MarketPlace On Ethereum, Developed with NextJs, Clerk, Ethereum and more",
    image: "/images/projects/6.png",
    tag: ["All", "Course"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "My Portfolio",
    description: "My Portfolio application developed with NextJS for personal use.",
    image: "/images/projects/7.png",
    tag: ["All", "Course"],
    gitUrl: "https://github.com/HanMyatThu/my_portfolio",
    previewUrl: "https://drazcoding.com",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Work"
          isSelected={tag === "Work"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Course"
          isSelected={tag === "Course"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Public"
          isSelected={tag === "Public"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
