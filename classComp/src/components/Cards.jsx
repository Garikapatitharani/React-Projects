import React, { Component } from "react";
class Cards extends Component{
    render(){
        return(
           <div>
                <h1 style={{margin:'50px'}}>Acheivers IT Edge</h1><br />

                <div style={{display:'flex', justifyContent:'space-evenly'}}>
                    <div style={{textAlign:'center',width:'300px'}}>
                        <img style={{width:'100px', height:'90px'}} src="../src/assets/tick.jpg" alt="" />
                        <h3>Real Time Doubt Resolution</h3>
                        <p>With Live Instructors</p>
                    </div>
                    <div style={{textAlign:'center',width:'300px'}}>
                        <img style={{width:'100px',marginTop:'15px'}} src="../src/assets/infinity.png" alt="" />
                        <h3>Real Time Doubt Resolution</h3>
                        <p>With Live Instructors</p>
                    </div>
                    <div style={{textAlign:'center',width:'300px'}}>
                        <img style={{width:'100px',marginTop:'20px'}} src="../src/assets/24.png" alt="" />
                        <h3>Real Time Doubt Resolution</h3>
                        <p>With Live Instructors</p>
                    </div>
                    <div style={{textAlign:'center',width:'300px'}}>
                        <img style={{width:'100px',marginTop:'15px'}} src="../src/assets/up.png" alt="" />
                        <h3>Real Time Doubt Resolution</h3>
                        <p>With Live Instructors</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cards