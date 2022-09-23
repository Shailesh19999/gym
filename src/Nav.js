import React from 'react'

const Nav = () => {
  return (
    <div>
    <nav className='navbar'>
        <div className="container">
            <div className="logo">
            HF
            </div>
            <div className="item">
      
             <ul>
             <li>
              <div className="icon"><i class="fa-solid fa-video" id='icon'></i></div>
              <div className="name">Home</div>
             </li>
             <li>
              <div className="icons"><i class="fa-regular fa-credit-card"></i></div>
              <div className="name">MEMBERSHIPS</div>
             </li>
             <li>
              <div className="icon"><i class="fa-sharp fa-solid fa-person-running"></i></div>
              <div className="name">Plans</div>
             </li>
             <li>
              <div className="icon"> <i class="fa-solid fa-money-check"></i></div>
              <div className="name">More</div>
             </li>
        
            
                </ul>
            </div>
            <div className="loginBtn"><span><i class="fa-solid fa-user"></i></span> Login </div>

            
        </div>
    </nav>
    

      
    </div>
  )
}

export default Nav
