import React from 'react'
import NavBar from './NavBar'

const containerLayout = {
  width: '90%',
  margin: '100px auto',
}

function Layout({children}) {
  return (
    <div >
      <NavBar/>
      <div style={containerLayout}>{children}</div>
    </div>
  )
}

export default Layout