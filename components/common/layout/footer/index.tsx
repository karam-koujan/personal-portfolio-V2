import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-[4.5rem] py-[2rem] before:polygoan">
      <div className="mx-auto w-full max-w-6xl">
        <div className="hidden md:flex gap-[2rem] w-fit mx-auto">
          <svg
            className="fill-color-secondary w-[20px] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
          >
            <g clip-path="url(#clip0)">
              <path d="M18 3.4c-.7.3-1.4.5-2.1.6.7-.5 1.3-1.2 1.6-2-.7.4-1.5.7-2.3.9-.7-.8-1.7-1.2-2.7-1.2-2.1 0-3.7 1.6-3.7 3.7 0 .3 0 .6.1.8-3.1-.1-5.8-1.6-7.6-3.8-.4.5-.6 1.1-.6 1.8 0 1.3.7 2.4 1.7 3.1-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.3 3 3.6-.3.1-.7.1-1 .1H2c.5 1.4 1.8 2.5 3.5 2.5-1.3 1-2.9 1.6-4.6 1.6H0c1.6 1 3.6 1.6 5.7 1.6 6.8 0 10.5-5.6 10.5-10.5v-.5c.7-.5 1.3-1.1 1.8-1.9z"></path>
            </g>
          </svg>
          <svg
            className="fill-color-secondary w-[20px] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
          >
            <g clip-path="url(#clip0)">
              <path d="M18 18v-6.6c0-3.2-.7-5.7-4.5-5.7-1.8 0-3 1-3.5 1.9h-.1V6H6.4v12h3.7v-6c0-1.5.3-3 2.2-3 1.9 0 2 1.8 2 3.1V18H18zM.3 6H4v12H.3V6zM2.2 0C1 0 0 1 0 2.2c0 1.2 1 2.1 2.2 2.1 1.2 0 2.1-.9 2.1-2.1C4.3 1 3.4 0 2.2 0z"></path>
            </g>
          </svg>
          <svg
            className="fill-color-secondary w-[20px] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
          >
            <g clip-path="url(#clip0)">
              <path d="M9 .4c-5 0-9 3.9-9 8.8 0 3.9 2.6 7.2 6.2 8.4.4.1.6-.2.6-.4v-1.5c-2.5.5-3.1-1.2-3.1-1.2-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9 0 1.4.9 1.4.9.8 1.3 2.1.9 2.6.7.1-.6.3-1 .6-1.2-2-.2-4.1-1-4.1-4.3 0-1 .3-1.8.9-2.4-.1-.2-.4-1.1.1-2.4 0 0 .7-.2 2.4 1 .8-.2 1.5-.3 2.3-.3.8 0 1.5.1 2.2.3 1.7-1.2 2.5-1 2.5-1 .5 1.3.2 2.2.1 2.4.6.6.9 1.4.9 2.4 0 3.4-2.1 4.1-4.1 4.3.3.3.6.8.6 1.7v2.4c0 .2.2.5.6.4 3.6-1.2 6.2-4.5 6.2-8.4 0-4.9-4-8.8-9-8.8z"></path>
            </g>
          </svg>
          <svg
            className="fill-color-secondary w-[20px] cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path d="M1 9c-.6 0-1 .4-1 1v14.1C0 30.3 4.7 35.6 10.8 36c5.9.3 10.9-3.8 12-9.3.6.7 1.1 1.4 1.7 2.1l-3.5 15c-.1.3 0 .6.2.8.2.3.5.4.8.4h5.1c.5 0 .9-.3 1-.8.6-2.6 1.6-6.7 2.4-10.4l1 .5c2.1 1.1 4.3 1.7 6.5 1.7 7.2 0 12.9-6.4 11.9-13.7-.7-4.9-4.5-9-9.3-10-5.6-1.2-11.1 1.6-13.4 6.4 0 0-.3.6-.5 1.2-1.6-2.9-2.6-5.8-3.1-7.9-.2-.8-.5-2.2-.5-2.3-.1-.4-.5-.7-.9-.7H17c-.6 0-1 .4-1 1v14.3c0 2.3-1.7 4.5-4.1 4.7-2.6.2-4.9-1.9-4.9-4.5V10c0-.6-.4-1-1-1H1zm37 10c2.8 0 5 2.2 5 5s-2.2 5-5 5c-2.2 0-4.3-1.3-5.7-2.5.5-2.2.9-3.7.9-3.8.5-2.2 2.5-3.7 4.8-3.7z"></path>
          </svg>
        </div>
      </div>
      <div className=" gap-[2rem] w-fit flex flex-col fixed pr-[1rem] right-0 bottom-0 ">
        <svg
          className="fill-color-secondary w-[20px] cursor-pointer transform-all ease-in-out duration-500 hover:scale-125 focus:scale-125"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
        >
          <g clip-path="url(#clip0)">
            <path d="M18 3.4c-.7.3-1.4.5-2.1.6.7-.5 1.3-1.2 1.6-2-.7.4-1.5.7-2.3.9-.7-.8-1.7-1.2-2.7-1.2-2.1 0-3.7 1.6-3.7 3.7 0 .3 0 .6.1.8-3.1-.1-5.8-1.6-7.6-3.8-.4.5-.6 1.1-.6 1.8 0 1.3.7 2.4 1.7 3.1-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.3 3 3.6-.3.1-.7.1-1 .1H2c.5 1.4 1.8 2.5 3.5 2.5-1.3 1-2.9 1.6-4.6 1.6H0c1.6 1 3.6 1.6 5.7 1.6 6.8 0 10.5-5.6 10.5-10.5v-.5c.7-.5 1.3-1.1 1.8-1.9z"></path>
          </g>
        </svg>
        <svg
          className="fill-color-secondary w-[20px] cursor-pointer transform-all ease-in-out duration-500 hover:scale-125 focus:scale-125"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
        >
          <g clip-path="url(#clip0)">
            <path d="M18 18v-6.6c0-3.2-.7-5.7-4.5-5.7-1.8 0-3 1-3.5 1.9h-.1V6H6.4v12h3.7v-6c0-1.5.3-3 2.2-3 1.9 0 2 1.8 2 3.1V18H18zM.3 6H4v12H.3V6zM2.2 0C1 0 0 1 0 2.2c0 1.2 1 2.1 2.2 2.1 1.2 0 2.1-.9 2.1-2.1C4.3 1 3.4 0 2.2 0z"></path>
          </g>
        </svg>
        <svg
          className="fill-color-secondary w-[20px] cursor-pointer transform-all ease-in-out duration-500 hover:scale-125 focus:scale-125"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
        >
          <g clip-path="url(#clip0)">
            <path d="M9 .4c-5 0-9 3.9-9 8.8 0 3.9 2.6 7.2 6.2 8.4.4.1.6-.2.6-.4v-1.5c-2.5.5-3.1-1.2-3.1-1.2-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9 0 1.4.9 1.4.9.8 1.3 2.1.9 2.6.7.1-.6.3-1 .6-1.2-2-.2-4.1-1-4.1-4.3 0-1 .3-1.8.9-2.4-.1-.2-.4-1.1.1-2.4 0 0 .7-.2 2.4 1 .8-.2 1.5-.3 2.3-.3.8 0 1.5.1 2.2.3 1.7-1.2 2.5-1 2.5-1 .5 1.3.2 2.2.1 2.4.6.6.9 1.4.9 2.4 0 3.4-2.1 4.1-4.1 4.3.3.3.6.8.6 1.7v2.4c0 .2.2.5.6.4 3.6-1.2 6.2-4.5 6.2-8.4 0-4.9-4-8.8-9-8.8z"></path>
          </g>
        </svg>
        <svg
          className="fill-color-secondary w-[20px] cursor-pointer transform-all ease-in-out duration-500 hover:scale-125 focus:scale-125"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
        >
          <path d="M1 9c-.6 0-1 .4-1 1v14.1C0 30.3 4.7 35.6 10.8 36c5.9.3 10.9-3.8 12-9.3.6.7 1.1 1.4 1.7 2.1l-3.5 15c-.1.3 0 .6.2.8.2.3.5.4.8.4h5.1c.5 0 .9-.3 1-.8.6-2.6 1.6-6.7 2.4-10.4l1 .5c2.1 1.1 4.3 1.7 6.5 1.7 7.2 0 12.9-6.4 11.9-13.7-.7-4.9-4.5-9-9.3-10-5.6-1.2-11.1 1.6-13.4 6.4 0 0-.3.6-.5 1.2-1.6-2.9-2.6-5.8-3.1-7.9-.2-.8-.5-2.2-.5-2.3-.1-.4-.5-.7-.9-.7H17c-.6 0-1 .4-1 1v14.3c0 2.3-1.7 4.5-4.1 4.7-2.6.2-4.9-1.9-4.9-4.5V10c0-.6-.4-1-1-1H1zm37 10c2.8 0 5 2.2 5 5s-2.2 5-5 5c-2.2 0-4.3-1.3-5.7-2.5.5-2.2.9-3.7.9-3.8.5-2.2 2.5-3.7 4.8-3.7z"></path>
        </svg>
        <div className="w-[1.1px] h-[9rem] bg-color-third rounded-tl-[1000px] rounded-tr-[1000px] justify-center self-center"></div>
      </div>
    </footer>
  );
};
export default Footer;
