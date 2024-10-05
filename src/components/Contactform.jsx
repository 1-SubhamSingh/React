import React from 'react'
import './Contactform.css';
const Contactform = () => {
  return (
   <section className="contact section" id="contact">
    <h2 className="section__title mt-20 text-4xl text-center">Contact Me</h2>
    <h2 className="section__subtitle  my-5 text-sm text-center">Get in touch</h2>
    <div className='mb-8  flex flex-wrap '>
    <div className='lg:w-1/2 w-full '>
     <h3 className=' text-xl pb-4 text-center'>Talk to me</h3>
     <div className="contact__info flex flex-col gap-4 ">
        <div className="contact__card text-center  p-2 lg:mr-20 lg:ml-20">
            <i className="bx bxl-mail-send contact__card-icon"></i>
            <h3 className="contact__card-title">Email</h3>
            <div className="contact__card-data  overflow-hidden">subhamsingh20202222@gmail.com</div>
            <a href="mailto:subhamsingh20202222@gmail.com" className="write contact__button ">Write me <i className="bx bx-right-arrow-alt contact__button-icon "> </i></a>
        </div>

        <div className="contact__card text-center p-2 lg:mr-20 lg:ml-20">
            <i className="bx bxl-whatsapp contact__card-icon h-16 w-16"></i>
            <h3 className="contact__card-title">Whatsapp</h3>
            <span className="contact__card-data">+91 7439437313</span><br />
            <a href="https://web.whatsapp.com/send?phone=+917439437313" className="write contact__button">Write me<i className="bx bx-right-arrow-alt contact__button-icon"> </i></a>
        </div>

        <div className="contact__card text-center p-2 lg:mr-20 lg:ml-20">
            <i className="bx bx contact__card-icon"></i>
            <h3 className="contact__card-title">Instagram Direct</h3>
            <span className="contact__card-data">@risab551</span><br/>
            <a href="https://ig.me/m/risab551?ref=my_referral_param" className="write contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"> </i></a>
        </div>
     </div>
    </div>



    <div className='lg:w-1/2 w-full justify-center'>
        <h3 className='lg:pt-0 pt-9 pb-4 text-xl text-center'>Write your message</h3>
        <form className='flex flex-col gap-4  items-center justify-center'>
              <input required="required" placeholder="Your Name here...." className="input" name="text" type="text"/>
            <input required="required" placeholder="Your Email here...." className="input" name="text" type="email"/>
            <div className="contact__form-div text-center">
                {/* <label className='contact__form-tag'>Message</label> */}
                <textarea name="Message"  className="contact__form-input input" required="required" placeholder='Write your message here....'/>
            </div>
            {/* <div className="contact__form-div text-center">
                <label className='contact__form-tag '>Name </label>
                <input type="text" className="contact__form-input bg-inherit" placeholder="Insert your name" />
            </div> */}
            {/* <div className="contact__form-div text-center">
                <label className='contact__form-tag'>Email </label>
                <input type="email" className="contact__form-input bg-inherit" placeholder="Insert your email" />
            </div> */}

 <button className="button ">Send </button>
        </form>
       
    </div>
     

    </div>
   </section>
  )
}

export default Contactform
