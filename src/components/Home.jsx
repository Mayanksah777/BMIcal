import {Link} from 'react-router-dom'
const Home = ()=>{
 
    return(
      <div>
         <div>
            <Link to='/add'>Add</Link>
            <br/>
            <Link to='/bmi'>Bmi</Link>

         </div>
            
         
      </div>
    )

}

export default Home