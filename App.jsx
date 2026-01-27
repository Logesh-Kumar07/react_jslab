import React ,{useEffect, useState}from 'react'

function App() {
  const[greetings,setGreetings]=useState("")
  useEffect(()=>{
    let hours=new Date().getHours().toString().padStart(2,'0');
    let Minit=new Date().getMinutes().toString().padStart(2,'0')
    let Seconds=new Date().getSeconds().toString().padStart(2,'0')
    if(hours<12){
      setGreetings(`Good morning ${hours}:${Minit}:${Seconds}`)
    }
    else if(hours>=12 && hours<=17){
      setGreetings(`Good afternoon ${hours}:${Minit}:${Seconds}`)
    }
    else if(hours>=17 && hours<=19){
      setGreetings(`Good evening ${hours}:${Minit}:${Seconds}`)
    }
  },[])
  return (
    <div><h1>{greetings}</h1></div>
  )
}

export default App