import React from 'react'
import Grocery from '../images/Grocery.png'
import Nav from './Nav'
import Slider from './Slider'
const Shop = () => {
  return (
    <div>
      <Nav/>
      <img src={Grocery} style={{width:'70%', height:'50%'}}></img>
      <br/><br/>
      <h3>Short by category</h3>
      <input type={'search'} style={{width:'60%', borderRadius:'20px'}} placeholder='Search'/>
      <br/><br/>
      <p style={{fontWeight:"110px"}}>Popular Items</p>
      <Slider/>
    </div>
  )
}

export default Shop