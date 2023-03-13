import React from 'react'
import Logo from '../images/Logo.png';
const Home = () => {
  return (
    <div>
        <img src={Logo} style={{marginTop:'50px'}}/>
        <h1 style={{color:'#61b846'}}> SAYLANI WELFARE</h1>
        <h3 style={{color:'#024f9d',marginBottom:'50px'}}>ONLINE MARKET PLACE</h3>
        <a href="/signup"> <button type="button" class="btn btn-success">GET STARTED</button></a>
    </div>
  )
}

export default Home