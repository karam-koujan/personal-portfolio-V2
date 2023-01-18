import Link from "next/link";
import { websiteMetaData } from "../../../../data/config";
import Title from "../../components/common/title";
import { SocialMediaLinks } from "./styles";
const Footer = () => {
  return (
    <footer className="mt-[4.5rem] py-[2rem] before:polygoan">
      <div className="w-full max-w-6xl mx-auto">
        <div className="hidden xl:flex gap-[2rem] mb-[2rem]  w-fit mx-auto">
          <Link href={websiteMetaData.socialMedia.twitter}>
            <a>
              <svg
                className="fill-color-primary dark:fill-color-white  w-[20px] cursor-pointer transform-all ease-in-out duration-500 hover:scale-125 focus:scale-125"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
              >
                <g clipPath="url(#clip0)">
                  <path d="M18 3.4c-.7.3-1.4.5-2.1.6.7-.5 1.3-1.2 1.6-2-.7.4-1.5.7-2.3.9-.7-.8-1.7-1.2-2.7-1.2-2.1 0-3.7 1.6-3.7 3.7 0 .3 0 .6.1.8-3.1-.1-5.8-1.6-7.6-3.8-.4.5-.6 1.1-.6 1.8 0 1.3.7 2.4 1.7 3.1-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.3 3 3.6-.3.1-.7.1-1 .1H2c.5 1.4 1.8 2.5 3.5 2.5-1.3 1-2.9 1.6-4.6 1.6H0c1.6 1 3.6 1.6 5.7 1.6 6.8 0 10.5-5.6 10.5-10.5v-.5c.7-.5 1.3-1.1 1.8-1.9z"></path>
                </g>
              </svg>
            </a>
          </Link>
          <Link href={websiteMetaData.socialMedia.linkedIn}>
            <a>
              <svg
                className="fill-color-primary dark:fill-color-white w-[20px] cursor-pointer transform-all ease-in-out duration-500 hover:scale-125 focus:scale-125"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
              >
                <g clipPath="url(#clip0)">
                  <path d="M18 18v-6.6c0-3.2-.7-5.7-4.5-5.7-1.8 0-3 1-3.5 1.9h-.1V6H6.4v12h3.7v-6c0-1.5.3-3 2.2-3 1.9 0 2 1.8 2 3.1V18H18zM.3 6H4v12H.3V6zM2.2 0C1 0 0 1 0 2.2c0 1.2 1 2.1 2.2 2.1 1.2 0 2.1-.9 2.1-2.1C4.3 1 3.4 0 2.2 0z"></path>
                </g>
              </svg>
            </a>
          </Link>
          <Link href={websiteMetaData.socialMedia.github}>
            <a>
              <svg
                className="fill-color-primary dark:fill-color-white w-[20px] cursor-pointer transform-all ease-in-out duration-500 hover:scale-125 focus:scale-125"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
              >
                <g clipPath="url(#clip0)">
                  <path d="M9 .4c-5 0-9 3.9-9 8.8 0 3.9 2.6 7.2 6.2 8.4.4.1.6-.2.6-.4v-1.5c-2.5.5-3.1-1.2-3.1-1.2-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9 0 1.4.9 1.4.9.8 1.3 2.1.9 2.6.7.1-.6.3-1 .6-1.2-2-.2-4.1-1-4.1-4.3 0-1 .3-1.8.9-2.4-.1-.2-.4-1.1.1-2.4 0 0 .7-.2 2.4 1 .8-.2 1.5-.3 2.3-.3.8 0 1.5.1 2.2.3 1.7-1.2 2.5-1 2.5-1 .5 1.3.2 2.2.1 2.4.6.6.9 1.4.9 2.4 0 3.4-2.1 4.1-4.1 4.3.3.3.6.8.6 1.7v2.4c0 .2.2.5.6.4 3.6-1.2 6.2-4.5 6.2-8.4 0-4.9-4-8.8-9-8.8z"></path>
                </g>
              </svg>
            </a>
          </Link>
          <Link href={websiteMetaData.socialMedia.upwork}>
            <a>
              <svg
                className="fill-color-primary dark:fill-color-white w-[20px] cursor-pointer transform-all ease-in-out duration-500 hover:scale-125 focus:scale-125"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
              >
                <path d="M1 9c-.6 0-1 .4-1 1v14.1C0 30.3 4.7 35.6 10.8 36c5.9.3 10.9-3.8 12-9.3.6.7 1.1 1.4 1.7 2.1l-3.5 15c-.1.3 0 .6.2.8.2.3.5.4.8.4h5.1c.5 0 .9-.3 1-.8.6-2.6 1.6-6.7 2.4-10.4l1 .5c2.1 1.1 4.3 1.7 6.5 1.7 7.2 0 12.9-6.4 11.9-13.7-.7-4.9-4.5-9-9.3-10-5.6-1.2-11.1 1.6-13.4 6.4 0 0-.3.6-.5 1.2-1.6-2.9-2.6-5.8-3.1-7.9-.2-.8-.5-2.2-.5-2.3-.1-.4-.5-.7-.9-.7H17c-.6 0-1 .4-1 1v14.3c0 2.3-1.7 4.5-4.1 4.7-2.6.2-4.9-1.9-4.9-4.5V10c0-.6-.4-1-1-1H1zm37 10c2.8 0 5 2.2 5 5s-2.2 5-5 5c-2.2 0-4.3-1.3-5.7-2.5.5-2.2.9-3.7.9-3.8.5-2.2 2.5-3.7 4.8-3.7z"></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>
      <div className="flex mx-auto w-fit sm:flex-col sm:items-center ">
        <p className="text-[.9rem]  text-color-primary dark:text-color-white">
          ©&nbsp;karam koujan 2022.
        </p>
        <p className="flex text-[.9rem] ml-[.3rem] text-color-primary dark:text-color-white">
          built with
          <Link href="https://nextjs.org/">
            <a>
              <svg
                className="fill-color-primary dark:fill-color-white mx-[.3rem] w-[20px] cursor-pointer transform-all ease-in-out duration-500 hover:scale-125 focus:scale-125"
                viewBox=".5 -.2 1023 1024.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M478.5.6c-2.2.2-9.2.9-15.5 1.4C317.7 15.1 181.6 93.5 95.4 214c-48 67-78.7 143-90.3 223.5C1 465.6.5 473.9.5 512s.5 46.4 4.6 74.5C32.9 778.6 169.6 940 355 999.8c33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5L487 587.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5C991.1 245.4 854.4 84 669 24.2 636.3 13.6 601.5 6.3 562.5 1.9c-9.6-1-75.7-2.1-84-1.3zM687.9 310c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6V457.2c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"></path>
                <path d="M784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z"></path>
              </svg>
            </a>
          </Link>
          open sourced on
          <Link href="https://github.com/karam-koujan/personal-portfolio-V2">
            <a>
              <svg
                className="fill-color-primary dark:fill-color-white mx-[.3rem] w-[20px] cursor-pointer transform-all ease-in-out duration-500 hover:scale-125 focus:scale-125"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
              >
                <g clipPath="url(#clip0)">
                  <path d="M9 .4c-5 0-9 3.9-9 8.8 0 3.9 2.6 7.2 6.2 8.4.4.1.6-.2.6-.4v-1.5c-2.5.5-3.1-1.2-3.1-1.2-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9 0 1.4.9 1.4.9.8 1.3 2.1.9 2.6.7.1-.6.3-1 .6-1.2-2-.2-4.1-1-4.1-4.3 0-1 .3-1.8.9-2.4-.1-.2-.4-1.1.1-2.4 0 0 .7-.2 2.4 1 .8-.2 1.5-.3 2.3-.3.8 0 1.5.1 2.2.3 1.7-1.2 2.5-1 2.5-1 .5 1.3.2 2.2.1 2.4.6.6.9 1.4.9 2.4 0 3.4-2.1 4.1-4.1 4.3.3.3.6.8.6 1.7v2.4c0 .2.2.5.6.4 3.6-1.2 6.2-4.5 6.2-8.4 0-4.9-4-8.8-9-8.8z"></path>
                </g>
              </svg>
            </a>
          </Link>
        </p>
        <p className="flex text-[.9rem] text-color-primary dark:text-color-white">
          and deployed on
          <Link href="https://vercel.com">
            <a>
              <svg
                className="fill-color-primary dark:fill-color-white mx-[.3rem] w-[20px]  cursor-pointer transform-all ease-in-out duration-500 hover:scale-125 focus:scale-125"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 48l240 416H16z" fillRule="evenodd"></path>
              </svg>
            </a>
          </Link>
        </p>
      </div>
      <SocialMediaLinks className=" mxl:flex hidden gap-[2rem] w-fit  flex-col fixed pr-[1rem] right-0 bottom-0 ">
        <Link href={websiteMetaData.socialMedia.twitter}>
          <a>
            <svg
              className="fill-color-primary dark:fill-color-white  w-[20px] cursor-pointer transform-all ease-in-out duration-500 hover:scale-125 focus:scale-125"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
            >
              <g clipPath="url(#clip0)">
                <path d="M18 3.4c-.7.3-1.4.5-2.1.6.7-.5 1.3-1.2 1.6-2-.7.4-1.5.7-2.3.9-.7-.8-1.7-1.2-2.7-1.2-2.1 0-3.7 1.6-3.7 3.7 0 .3 0 .6.1.8-3.1-.1-5.8-1.6-7.6-3.8-.4.5-.6 1.1-.6 1.8 0 1.3.7 2.4 1.7 3.1-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.3 3 3.6-.3.1-.7.1-1 .1H2c.5 1.4 1.8 2.5 3.5 2.5-1.3 1-2.9 1.6-4.6 1.6H0c1.6 1 3.6 1.6 5.7 1.6 6.8 0 10.5-5.6 10.5-10.5v-.5c.7-.5 1.3-1.1 1.8-1.9z"></path>
              </g>
            </svg>
          </a>
        </Link>
        <Link href={websiteMetaData.socialMedia.linkedIn}>
          <a>
            <svg
              className="fill-color-primary dark:fill-color-white w-[20px] cursor-pointer transform-all ease-in-out duration-500 hover:scale-125 focus:scale-125"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
            >
              <g clipPath="url(#clip0)">
                <path d="M18 18v-6.6c0-3.2-.7-5.7-4.5-5.7-1.8 0-3 1-3.5 1.9h-.1V6H6.4v12h3.7v-6c0-1.5.3-3 2.2-3 1.9 0 2 1.8 2 3.1V18H18zM.3 6H4v12H.3V6zM2.2 0C1 0 0 1 0 2.2c0 1.2 1 2.1 2.2 2.1 1.2 0 2.1-.9 2.1-2.1C4.3 1 3.4 0 2.2 0z"></path>
              </g>
            </svg>
          </a>
        </Link>
        <Link href={websiteMetaData.socialMedia.github}>
          <a>
            <svg
              className="fill-color-primary dark:fill-color-white w-[20px] cursor-pointer transform-all ease-in-out duration-500 hover:scale-125 focus:scale-125"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
            >
              <g clipPath="url(#clip0)">
                <path d="M9 .4c-5 0-9 3.9-9 8.8 0 3.9 2.6 7.2 6.2 8.4.4.1.6-.2.6-.4v-1.5c-2.5.5-3.1-1.2-3.1-1.2-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9 0 1.4.9 1.4.9.8 1.3 2.1.9 2.6.7.1-.6.3-1 .6-1.2-2-.2-4.1-1-4.1-4.3 0-1 .3-1.8.9-2.4-.1-.2-.4-1.1.1-2.4 0 0 .7-.2 2.4 1 .8-.2 1.5-.3 2.3-.3.8 0 1.5.1 2.2.3 1.7-1.2 2.5-1 2.5-1 .5 1.3.2 2.2.1 2.4.6.6.9 1.4.9 2.4 0 3.4-2.1 4.1-4.1 4.3.3.3.6.8.6 1.7v2.4c0 .2.2.5.6.4 3.6-1.2 6.2-4.5 6.2-8.4 0-4.9-4-8.8-9-8.8z"></path>
              </g>
            </svg>
          </a>
        </Link>
        <Link href={websiteMetaData.socialMedia.upwork}>
          <a>
            <svg
              className="fill-color-primary dark:fill-color-white w-[20px] cursor-pointer transform-all ease-in-out duration-500 hover:scale-125 focus:scale-125"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
            >
              <path d="M1 9c-.6 0-1 .4-1 1v14.1C0 30.3 4.7 35.6 10.8 36c5.9.3 10.9-3.8 12-9.3.6.7 1.1 1.4 1.7 2.1l-3.5 15c-.1.3 0 .6.2.8.2.3.5.4.8.4h5.1c.5 0 .9-.3 1-.8.6-2.6 1.6-6.7 2.4-10.4l1 .5c2.1 1.1 4.3 1.7 6.5 1.7 7.2 0 12.9-6.4 11.9-13.7-.7-4.9-4.5-9-9.3-10-5.6-1.2-11.1 1.6-13.4 6.4 0 0-.3.6-.5 1.2-1.6-2.9-2.6-5.8-3.1-7.9-.2-.8-.5-2.2-.5-2.3-.1-.4-.5-.7-.9-.7H17c-.6 0-1 .4-1 1v14.3c0 2.3-1.7 4.5-4.1 4.7-2.6.2-4.9-1.9-4.9-4.5V10c0-.6-.4-1-1-1H1zm37 10c2.8 0 5 2.2 5 5s-2.2 5-5 5c-2.2 0-4.3-1.3-5.7-2.5.5-2.2.9-3.7.9-3.8.5-2.2 2.5-3.7 4.8-3.7z"></path>
            </svg>
          </a>
        </Link>
        <div className="w-[1.1px] h-[8rem] bg-color-third rounded-tl-[1000px] rounded-tr-[1000px] justify-center self-center"></div>
      </SocialMediaLinks>
    </footer>
  );
};
export default Footer;
