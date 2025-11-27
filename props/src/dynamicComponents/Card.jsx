// import React from "react";

// export default function Card({data}) {
  
//   return (
//     <>

    {/* this is uased for data */}
{/* //     // <div className="card" style={{ width: "18rem" }}>
//     //   <img src={data[0].image} className="card-img-top" alt="" />
//     //   <div className="card-body">
//     //     <h5 className="card-title">{data[0].name}</h5>
//     //     <p className="card-text">{data[0].desc}</p>
//     //     <hr/>
//     //     <p className="review-label">Reviews</p>
//     //   <div className="stars">
//     //     ⭐⭐⭐⭐⭐ <span className="rating">5.0 (257)</span>
//     //   </div>
//     //  </div>
//     // </div>

//     // <div className="card" style={{ width: "18rem" }}>
//     //   <img src={data[1].image} className="card-img-top" alt="" />
//     //   <div className="card-body">
//     //     <h5 className="card-title">{data[1].name}</h5>
//     //     <p className="card-text">{data[1].desc}</p>
//     //     <hr/>
//     //     <p className="review-label">Reviews</p>
//     //   <div className="stars">
//     //     ⭐⭐⭐⭐⭐ <span className="rating">5.0 (257)</span>
//     //   </div>
//     //  </div>
//     // </div> */}




{/* this is using map  */}


``
import React from "react";

export default function Card({data}) {
    return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 cards per row
          gap: "20px",
          padding: "20px",
        }}
      >

{data.map((item,index)=>{
  return(
   <div className="card" style={{ width: "18rem" }} key={index}>
   <img src={item.image} className="card-img-top" alt="" />
   <div className="card-body">
     <h5 className="card-title">{item.name}</h5>
     <p className="card-text">{item.desc}</p>
     <hr/>
     <p className="review-label">Reviews</p>
   <div className="stars">
     ⭐⭐⭐⭐⭐ <span className="rating">5.0 (257)</span>
   </div>
 </div>
 </div>
  ) 
})}
</div>
</>

  )
}


