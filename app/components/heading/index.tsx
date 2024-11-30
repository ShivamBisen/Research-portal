export const HeadingMajor = ({children}:{children:React.ReactNode}) => {
    return(
        <h1 className="text-3xl ">{children}</h1>
    )
}

export const HeadingCardTitle = ({children}:{children:React.ReactNode}) =>{
    return(
        <h6 className="text-lg font-bold line-clamp-2">
            {children}
        </h6>
    )
}
export const HeadingCardDescription = ({children}:{children:React.ReactNode}) => {
    return(
        <p className="text-sm text-gray-500 line line-clamp-2">
            {children}
        </p>

    )
}