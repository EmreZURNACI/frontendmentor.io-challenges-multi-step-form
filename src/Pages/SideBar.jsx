import React from 'react'
import DesktopSideBarImage from '../assets/images/bg-sidebar-desktop.svg'
import MobileSideBarImage from '../assets/images/bg-sidebar-mobile.svg'
import { useMediaQuery } from 'react-responsive'
function SideBar({ pageNumber }) {
    const isActive = pageNumber
    const isMobile = useMediaQuery({
        query: '(max-width:375px)'
    });
    const isDesktop = useMediaQuery({
        query: '(min-width: 376px) and (max-width: 1920px)'
    });
    return (
        <>
            {
                isMobile &&
                <div className='relative'>
                    <img src={MobileSideBarImage} alt='' />
                    <div className='absolute top-[calc(20%)] left-[calc(26%)]'>
                        <ul className='flex gap-x-4'>
                            <li className='list-none'>
                                <div className='flex items-center gap-x-4'>
                                    <div>
                                        <p className={"border  rounded-full py-1 px-3 flex items-center justify-center font-Ubuntu-Bold  " +
                                            (isActive === 1 ? " bg-LightBlue border-PastelBlue text-Marineblue" : "border-white text-white")}>1</p>
                                    </div>
                                </div>
                            </li>
                            <li className='list-none'>
                                <div className='flex items-center gap-x-4'>
                                    <div>
                                        <p className={"border  rounded-full py-1 px-3 flex items-center justify-center font-Ubuntu-Bold  " +
                                            (isActive === 2 ? " bg-LightBlue border-PastelBlue text-Marineblue" : "border-white text-white")}>2</p>
                                    </div>
                                </div>
                            </li>
                            <li className='list-none'>
                                <div className='flex items-center gap-x-4'>
                                    <div>
                                        <p className={"border  rounded-full py-1 px-3 flex items-center justify-center font-Ubuntu-Bold  " +
                                            (isActive === 3 ? " bg-LightBlue border-PastelBlue text-Marineblue" : "border-white text-white")}>3</p>
                                    </div>
                                </div>
                            </li>
                            <li className='list-none'>
                                <div className='flex items-center gap-x-4'>
                                    <div>
                                        <p className={"border  rounded-full py-1 px-3 flex items-center justify-center font-Ubuntu-Bold  " +
                                            (isActive === 4 ? " bg-LightBlue border-PastelBlue text-Marineblue" : "border-white text-white")}>4</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            }
            {
                isDesktop &&
                <div className='relative'>
                    <img src={DesktopSideBarImage} alt='' />
                    <div className='absolute top-[calc(5%)] left-[calc(15%)]'>
                        <ul className='flex flex-col'>
                            <li className='list-none'>
                                <div className='flex items-center gap-x-4'>
                                    <div>
                                        <p className={"border  rounded-full py-1 px-3 flex items-center justify-center font-Ubuntu-Bold  " +
                                            (isActive === 1 ? " bg-LightBlue border-PastelBlue text-Marineblue" : "border-white text-white")}>1</p>
                                    </div>
                                    <div className='py-3'>
                                        <p className='text-PastelBlue font-Ubuntu-Regular text-sm'>STEP 1</p>
                                        <p className='text-white font-Ubuntu-Bold tracking-wider'> YOUR INFO   </p>
                                    </div>
                                </div>
                            </li>
                            <li className='list-none'>
                                <div className='flex items-center gap-x-4'>
                                    <div>
                                        <p className={"border  rounded-full py-1 px-3 flex items-center justify-center font-Ubuntu-Bold  " +
                                            (isActive === 2 ? " bg-LightBlue border-PastelBlue text-Marineblue" : "border-white text-white")}>2</p>
                                    </div>
                                    <div className='py-3'>
                                        <p className='text-PastelBlue font-Ubuntu-Regular text-sm'>STEP 2</p>
                                        <p className='text-white font-Ubuntu-Bold tracking-wider'> SELECT PLAN    </p>
                                    </div>
                                </div>
                            </li>
                            <li className='list-none'>
                                <div className='flex items-center gap-x-4'>
                                    <div>
                                        <p className={"border  rounded-full py-1 px-3 flex items-center justify-center font-Ubuntu-Bold  " +
                                            (isActive === 3 ? " bg-LightBlue border-PastelBlue text-Marineblue" : "border-white text-white")}>3</p>
                                    </div>
                                    <div className='py-3'>
                                        <p className='text-PastelBlue font-Ubuntu-Regular text-sm'>STEP 3</p>
                                        <p className='text-white font-Ubuntu-Bold tracking-wider'> ADD-ONS    </p>
                                    </div>
                                </div>
                            </li>
                            <li className='list-none'>
                                <div className='flex items-center gap-x-4'>
                                    <div>
                                        <p className={"border  rounded-full py-1 px-3 flex items-center justify-center font-Ubuntu-Bold  " +
                                            (isActive === 4 ? " bg-LightBlue border-PastelBlue text-Marineblue" : "border-white text-white")}>4</p>
                                    </div>
                                    <div className='py-3'>
                                        <p className='text-PastelBlue font-Ubuntu-Regular text-sm'>STEP 4</p>
                                        <p className='text-white font-Ubuntu-Bold tracking-wider'> SUMMARY        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </>

    )
}

export default SideBar