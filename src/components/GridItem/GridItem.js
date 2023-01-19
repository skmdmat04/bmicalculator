import './GridItem.css'
import downImage from './down.png'
import upImage from './up.png'
export const GridItem=({data})=> {
  console.log(data)

 
  return (
      <div className='main' style={{backgroundColor:data.color}}>
         <div className='gridIcon'>
            <img src={data.icon==='up'?upImage:downImage} alt='' width='30'/>
        </div>
        <div className='gridTitle'>{data.title}</div>
       {
        data.yourbmi && <div className='result'> your BMI is {data.yourbmi}</div>
       }
       
        <div className='gridInfo'>BMI is between <strong>{data.bmi[0]}</strong> and <strong>{data.bmi[1]}</strong> </div>
       
      
      </div>
       
  )
}

