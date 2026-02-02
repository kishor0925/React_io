import React from 'react'

const Testimonail = (props) => {

  return (
    <>
     <div className='col-12 col-md-4 col-lg-3 '>
        <div className='card text-center bg-dark text-white'>
            <img src = {props.image} className='card-img-center' style={{ height: "200px", width : "180px"  ,borderRadius: "50%", display : "block" , margin : "20px auto 0"}}/>
            <div className='card-body' >
                <h4 className='card-title fw-bold'>{props.name}</h4>
                <h6 className='text-muted'>{props.role}</h6>
                <p className='card-text'>{props.message}</p>
                <p className='card-text fw-bold'>⭐ {props.rating}</p>
            </div>
        </div>
     </div>

    </>
  )
}

export default Testimonail