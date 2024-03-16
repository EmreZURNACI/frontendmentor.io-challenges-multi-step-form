import React from 'react'
import Container from './Container'
import SideBar from './SideBar'
import FormContainer from './FormContainer'
import Thank from '../assets/images/icon-thank-you.svg'
function Thanks() {
    return (
        <Container>
            <SideBar pageNumber={4} />
            <FormContainer>
                <div className='flex justify-center items-center mb-8'>
                    <img src={Thank} alt="Thank" />
                </div>
                <div>
                    <p className='text-4xl font-Ubuntu-Bold text-MarineBlue mb-2 text-center'>Thank you!</p>
                </div>
                <div className='flex justify-center items-center'>
                    <p className='font-Ubuntu-Regular text-CoolGray mb-2 text-center w-[calc(85%)] text-lg'>
                        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,please feel free to email us at support@loremgaming.com.
                    </p>
                </div>
            </FormContainer>
        </Container>
    )
}

export default Thanks