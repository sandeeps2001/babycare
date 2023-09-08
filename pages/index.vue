<script >

console.log('Mail' , process.env.MAILPASS)
const email = ref('');
const name = ref('');
const phone = ref('');
const submit = async () =>{
  let {data : res} = await useFetch('/api/create/formcreation',{
       method: 'POST',
       body:{
          email : email.value,
          phone : phone.value,
          name : name.value
       }
   })
   console.log(res.value)
}

</script>

<template>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Simple Website Design HTML CSS | BABY CARE</title>
    <link rel="stylesheet">
  </head>
  <body>
    <nav>
      <div class="menu">
<div class="l" >
  <img src="~/assets/logo.png" width="90" height="50"/>
        <div class="logo">
<a href="#">BABY CARE</a>
        </div>
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Feedback</a></li>
        </ul>
      </div>
    </nav>
<div class="center">
            <img src="~/assets/baby.jpg" />
  <div class="title">
    we offer world class baby sitting from the comfort of our home with the hospitatlity of a mother
  </div>
</div>
<div class="title1">
  "Where Love and Care Begin: Your Trusted Baby Sitting Haven"
</div>
<div class = 'container'>
           <h2>PLEASE FILL IN YOUR DETAILS</h2>
           <input class = "name" type="text" placeholder="name" v-model="name" >
           <input class = "phone" type="text" placeholder="phone" v-model="phone" >
           <input class = "email" type="text" placeholder="email" v-model="email" >
           <button @click="submit()" class="formsubmit"> submit </button> 
</div>
          </body>
</html>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.formsubmit{
       background-color: blue;
       cursor: pointer;
       margin-left: 120px;
       margin-top: 30px;
       width: 100px;
       height: 40px;
       text-align: center;
       color: aliceblue;
   }

.title1{
  position: relative;
  color: #000000;
  font-size: 90px;
  font-weight: 800;
  margin-left: 250px;
  font-family: Arial, Helvetica, sans-serif;
}
   input[type = text]{
   width :60%;
   padding : 20px;
   box-sizing: border-box;
   margin-top: 50px;
   }
   .container{
     display: flex;
     width: 800px;
     margin-left: 400px;
     flex-direction: column;
     align-items: center;
     margin-top: 90px;
     border: 2px solid black;
     padding: 10px;
   }


.l{
  display: flex;
  align-items: center;
  
}
.l img{
  margin-right: 10px;
}


nav{
  position: fixed;
  background: #f600f196;
  width: 100%;
  padding: 10px 0;
  z-index: 12;
}
nav .menu{
  max-width: auto;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
.menu .logo a{
  text-decoration: none;
  font-family: cursive;
  color: #fff;
  font-size: 55px;
  font-weight: 600;
}


.menu ul{
  display: inline-flex;
}
.menu ul li{
  list-style: none;
  margin-left: 7px;
}
.menu ul li:first-child{
  margin-left: 0px;
}
.menu ul li a{
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
}
.menu ul li a:hover{
  background: #fff;
  color: black;
}


.center {
  width: 100vw;
  height: 90vh;
  background-position: center;
  position: relative;
  background: rgb(14, 14, 14);
}
.center img{
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: center 35%;
  opacity: 0.4;
}
 .title{
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  font-size: 40px;
  font-weight: 200;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  transform: translate(-50%, -50%);
  white-space: nowrap
}
.text1{
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  font-size: 40px;
  font-weight: 200;
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  transform: translate(-50%, -50%);
  white-space: nowrap
}


</style>