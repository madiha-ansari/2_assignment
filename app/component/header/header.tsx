import React from 'react'

const Header = () => {
  return (
    <div style={{height:"80px",background:" sandybrown",paddingTop:"30px",paddingLeft:"280px"}}>
      <nav>
              <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
                  <li style={{ margin: '0 15px',paddingRight:"90px" }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li> 
                  <li style={{ margin: '0 15px',paddingRight:"90px" }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
                  <li style={{ margin: '0 15px',paddingRight:"90px" }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Services</a></li>
                  <li style={{ margin: '0 15px' }}><a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
              </ul>
            </nav> 
     
    </div>
  )
}

export default Header
