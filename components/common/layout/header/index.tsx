import Link from "next/link";
import Logo from "../../logo/";
import Toggle from "../../dark-light-mode/themeToggle.tsx"

const Header = ({nav})=>{
	return(
		<header>
		<nav className="mx-auto w-full max-w-screen-xl flex justify-between items-center py-5">
			<Logo/>
				<div className="flex gap-12 items-center">	
			  {nav.map((navItem,idx)=>(
			  <Link href={`/#${navItem}`} key={idx}>                               
<a className="text-color-secondary dark:text-color-third font-thin  uppercase text-[0.8rem] tracking-widest relative before:content-[''] after:content-[''] before:w-0  after:w-0 before:h-[6px] after:bg-color-secondary after:absolute after:h-[6px] before:bg-color-secondary before:absolute before:bottom-[-100%] after:bottom-[-100%] before:left-[50%] before:right-[50%] after:left-[50%] after:right-[50%] before:rounded-[20px] after:rounded-[20px] before:transition-all before:ease-in-out before:duration-500  after:transition-all after:ease-in-out after:duration-500  hover:before:w-[100%] hover:after:w-[50%] hover:before:left-0 " >







	  


	  



				 {navItem}
                              </a>
                               </Link>
		     ))}
                            <Toggle/>
			       </div>
	         </nav>
 		</header>
	)
}
export default Header ;
