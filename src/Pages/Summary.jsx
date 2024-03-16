import React from 'react'
import Container from './Container'
import SideBar from './SideBar'
import SummaryForm from './SummaryForm'

function Summary() {
    return (
        <Container>
            <SideBar pageNumber={4} />
            <SummaryForm />
        </Container>
    )
}

export default Summary