import './header.css'
import logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"
import { useState } from 'react';
import {Link } from 'react-scroll'

const Header = () => {
  const mobile=window.innerWidth<=768 ? true : false;
  const [menuOpened,setMenuOpened]=useState(false)
  return (
    <div className="header" >
        <img src={logo} alt="" className='logo'/>
        {(menuOpened === false && mobile === true)? (
          <div  
          style={{backgroundColor:"var(--appColor)" 
          ,padding:'0.5rem',
          borderRadius:'5px'
        }}
        onClick={()=>setMenuOpened(true)}
        

          > <img src={Bars} alt="" style={{width:'1.5rem',height:'1.5rem'}}/></div>
        ): 
        <ul className='headerList'>
          <li >
            <Link
              onClick={()=>setMenuOpened(false)}
              activeClass='active'
              to='Hero'
              span={true}
              smooth={true}
              >Home
            </Link>
          </li>
          <li >
            <Link
              onClick={()=>setMenuOpened(false)}
              to='Programs'
              span={true}
              smooth={true}
              >Programs
            </Link>
          </li>
          <li >
            <Link
              onClick={()=>setMenuOpened(false)}
              to='Reasons'
              span={true}
              smooth={true}
              >Reasons
            </Link>
          </li>
          <li >
            <Link
              onClick={()=>setMenuOpened(false)}
              to='Plans'
              span={true}
              smooth={true}
              >Plans
            </Link>
          </li>
          <li >
            <Link
              onClick={()=>setMenuOpened(false)}
              to='Testi'
              span={true}
              smooth={true}
              >Testimonials
            </Link>
          </li>
         
      </ul>
      }
    </div>
  )
}

export default Header