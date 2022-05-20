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
      <div>
        <h3>{title}</h3>
        {link ? (
          <iframe
            width="560"
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
        <p>{text}</p>
        {techs.map((tech, idx) => (
          <div key={idx}>{tech}</div>
        ))}
      </div>
    </div>
  );
};

export default Project;
