import React from 'react'

const Experience = () => {
  return (
    <div className='pb=4'>
        <h2 className='my-20 text-center text-4xl'>Experience</h2>
        <div className='mb-8  flex flex-wrap lg:justify-center'>
           
            <div className='w-full lg:w-1/4'>
        <p className='mb-2 text-sm text-neutral-400'>2023-Present</p>
        </div>
        <div className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold'> Campus Ambassador - 
             <span className='text-sm text white-100'> Geeks for Geeks</span></h6>
            <p className='mb-4 text-neutral-400'>Building coding culture in college campus.</p>
        </div>
     </div>

     <div className='mb-8  flex flex-wrap lg:justify-center'>
           
            <div className='w-full lg:w-1/4'>
        <p className='mb-2 text-sm text-neutral-400'>2023-Present</p>
        </div>
        <div className='w-full max-w-xl lg:w-3/4'>
            <h6 className='mb-2 font-semibold'>Member - 
             <span className='text-sm text white-100'> DeCoders</span></h6>
            <p className='mb-4 text-neutral-400'>Building coding culture in college campus.</p>
        </div>
     </div>
      </div>

  )
}

export default Experience
