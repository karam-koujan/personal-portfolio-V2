interface propsI {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}
const Button = ({ children, className, ...props }: propsI) => {
  return (
    <button
      className={`bg-color-secondary text-center font-bold text-color-white rounded-[1000px] capitalize text-[1rem] py-[15px] px-[25px] border-solid border-2 border-color-secondary transition-all duration-[1000] ease-in  hover:bg-transparent focus:bg-transparent hover:text-color-secondary  focus:text-color-secondary ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
