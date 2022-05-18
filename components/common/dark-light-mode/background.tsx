import React from "react";
interface childrenI {
	children : React.ReactNode;
}


const Background = ( { children }:childrenI ) =>
{
    return (
        <body className="bg-color-white dark:bg-color-primary transition-all">
            {children}
        </body>
    )
}

export default Background;
