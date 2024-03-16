import React from 'react'
import { useMediaQuery } from 'react-responsive'
function ButtonContainer({ children }) {
    const isMobile = useMediaQuery({
        query: '(max-width:375px)'
    });
    return (
        <div className={(React.Children.count(children) === 1 ? "justify-end" : "justify-between") + "  flex  z-10 " + (isMobile ? "absolute top-[calc(100%)] px-2 right-0 w-full " : "mt-12 w-[calc(75%)]")}>
            {
                children
            }
        </div>
    )
}

export default ButtonContainer