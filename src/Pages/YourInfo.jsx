import React from 'react'
import Container from './Container'
import SideBar from './SideBar'
import PersonelInfoForm from './PersonelInfoForm'
function YourInfo() {
    return (
        <Container>
            <SideBar pageNumber={1} />
            <PersonelInfoForm />
        </Container>
    )
}

export default YourInfo