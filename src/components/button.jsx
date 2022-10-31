import React from 'react'



// Link

const Button = ({link,content}) => {
  return (
    
        <div className='w-5/6 mx-auto'>
            <button className='w-full bg-slate-300 rounded-lg p-8 mt-4 hover:bg-slate-400'>
            <a href={link}>{content}</a>
            </button>
        </div>
    
  )
}

export default Button