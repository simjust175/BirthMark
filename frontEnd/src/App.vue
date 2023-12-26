<template>
  <div class="mainContainer">
    <!-- Header -->
    <div class="header">
      <HeaderSection @toggleForm="toggleSignup" :loggedIn="loggedIn" />
    </div>

    <!--Message div-->
    <div class="message" :class="{ hidden: !messageActive }">
      <h1>{{ message }}</h1>
    </div>

    <!-- Info Form area-->
    <div class="date">
      <date-input />
    </div>

    <!-- Signup/login forms (hidden)-->
    <div class="signupArea forms" :class="{ hidden: !signupFormVisibility }">
      <SignupForm @newUserSuccess="addNewUser" :DATABASE="DATABASE" @exit="exitForm" />
    </div>
    <div class="loginArea forms" :class="{ hidden: !loginFormVisibility }">
      <LoginForm :DATABASE="DATABASE" @triggerSignup="triggerSignupHandler" />
    </div>

    <!--Footer area-->
    <div class="footer">
      <FooterSection />
    </div>

    <div class="designRound first"></div>
    <div class="designRound second"></div>
    <div class="designRound third"></div>
    <img src="../public/happy_birthday.svg" alt="happy birthday" class="designImg">

  </div>
</template>

<script>

import DateInput from './components/DateInput.vue'
import HeaderSection from './components/HeaderSection.vue'
import FooterSection from './components/FooterSection.vue'
import SignupForm from './components/login/SignupForm.vue'
import LoginForm from './components/login/LoginForm.vue'

export default {
  name: "App",
  components: {
    HeaderSection,
    FooterSection,
    DateInput,
    SignupForm,
    LoginForm
  },
  data() {
    return {
      DATABASE: [],
      signupFormVisibility: false,
      loginFormVisibility: false,
      message: "",
      messageActive: false,
      loggedIn: true
    }
  },
  methods: {
    toggleSignup() {
      this.loginFormVisibility = !this.loginFormVisibility;
    },
    exitForm(val) {
      console.log(val);
    },
    addNewUser(newUser) {
      this.DATABASE.push(newUser);
      console.log(this.DATABASE);
      this.signupFormVisibility = false

    },
    triggerSignupHandler() {
      this.signupFormVisibility = true;
      this.loginFormVisibility = false
    }
  },
  watch: {
    message(msg) {
      this.messageActive = true;
      console.log(`${msg} has triggered a watcher`);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;700&display=swap');

:root {
  --mouse_hover: url("../../public/bxs-balloon.svg");
  --color-primary: #2fa8cc;
  --color-lite: #2fa7cc90;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  cursor: url("../public/bxs-balloon.svg"), default;
  /* mix-blend-mode: difference; */
}

template {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;

}

.hidden {
  display: none;
}

.mainContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.designRound {
  border-radius: 50%;
  position: absolute;
  z-index: 0;
}

.first {
  height: 1300px;
  width: 1800px;
  background: var(--color-lite);
  top: -800px;
  left: -1050px;
}

/* .second {
  height: 1300px;
  width: 1800px;
  background: #4848ad86;
  bottom: -1000px;
  left: -750px;
} */

.third {
  height: 1300px;
  width: 1800px;
  background: var(--color-lite);
  bottom: -700px;
  right: -1050px;
}

.message {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; */
  z-index: 2;
  transform: translate(-50%, -50%);
  height: 150px;
  width: 600px;
  padding: 1rem;
  background-color: #000000b3;
  border-radius: 30px;
  color: #fff;
}


.header {
  width: 100%;
  z-index: 7;
}

.date {
  width: 700px;
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%, -50%);
  height: 500px;
  z-index: 1;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0px;
  /*right: 0; */
  width: 100%;
}

.forms {
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.designImg{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  opacity: 40%;
}

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

} */
</style>
