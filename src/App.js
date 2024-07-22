
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {
  const [principle,setPrinciple]=useState(0);
  const [rate,setRate]=useState(0);
  const [year,setYear]=useState(0);
  const [interest,setInterest]=useState(0);

// state to store wheather input field values are valid
const [isPrincipleValid,setisPrincipleValid]=useState(true)
const[isRateValid,setisRateValid]=useState(true)
const[isYearValid,setisYearValid]=useState(true)


  const validate=(e)=>{
    // console.log(e.target.name);
    // console.log(e.target.value);
    const {name,value}=e.target;
    if(!! value.match(/^[1-9][0-9]*\.?[0-9]*$/)){
      if(name==='principle'){
        setPrinciple(value)
        setisPrincipleValid(true)
      }
      else if(name==='interestRate'){
        setRate(value)
        setisRateValid(true)
      }
      else{
        setYear(value)
        setisYearValid(true)
      }
    }
    else{
      if(name==='principle'){
        setPrinciple(value)
        setisPrincipleValid(false)
      }
      else if(name==='interestRate'){
        setRate(value)
        setisRateValid(false)
      }
      else{
        setYear(value)
        setisYearValid(false)
      }

    }
    
  }
  const handleCalculate=(e)=>{
  e.preventDefault()
  console.log("principle amount entered",principle);
  console.log("interest rate entered",rate);
  console.log("total year entered",year)
  const result=((principle*rate*year)/100)
  setInterest(result)
  } 
  const resetvalues=()=>{
    setInterest(0);
    setYear(0);
    setPrinciple(0);
    setRate(0);
    setisRateValid(true)
    setisRateValid(true)
    setisYearValid(true)
  }

  return (
    <>
    <div style={{backgroundColor:"black",height:"100vh",}} className='d-flex justify-content-center align-items-center'>
      <div style={{backgroundColor:"white",width:"450px",height:"550px",borderRadius:"10px"}}>
        <h2 style={{marginLeft:"26px",marginTop:"18px",color:"brown"}}>Simple Interest Application</h2>
        <p  className=' mt-3 d-flex justify-content-center'>Calculate your simple interest easily</p>
        <div style={{marginLeft:"16px",height:"130px", width:"420px",backgroundColor:"orange",borderRadius:"10px"}} 
        className='p-3 mt-3 rounded shadow d-flex justify-center align-items-center flex-column'>
          <h2 className='fw-bold'>&#x20B9;{interest}</h2>
          <p>Total Simple Interest</p>
          </div>
          <form onSubmit={handleCalculate}>
       <div className=' p-2 mt-2 d-flex justify-content-center align-items-center'>
       <TextField id="outlined-basic" label="principle amount" variant="outlined" className='w-100' name="principle"
         value={principle|| ""}   onChange={(e)=>validate(e)} />

         {
          !isPrincipleValid &&
          <p className='text-danger'>Invalid Input</p>
         }
       </div>

       <div className=' p-2 mt-2 d-flex justify-content-center align-items-center'>
       <TextField id="outlined-basic" label="Rate of interest in %" variant="outlined" className='w-100' name="interestRate"
        value={rate|| ""}    onChange={(e)=>validate(e)}/>

         {
          !isRateValid &&
          <p className='text-danger'>Invalid Input</p>
         }
       </div>
       
       <div className=' p-2 mt-1 d-flex justify-content-center align-items-center'>
       <TextField id="outlined-basic" label="Total years" variant="outlined" className='w-100' name="totalYear"
         value={year|| ""}   onChange={(e)=>validate(e)} />
         {
          !isYearValid &&
          <p className='text-danger'>Invalid Input</p>
         }
       </div>

       <div className='mt-1 d-flex justify-content-evenly'>
       <Button variant="contained" color="success" type="submit"
       disabled={isPrincipleValid && isRateValid && isYearValid? false:true}>
         CALCULATE
        </Button>
        <Button variant="outlined" color="error" onClick={resetvalues}>
        RESET
       </Button>
       </div>

          </form>
      </div>

    </div>
    
    </>
  )
}

export default App