import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom";
import JoinMeeting from "./pages/JoinMeeting";
import NewMeeting from "./pages/NewMeeting";


function App() {

  return (
    <>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/new" element={<NewMeeting/>} /> 
        <Route path="/join" element={<JoinMeeting/>}/>
      </Routes>
    </>
  )
}

export default App
