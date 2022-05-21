import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Styles from "./styles.module.css";

interface propsI {
  title: string;
  image: string;
  text: string;
  placeholder: string;
  embedLink: string;
  link: string;
  repo: string;
  techs: string[];
  handleRemoveSelectedProject: () => void;
}
const Project = ({
  title,
  text,
  image,
  embedLink,
  link,
  repo,
  techs,
  handleRemoveSelectedProject
}: propsI) => {
  useEffect(() => {
    window.document.body.style.overflowY = "hidden";
    return () => {
      window.document.body.style.overflowY = "auto";
    };
  }, []);
  return (
    <div className="flex  justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,.65)]">
      <div
        className="bg-color-white max-w-[600px] w-full dark:bg-color-primary py-[1rem] rounded-[2px] max-h-[97vh] overflow-y-auto "
        tabIndex={0}
      >
        <h3
          className={`text-color-primary dark:text-color-white pb-[1rem] font-bold text-[1.4rem] text-center ${Styles["no-scrollbar"]}`}
        >
          {title}
        </h3>
        {embedLink ? (
          <iframe
            className="w-full"
            height="315"
            src={embedLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <Image
            layout="responsive"
            className="object-cover	 object-center"
            height={70}
            width={100}
            src={image}
            alt={`${title} image`}
          />
        )}
        <p className="text-color-primary dark:text-color-white pl-[1rem] py-[1rem]">
          {text}
        </p>
        <div className="flex flex-wrap flex-wrap gap-4 px-[1rem] items-center ">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              className="bg-color-secondary  py-[.5rem] px-[1rem] rounded-[50px]"
            >
              <p className="text-color-white text-center text-[.8rem]">
                {tech}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-4 pt-[1rem] pl-[1rem] ">
          {link ? (
            <Link href={link} target={link}>
              <a>
                <svg
                  className="w-[25px] fill-color-primary dark:fill-color-white block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 194.818 194.818"
                >
                  <path d="M185.818 2.161h-57.04c-4.971 0-9 4.029-9 9s4.029 9 9 9h35.312l-86.3 86.3a9 9 0 0 0 6.364 15.364 8.975 8.975 0 0 0 6.364-2.636l86.3-86.3v35.313c0 4.971 4.029 9 9 9s9-4.029 9-9v-57.04a9 9 0 0 0-9-9.001z"></path>
                  <path d="M149 77.201a9 9 0 0 0-9 9v88.456H18v-122h93.778c4.971 0 9-4.029 9-9s-4.029-9-9-9H9a9 9 0 0 0-9 9v140a9 9 0 0 0 9 9h140a9 9 0 0 0 9-9V86.201a9 9 0 0 0-9-9z"></path>
                </svg>
              </a>
            </Link>
          ) : null}
          {repo ? (
            <Link href="">
              <a>
                <svg
                  className="w-[25px] fill-color-primary dark:fill-color-white block cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                >
                  <g clip-path="url(#clip0)">
                    <path d="M9 .4c-5 0-9 3.9-9 8.8 0 3.9 2.6 7.2 6.2 8.4.4.1.6-.2.6-.4v-1.5c-2.5.5-3.1-1.2-3.1-1.2-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9 0 1.4.9 1.4.9.8 1.3 2.1.9 2.6.7.1-.6.3-1 .6-1.2-2-.2-4.1-1-4.1-4.3 0-1 .3-1.8.9-2.4-.1-.2-.4-1.1.1-2.4 0 0 .7-.2 2.4 1 .8-.2 1.5-.3 2.3-.3.8 0 1.5.1 2.2.3 1.7-1.2 2.5-1 2.5-1 .5 1.3.2 2.2.1 2.4.6.6.9 1.4.9 2.4 0 3.4-2.1 4.1-4.1 4.3.3.3.6.8.6 1.7v2.4c0 .2.2.5.6.4 3.6-1.2 6.2-4.5 6.2-8.4 0-4.9-4-8.8-9-8.8z"></path>
                  </g>
                </svg>
              </a>
            </Link>
          ) : null}
        </div>
      </div>
      <svg
        onClick={handleRemoveSelectedProject}
        className="absolute right-[1rem] top-[1rem]"
        aria-label="Fermer"
        color="#ffffff"
        fill="#ffffff"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <polyline
          fill="none"
          points="20.643 3.357 12 12 3.353 20.647"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
        ></polyline>
        <line
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3"
          x1="20.649"
          x2="3.354"
          y1="20.649"
          y2="3.354"
        ></line>
      </svg>
    </div>
  );
};

export default Project;
