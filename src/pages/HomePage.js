import React, { useEffect, useState } from 'react'
import WithSubnavigation from '../components/Navigation'
import httpClient from '../utils/httpClient'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const [travels, setTravels] = useState([])
  const [weather, setWeather] = useState([])
  const [user, setUser] = useState(null)

  const navigation = useNavigate()

  useEffect(()=>{
      getData()
  },[])

  const getData = async () => {
    const {data} = await httpClient.get("/dashboard")
    console.log(data)
  }

  const handleLogout = async () => {
    const {data} = await httpClient.get("/logout")
    navigation("/login")
  }

  return (
    <div>
        <WithSubnavigation/>
        <h1>Strona główna</h1>

        <button onClick={()=>handleLogout()}>Wyloguj</button>
    </div>
  )
}

export default HomePage 