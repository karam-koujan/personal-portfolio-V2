import Image from "next/image";
import { useEffect } from "react";
import Styles from "./styles.module.css";
interface projectI {
  title: string;
  image: string;
  text: string;
  placeholder: string;
  embedLink: string;
  link: string;
  techs: string[];
}
const Project = ({
  title,
  text,
  image,
  embedLink,
  placeholder,
  techs
}: projectI) => {
  useEffect(() => {
    window.document.body.style.overflowY = "hidden";
  }, []);
  return (
    <div className="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,.65)]">
      <div className="bg-color-white py-[1rem] rounded-[2px] max-h-[97vh] overflow-y-auto ">
        <h3
          className={`text-color-primary pb-[1rem] font-bold text-[1.4rem] text-center ${Styles["no-scrollbar"]}`}
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
        <p className="text-color-primary pl-[1rem] py-[1rem]">{text}</p>
        <div className="flex gap-4 px-[1rem]">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              className="bg-color-secondary py-[.5rem] px-[1rem] rounded-[50px]"
            >
              <p className="text-color-white text-center text-[.8rem]">
                {tech}
              </p>
            </div>
          ))}
        </div>
      </div>
      <svg
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
