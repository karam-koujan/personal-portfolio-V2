import Image from "next/image";
import logo from "../../../public/logo.svg";

const Logo = () => {
  return <Image src={logo} width={50} height={50} />;
};
export default Logo;
