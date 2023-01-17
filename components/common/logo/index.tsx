import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/">
    <a>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 435.36 435.36"
      width={50}
      height={50}
      role="img"
      arialabelledby="title  desc"
    >
      <title>karam</title>
      <desc>a blue circle with white k letter in the center</desc>
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".cls-1{isolation:isolate;}.cls-2{opacity:0.75;mix-blend-mode:multiply;}.cls-3{fill:#4e6cb3;}.cls-4{fill:#fff;}"
          }}
        />
      </defs>
      <g className="cls-1">
        <g id="Layer_1" data-name="Layer 1">
          <image
            className="cls-2"
            width={50}
            height={50}
            transform="scale(0.24)"
          />
          <circle className="cls-3" cx="210.64" cy="210.64" r="202.49" />
          <polygon
            className="cls-4"
            points="325.2 331.71 288.95 331.71 203.45 206.32 159.07 251.7 159.07 331.71 128.86 331.71 128.86 82.5 159.07 82.5 159.07 210.89 284.43 82.5 324.07 82.5 224.83 184.16 325.2 331.71"
          />
        </g>
      </g>
    </svg>
    </a>
    </Link>
  );
};
export default Logo;
