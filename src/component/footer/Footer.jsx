import './footer.css'
import github from '../../assets/github.png'
import insta from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from"../../assets/logo.png"
const Footer = () => {
  return (
    <div className='footer-container' id='Footer'>
      
        <hr />
        <div className='footer'>
            <div>
                <img src={github} alt="" />
                <img src={insta} alt="" />
                <img src={linkedin} alt="" />

            </div>
            <img src={logo} alt="" />
        </div>
        <div className="blur blur-footer1"></div>
        <div className="blur blur-footer2"></div>

    </div>
  )
}

export default Footer