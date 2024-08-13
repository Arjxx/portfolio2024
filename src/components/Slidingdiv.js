import React from 'react'

export const Slidingdiv = () => {
  return (
    <div class="container">
  
    </div>
    <div class="container box">
      <div class="inner-box">Incredible hulk</div>
      <div class="box1"></div>
        <div class="box2"></div>
      <div class="box3"></div>
    
    
    </div>
      
      <style>.container{
      height:500vh;
    }
    
    .box{
        position:relative;
    
    }
    .inner-box{
      position: sticky;
      top:0;
      width:100%;
      height:500px;
      background:black;
      display:flex;
      justify-content:center;
      color:white;
      align-items:center;
      font-size: 3rem
    }
    
    .box1{
      position:absolute;
      width: 300px;
      height: 200px;
      background: pink;
      top:600px
      left:50px;
    }
    
    .box2{
      position:absolute;
      width: 300px;
      height: 200px;
      background: green;
      top:200px;
      right:50px;
    }
    .box3{
      position:absolute;
      width: 300px;
      height: 200px;
      background: white;
      top:900px;
      right:50px;
    }</style>
  )
}
