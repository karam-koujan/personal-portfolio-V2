import Link from "next/link";
import Logo from "../../logo/";


const Header = ({nav})=>{
	return(
		<header>
		<nav>
				<Logo/>
			  {nav.map((navItem,idx)=>(
			  <Link href={`/#{navItem}`} key={idx}>
                              <a>
				 {navItem}
                              </a>
                               </Link>
			  ))}
	         </nav>
 		</header>
	)
}
export default Header ;
