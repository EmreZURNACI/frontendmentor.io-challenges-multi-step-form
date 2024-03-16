import React from 'react'
import Container from './Container'
import SideBar from './SideBar'
import AddOnsForm from './AddOnsForm'
function AddOns() {
  return (
    <Container>
      <SideBar pageNumber={3} />
      <AddOnsForm />
    </Container>
  )
}

export default AddOns