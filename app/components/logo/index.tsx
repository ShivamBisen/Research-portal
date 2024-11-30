import React from "react"

export const Logo = ({children}:{children:React.ReactNode}) =>{
    return(
        <h1 className="text-black text-xl" >{children}</h1>
    )
}