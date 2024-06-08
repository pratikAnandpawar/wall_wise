import { useState } from "react"
import { Background } from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import Ticker from "./Components/Ticker/Ticker";
import Service from "./Components/Service/Service";

const App = () => {
  let heroData = [
    {text1:"We Paint your",text2:"Dreams"},
    {text1:"abc",text2:"def"},
    {text1:"hij",text2:"kml"},
  ]

  const [heroCount,setHeroCount] = useState(2);
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Ticker/>
      <Service/>
      <Footer/>
    </div>
  )
}

export default App