import { useRef } from 'react'
import './join.css'
import emailjs from 'emailjs-com'

const Join = () => {
    const form=useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mkseaft', 'template_89p8wam', form.current, 'sEry-5Qknv-raUu_8')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className='join' id='Join'>
        <div className="left-join">
            <hr />
            <div>
                <span className='stroke-text'>ready to</span>
                <span>level up</span>

            </div>
            <div>
                <span >your body</span>
                <span className='stroke-text'>with us ?</span>

            </div>
        </div>
        <div className="right-join">
            <form ref={form} className='email-container' onSubmit={sendEmail}>
                <input type="email" name='user' placeholder='Enter your Email Address '/>
                <button className='btn btn-join'>
                   Join now
                </button>

            </form>
            
        </div>
    </div>
  )
}

export default Join