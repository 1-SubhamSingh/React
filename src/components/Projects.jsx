import aboutImg from "../assets/Miguel.jpg"
const Projects = () => {
  return (
    <div className='pb=4'>
        <h2 className='my-20 text-center text-4xl'>Projects</h2>
        <div className='mb-8  flex flex-wrap lg:justify-center'>
           
            <div className='w-full lg:w-1/4'>
            <img className="lg:px-16 pb-10  md:px-60 pb-10 px-14 pb-10" src={aboutImg} alt="Project1"/>
        
        </div>
        <div className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold'> Weather App - 
             <span className='text-sm text white-100'> ReactJs, NextJs</span></h6>
            <p className='mb-4 text-neutral-400'>Built a weather app using weather API.</p>
        </div>
     </div>

     <div className='mb-8  flex flex-wrap lg:justify-center'> 
            <div className='w-full lg:w-1/4'>
            <img className="lg:px-16 pb-10  md:px-60 pb-10 px-14 pb-10" src={aboutImg} alt="Project2"/>
        </div>
        <div className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold'>Unit Converter -
             <span className='text-sm text white-100'> ReactJs, NextJs</span></h6>
            <p className='mb-4 text-neutral-400'>Built an unit converter web application which converts various units.</p>
        </div>
     </div>
      </div>

  )
}

export default Projects
