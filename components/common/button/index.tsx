import Styles from "./styles.module.css";

interface ButtonI {
  children: React.ReactNode;
}
const Button = ({ children }: ButtonI) => {
  return (
    <button className="bg-color-secondary text-color-white rounded-[60px] capitalize text-[1.2rem] py-[.9em] px-[1.7em] border-solid border-2 border-color-secondary transition-all duration-[1000] ease-in  hover:bg-transparent focus:bg-transparent hover:text-color-secondary  focus:text-color-secondary">
      {children}
    </button>
  );
};

export default Button;
