import * as React from "react";
import Header from "./header";
import Footer from "./footer";

interface childrenI{
	children:React.ReactNode,
	nav : string[]
}

const Layout = ({children,nav}:childrenI)=>{
	return(
		<React.Fragment>
			<Header nav={nav}/>
			<main>
                           {children}
			</main>
			<Footer/>		
		</React.Fragment>
	)
}
export default Layout
