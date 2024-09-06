* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
}


.logo{
  height: 65px;
  padding-top: 5px;
  padding-left: 20px;
  mix-blend-mode: darken;
}
.head{
  background-image: linear-gradient(to right, #ffffff ,#ffffff , #244f8f);
}
.BG {
  background-image: url('Image/EWU.jpg');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; 
  opacity: 90; 
}

.wrapper .column {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  margin: 0.5em 0;
  gap: 1.5em;
}
.wrapper .column input {
  padding: 12px;
  width: 100%;
}
.wrapper .column select {
  padding: 12px;
}


.wrapper {
  position: relative; /* Ensure the centered-box is positioned relative to this container */
  width: 800px;
  background-color: rgba(5, 5, 5, 0.5);
  border-top: 5px solid #244f8f;
  border-bottom: 5px solid #244f8f;
  border-radius: 5px;
  margin: 1.5em auto;
  clear: both;
  overflow: hidden; /* Ensures no elements go outside the box */
  z-index: 1;
}

.form-wrapper {
  color: whitesmoke;
  margin: 1.5em 1em;
  clear: both;
}
#course-form {
  clear: both;
}
.form-wrapper .col {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5em 0;
  gap: 1.5em;
}
.form-wrapper .col input {
  padding: 12px;
  width: 100%;
}
.form-wrapper .col select {
  padding: 12px;
}
#add-btn {
  padding: 8px;
  background: #46da8b;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  text-transform: uppercase;
  float: right;
  display: inline-block;
  margin-bottom: 1.5em;
}


.fa-plus,
.fa-times {
  color: #fff;
}
.remove-course {
  background: #e02401;
  padding: 12px;
  border: none;
  border-radius: 5px;
}
#overall-cgpa {
  background: #f1f1f1;
  padding: 8px 40px;
  color: #333;
  border: none;
  border-radius: 5px;
  display: inline-block;
  margin-top: 0.5em;
  margin-right: 10px;
  float: left;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 2em;
}

#submit-btn {
  background: #0554f2;
  padding: 8px 40px;
  color: #fff;
  border: none;
  border-radius: 5px;
  display: inline-block;
  margin-top: 0.5em;
  float: right;
  text-transform: uppercase;
}
#gp {
  font-weight: 500;
  font-family: Helvetica;
  font-size: 1.2rem;
}
footer {
  color: whitesmoke;
  background-image: linear-gradient(to right, #ffffff ,#244f8f,#244f8f,#ffffff );
  text-align: center;
  font-size: 1rem;
  font-family: Arial  Bold;
  font-weight: 300;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem; 
}

.FT{
padding-top: 5px;
}
@media (max-width: 768px) {
  .wrapper {
    width: fit-content;
    margin: 1.5em 0.5em;
  }
  .form-wrapper .col {
    gap: 0.5em;
  }
}



footer{
    background-color: #111;
}
.footerContainer{
    width: 100%;
    padding: 70px 30px 20px ;
}
.socialIcons{
    display: flex;
    justify-content: center;
}
.socialIcons a{
    text-decoration: none;
    padding:  10px;
    background-color: white;
    margin: 10px;
    border-radius: 50%;
}
.socialIcons a i{
    font-size: 2em;
    color: black;
    opacity: 0,9;
}
/* Hover affect on social media icon */
.socialIcons a:hover{
    background-color: #111;
    transition: 0.5s;
}
.socialIcons a:hover i{
    color: white;
    transition: 0.5s;
}
.footerNav{
    margin: 30px 0;
}
.footerNav ul{
    display: flex;
    justify-content: center;
    list-style-type: none;
}
.footerNav ul li a{
    color:white;
    margin: 20px;
    text-decoration: none;
    font-size: 1.3em;
    opacity: 0.7;
    transition: 0.5s;

}
.footerNav ul li a:hover{
    opacity: 1;
}
.footerBottom{
    background-color: #000;
    padding: 20px;
    text-align: center;
}
.footerBottom p{
    color: white;
}
.designer{
    opacity: 0.7;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
    margin: 0px 5px;
}





/* Meter Start */
.gauge-box {
  width: auto;
.flame-gauge {
  opacity: 0;
  transition: all 2s;

  &.active {
    display: inherit;
    opacity: 1;

    .flame {
      animation-name: flames;
      animation-duration: 0.3s;
      animation-iteration-count: infinite;
      animation-direction: alternate;	
      transform-origin: 50% 100%;
    }

    .f-p1 {
      animation-name: particles;
      animation-duration: 0.8s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    .f-p2 {
      animation-name: particles;
      animation-duration: 1s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    .f-p3 {
      animation-name: particles;
      animation-duration: 0.7s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }		
}
}

@keyframes particles {
  from {
    transform: translateY(15px);
    opacity: 1;
}
  to {
    transform: translateY(-10%);
    opacity: 0;
}
}

@keyframes flames {
from {
  opacity: 0.6;
}
to {
  opacity: 1;
}
}

.gauge-meter-chart {
  max-height: 50%;
  max-width: 50%;

  @for $i from 1 through 8 {
      .p-#{$i} {
          opacity: 0.7;
          transition: all 1s;

          &.selected {
              opacity: 1;
              transition: all 1s;
          }
      }
  } 

  .pointer {
      transform: rotateZ(-90deg);
      transform-origin: 50% 95%;
      transition: all 2.3s cubic-bezier(.87,-.41,.19,1.44);
  }
}

.centered-box {
  margin-top: -30px; /* Space above the meter */
  max-width: 70%; /* Adjust size */
  width: 450px;
  box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
  padding: 15px; /* Padding for the gauge meter */
  border-radius: 5px;
}

.wrapper .centered-box{

 margin-left: 35%;
  
}
/* Meter end */



@media (max-width: 700px){
    .footerNav ul{
        flex-direction: column;
    } 
    .footerNav ul li{
        width:100%;
        text-align: center;
        margin: 10px;
    }
    .socialIcons a{
        padding: 8px;
        margin: 4px;
    }
}
