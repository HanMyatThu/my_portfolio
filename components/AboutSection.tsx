"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface TabDataProps {
  title: string
  id: string
  content: React.ReactNode
}

const TAB_DATA: TabDataProps[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node Js / Express</li>
        <li>Nest Js</li>
        <li>JavaScript / TypeScript</li>
        <li>React</li>
        <li>Next Js</li>
        <li>React Native</li>
        <li>Vue Js</li>
        <li>Angular Js</li>
        <li>Solidity</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor in Computer Engineering and Information Technology, YTU</li>
        <li>Diploma in Business and Information Technology, KMD</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Certified Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image 
          alt="about-image"
          src="/images/about.png"
          width={500}
          height={500} 
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I started working in 2019 and
            I have experience working with JavaScript, TypeScript, React, Redux, NextJs, React Native,
            Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. What makes me happy about software
            development is delivering a good product to society that is used by lots of people. My goal for
            next 5 years is I want to be an expart blockchain developer and I am aiming to create one on my own.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
