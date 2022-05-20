import Image from "next/image";
interface projectI {
  title: string;
  image: string;
  text: string;
  placeholder: string;
  link: string;
  techs: string[];
}
const Project = ({
  title,
  text,
  image,
  link,
  placeholder,
  techs
}: projectI) => {
  return (
    <div className="flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 bg-color-primary">
      <div className="bg-color-white py-[1rem] rounded-[2px]">
        <h3 className="text-color-primary pb-[1rem] font-bold text-[1.4rem] text-center">
          {title}
        </h3>
        {link ? (
          <iframe
            className="w-full"
            height="315"
            src={"https://www.youtube.com/embed/TWHMeKpaNpE"}
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
    </div>
  );
};

export default Project;
