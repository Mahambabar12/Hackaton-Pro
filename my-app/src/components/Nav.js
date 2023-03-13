import React from 'react'
import cart from '../images/cart.png'
import location from '../images/location.png'
import bell from '../images/bell.png'
const Nav = () => {
  return (
    <div className='container'>
         <nav style={{display:'flex',marginRight:'250px'}}> 
        <a class="nav-link" href="#"> 
        <h1 style={{color:'#61b846'}} className="h4"> SAYLANI WELFARE</h1>
        <h3 style={{color:'#024f9d'}}className="h6">ONLINE MARKET PLACE</h3><span class="sr-only">(current)</span></a>
        <a class="nav-link" href="/cart"><img src={cart} style={{width:"40px",height:'40px',marginLeft:'400px'}}></img></a>
        <a class="nav-link" href="#"><img src={location} style={{width:"40px",height:'40px'}}></img></a>
<a class="nav-link" href="#"><img src={bell} style={{width:"40px",height:'40px'}}></img></a>
</nav>
</div>
  )
}

export default Nav