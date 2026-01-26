import React, { useState } from "react";


const Course = (props) => {


  const [buynow, setbuynow] = useState("Get it now");
  const [discount, setdiscount] = useState(props.price);

  function discounts()
  {
    if(props.price > 500)
    {
      setdiscount(() => props.price / 2) 
    }
    else if(props.price >= 300)
    {
      setdiscount(() =>  props.price - 100);
    }
    else
    {
      setdiscount(() =>  props.price - 50);
    }
    
  }
  


  function purchased()
  {
    setbuynow("successfully purchased..");
   
  }

    return (
      props.name && <div className="col-12 col-md-6 col-lg-3 ">
        <div
          className="card h-100 text-center p-5 bg-dark  text-white position-relative"
        >
          <span className="position-absolute top-0 end-0 badge rounded-pill bg-success m-2">5k+ purchased</span>
          <img
            src={props.img}
            className="card-img-top mx-auto"
            style={{ height: "100px", width: "200px", objectFit: "contain" }}
            alt={props.name}
          />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.content}</p>
            <button  className="btn btn-danger"   onClick={discounts} disabled = {discount !== props.price || buynow !== "Get it now"}>Get Discount</button>
             <p className="card-text">price :  ₹{discount}</p>
            <button disabled={buynow !== "Get it now" } className="btn btn-danger" onClick={purchased}>Purchase</button>
            <p>{buynow}</p>
          </div>
        </div>
      </div>
    );
  }






export default Course;
