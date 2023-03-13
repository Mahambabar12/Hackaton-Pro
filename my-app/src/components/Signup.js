import React, { useState , useEffect} from "react";
import axios from 'axios'
import api from './axiosapi'
const Signup = () => {
  const [state, setState] = useState({
    name: "",
    contact:"",
    email:"",
    password:"",
  });

  return (
    <div>
        <h1 style={{color:'#61b846',marginTop:'50px'}}> SAYLANI WELFARE</h1>
        <h3 style={{color:'#024f9d'}}>ONLINE MARKET PLACE</h3>
        <br/>
        <form>
      <input type="text" placeholder='Username' style={{border:'0', borderBottom:'1px solid gray',marginBlockStart:'30px', width:'27%'}} required /><br/>
      <input type="text" placeholder='Contact' style={{border:'0', borderBottom:'1px solid gray',marginBlockStart:'30px', width:'27%'}} required/><br/>
      <input type="text" placeholder='Email' style={{border:'0', borderBottom:'1px solid gray',marginBlockStart:'30px', width:'27%'}} required/><br/>
      <input type="text" placeholder='Password' style={{border:'0', borderBottom:'1px solid gray',marginBlockStart:'30px', width:'27%'}}required />
      <br/><div class="form-check" style={{marginTop:'50px'}}>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1" style={{marginRight:'40px'}}>
    Sale
  </label>
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Purchase
  </label>
</div>
      <br/><a href="/login"> <button type="button" class="btn btn-success" style={{marginBlockStart:'70px'}} >SIGN UP</button></a>
</form>
    </div>
  )
}

export default Signup