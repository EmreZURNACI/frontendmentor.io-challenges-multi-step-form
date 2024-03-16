import React from 'react'
import Container from './Container'
import SideBar from './SideBar'
import SelectPlanForm from './SelectPlanForm'
function SelectPlan() {
    return (
        <Container>
            <SideBar pageNumber={2} />
            <SelectPlanForm />
        </Container>
    )
}

export default SelectPlan