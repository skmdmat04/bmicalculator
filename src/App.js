import {useState} from 'react'
import './App.css';
import {levels,calculatebmi} from './components/item'
import {GridItem} from './components/GridItem/GridItem'
import leftArrowImage from './assets/leftarrow.png'
function App() {
  const [height,setHeight]=useState('');
 const [weight,setWeight]=useState('');
 const [res,setRes]=useState('');
 const heightHandler=(e)=>{
  setHeight(e.target.value)
 }
 const weightHandler=(e)=>{
setWeight(e.target.value)
 }
 const solution=()=>{
  if(parseInt(height)>0 && parseInt(weight)>0){
  setRes(calculatebmi(height,weight))
  }
  else{
    alert('Enter valid input')
  }
 }
 const handleBackButton=()=>{
  setRes('')
setHeight('')
setWeight('')
 }
 console.log(levels)
  return (
    <div className='main'>
      <div className='container'>
        <div className='leftSide'>
          <h1>Calculate your BMI</h1>
          <p>BMI is the acronym for Body Mass Index, a parameter adopted by the World Health Organization to calculate the ideal weight of each person. BMI classification can help identify obesity or malnutrition in children, adolescents, adults and the elderly. Corresponds to the BMI classified as eutrophic for adults aged 20 to 59 years:</p>
          <input type={'text'} value={height} onChange={heightHandler} placeholder='Enter your height in cm' disabled={res?true:false}/>
          <input type={'text'} value={weight} onChange={weightHandler} placeholder='Enter your weight in kg' disabled={res?true:false}/>
          <button onClick={solution} >calculte</button>
        </div>
        <div className='rightSide'>
        {!res &&
        <div className='grid'>
        {
          levels.map((item,key)=>(
            <GridItem key={key} data={item}/>
          ))
        }
         </div>
         }
        {res &&
        <div className='rightBig'>
          <div className='rightArrow' onClick={handleBackButton}>
            <img src={leftArrowImage} alt='back' width={25}/>
          </div>
         <GridItem data={res}/>
        </div>
        }
        </div>
      </div>
    </div>
  );
}

export default App;
