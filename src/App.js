import Header from "./Component/Header";
import LoginForm from "./Component/Login";
import Home from "./Component/Home";
import WeatherForecast from "./Component/WeatherFrocast";
import CropCost from "./Component/CropCost";
import Fertilizers from "./Component/Fertilizers";
import { Route, Routes } from "react-router-dom";

const App=()=>(
  <div className="app-container">
  <div className="responsive-container">
    <Header />
    <div className="app-body">
      <Routes>
        <Route exact path="/Login" element={<LoginForm/>} />
        <Route  path="/" element={<Home/>} />
        <Route exact path="/Weather" element={<WeatherForecast/>} />
        <Route exact path="/CropCost" element={<CropCost/>} />
        <Route exact path="/Fertilizers" element={<Fertilizers/>} />
      </Routes>
    </div>
  </div>
</div>
)
export default App