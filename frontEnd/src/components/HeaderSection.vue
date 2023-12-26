<template>
  <div class="header">
    <div class="logo">
      <img src="/logo/bird_logo.svg" alt="BirthMark Logo" class="birthMarkLogo">
    </div>
    <nav>
      <ul>
        <li><MyMarks /></li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <div class="login" @click="toggleForm" v-if="!loggedIn">
      Login
    </div>
    <div class="profile" v-else>
      <h2>S.J.</h2>
    </div>
  </div>
</template>

<script>
import MyMarks from './headerComponents/MyMarks.vue';

export default {
  name: "HeaderSection",
  props:{ loggedIn: Boolean},
  data(){return{  }},
  components:{
    MyMarks
  },
  methods: {
    toggleForm(){
      this.$emit("toggleForm");
    }
  }
}
</script>

<style scoped>

:root{
  --profile-border-color: linear-gradient(rgb(84, 84, 205), rgb(53, 53, 181));
  
}
.header {
  /* padding-left: 10px; */
  padding-bottom: 10px;
  backdrop-filter: blur(10px);
  font-family: 'Dancing Script', cursive;
  /* line-height: 1.5; */
  display: flex;
  justify-content: flex-end;
  position: fixed;
  z-index: 2;
  right: 0;
  left: 0;
  top: 0;

}

.logo{
  z-index: 3;
  margin-right: 10px;
}

.logo img{
  position: absolute;
  left: -10px;
  top: -31px;
  height: 180px;
  width: auto;
}

nav {
  padding-top: 10px;
  color: rgb(63, 63, 167);
  font-size: 30px;
}

nav ul {
  display: flex;
  align-content: center;
  list-style: none;
  gap: 25px;
  transition: all 0.5s ease;
}

nav ul li:hover {
  transform: scale(1.10);
  text-shadow: 0.1px 1px 2px;
  cursor: pointer;
}

nav ul li:active {
  transform: scale(0.9);
}

.login{
  font-size: 25px;
  margin-left: 113px;
  margin-right: 20px;
  margin-top: 10px;
  padding: 1px 80px;
  border-radius: 50% 40px;
  background-color: #4848ad;
  color: #fff;

}

.login:hover,
.birthMarkLogo:hover
{
  transform: scale(1.05);
  cursor: pointer;
}

.login:active,
.birthMarkLogo:active
{
  transform: scale(0.90);
}

.profile{
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 4px solid #0981a5;
  background: linear-gradient(#2fa8cc, #9494df);
  color: #fff;
  font-weight: bold;
  margin-left: 113px;
  margin-right: 20px;
  margin-top: 10px;
  z-index: 3;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 0.5s;
}

.profile:hover{
  transform: scale(1.1) rotate(360deg);
}

.profile:active{
  transform: rotate(180deg);
}


</style>