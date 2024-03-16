import React from 'react'
import { useMediaQuery } from 'react-responsive';
function Container({ children }) {
  const isDesktop = useMediaQuery({
    query: '(min-width: 376px) and (max-width: 1920px)'
  });
  return (
    <div className={"w-screen h-screen flex items-center " + (isDesktop ? "flex-row justify-center" : "flex-col ")}>
      {
        children
      }
    </div>
  )
}

export default Container