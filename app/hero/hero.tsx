import React from 'react'

const Hero = () => {
  return (
    <div style={{height:"500px",background:"black"}}>
        <div style={{display:"flex",gap:"6em",alignItems:"flex-start",marginLeft:"140px",paddingTop:"100px"}}>
          
            <div id='one'  style={{width:"420px",height:"290px",background:"black"}}>
              <h1 style={{fontStyle:"italic",color:"white"}}>Hello I am Madiha</h1>
              <br />
              <p style={{fontStyle:"italic",color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis eum sed aspernatur voluptatum enim unde atque beatae quis fugit, est assumenda officia id in nihil tempora voluptates ut doloremque! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione, alias ipsam. Ullam reprehenderit accusamus, explicabo tenetur porro dolor quis recusandae, suscipit itaque quaerat ut voluptates tempore rem inventore debitis dolore. </p>

            </div>

            <div id='two' style={{width:"370px",height:"290px",background:"orange"}}>
              <img style={{width:"400px",height:"290px"}} src="https://kababjees.com/images/highway%20pic1.jpg" alt="" />
            </div>
 
        </div>
    </div>
  )
}

export default Hero
