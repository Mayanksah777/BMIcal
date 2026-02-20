import {Routes , Route} from 'react-router-dom'
import Add from'./components/Add.jsx'
import Bmi from  './components/Bmi.jsx'
import Home from './components/Home.jsx'
const App=()=>{
return(
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path="/add" element={<Add />} />
    <Route path='/bmi' element={<Bmi />} />
    </Routes>
)


}

export default App