import { useState } from "react"
import { Background } from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  let heroData = [
    {text1:"Paint your",text2:"Dreams"},
    {text1:"abc",text2:"def"},
    {text1:"hij",text2:"kml"},
  ]

  const [heroCount,setHeroCount] = useState(2);
  const [playStatus,setPlayStatus] = useState(false);
  return (
    <div>
      <Background heroCount={heroCount} />
      <Navbar/>
    </div>
  )
}

export default App