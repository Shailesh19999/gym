import React from 'react'
import data from './Data'

const Home = () => {
  return (
    <div>
    <h1 className="heading">Runner's Workout</h1>
    <div className="container " >
        <div className="row">
        {
            data.map((value)=>{
                return(
                    <>
                    <div className="col-md-4">
            <div class="card" style={{width: "30rem", height:"40px", objectFit: "contain", boxShadow: "0 2px 5px 0 rgba(0,0,0,.2)"}}>
  <img src={value.img} alt="MYimg" className='effect'/>
  <p className='text'>{value.position}</p>
  <div class="card-body">
   
  </div>
</div>
            </div>
                    </>
                )
            })
        }
          
        </div>
    </div>
      
    </div>
  )
}

export default Home
