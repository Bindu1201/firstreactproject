import React , {useState, useMemo } from "react";


function Counter()
{

    const [counterone,setCounterone] = useState(0);
    const [countertwo,setCountertwo] = useState(1);
    console.log("CounterOneInitial:",counterone)


   const firstCounter = () =>
   {
    setCounterone(counterone + 1)
    console.log("CounterOne:",counterone)
   } 

   const secondCounter = () =>
    {
     setCountertwo(countertwo + 1)
     console.log("CounterTwo:",countertwo)
    } 

    const isEven = useMemo(() => {
        let i=0
        while(i<30000){
            console.log("i :",i)
            i++
        }

        return counterone %2 === 0
    } , [counterone])

   return(
    <div>
    <div>
        <button onClick={firstCounter}>Count One - {counterone}</button>
        <span> {isEven ? 'Even' : 'Odd'}</span>
    </div>
    <div>
        <button onClick={secondCounter}>Count Two - {countertwo}</button>
    </div>
    </div>
 )

}
export default Counter;