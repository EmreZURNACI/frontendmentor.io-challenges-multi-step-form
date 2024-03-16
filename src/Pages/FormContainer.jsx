import React from 'react'
import { useMediaQuery } from 'react-responsive';
function FormContainer({ children }) {
    const isDesktop = useMediaQuery({
        query: '(min-width: 376px) and (max-width: 1920px)'
    });
    const isMobile = useMediaQuery({
        query: '(max-width:375px)'
    });
    return (
        <>
            {
                isDesktop &&
                <div className='flex flex-col h-[calc(60%)] w-[calc(35%)] justify-center  ps-[calc(90px)]'>
                    {
                        children
                    }
                </div>
            }
            {
                isMobile &&
                <div className='flex flex-col absolute top-[calc(10%)] left-0 p-4'>
                    <div className='bg-white rounded-xl p-6'>
                        {
                            children
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default FormContainer