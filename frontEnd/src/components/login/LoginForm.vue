<template>
    <img src="/public/bird.png" class="birdImg" alt="birthmarkBird">
    <!-- <div class="loginRoundDesign first"></div>
    <div class="loginRoundDesign second"></div> -->
    <main class="container formGroup">
        <div class="form login__form">
            <div class="form-content">
                <h1>Login</h1>
                <h3 id="login_message"></h3>
                <form action="#">
                    <div class="field input-field">
                        <input autofocus="email" placeholder="Enter email" class="input" id="login__inputName" v-model="login_username">
                    </div>

                    <div class="field input-field">
                        <input type="password" placeholder="Password" class="password" id="login__inputpwd" v-model="login_pwd">
                        <i class='bx bx-hide eye-icon'></i>
                    </div>


                    <div class="field button-field">
                        <button type="submit" @submit.prevent="loginValidation">Login</button>
                    </div>
                </form>

                <div class="form-link">
                    <span> <a href="#" class="link signup-link" @click="triggerSignup">Don't have an account? Signup</a></span>
                </div>

                <!-- <div class="form-link">
                        <a href="#" class="forgot-pass">Forgot password?</a>
                    </div> -->

            </div>

            <div class="line"></div>

            <div class="media-options">
                <a href="#" class="field github">
                    <i class='bx bxl-github github-icon'></i>
                    <span>Login with Github</span>
                </a>
            </div>

            <div class="media-options">
               <GoogleLogin/>
            </div>

        </div>
    </main>
</template>

<script>
import GoogleLogin from './GoogleLogin.vue';
export default {
    name: "LoginForm",
    components:{
        GoogleLogin
    },
    props:{
        DATABASE: Array
    },
    data(){
        return{
            login_username: "",
            login_pwd: ""
        }
    },
    methods: {
        triggerSignup(){
            this.$emit("triggerSignup")
            console.log("login emitted");
        },
        loginValidation() {
            const username = this.login_username;
            const pwd = this.login_pwd;
            const currentUser = this.DATABASE.find((user) => user.name === username && user.pwd === pwd);
            if (currentUser) {
                console.log("SUCCESS");
                //login_message.innerHTML = "ACCESS GRANTED";
                //window.location.href = '../coinCards/coinCard.html'
            } else {
                //login_message.innerHTML = "ACCESS DENIED";
                //login_message.style.color = "red";
                console.log(`${currentUser} DENIED!`);
            }
        }

    }
}


</script>

<style scoped>
/* Global styles */

/* Import Google Fonts - Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

/* Reset default margin and padding & font-family */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

:root {
    --border-radius: 4px;
    --color-primary: #333;
}

/* Logo styles */
.logo {
    position: absolute;
    top: 20px;
    left: 20px;
}

.logo img {
    height: 90px;
    width: auto;
    transition: all 0.3s ease-in-out;
}

.logo img:hover {
    cursor: pointer;
    transform: scale(1.10);

}

/* Container styles */
template,
.container {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 30px;
    text-align: center;
    background: #fdfdff;
    border-top-left-radius: 420px 120px;
}


/* Header styles */
header {
    font-size: 28px;
    font-weight: 600;
    color: #ffffff58;
    text-align: center;
}

/* Form container styles */
form {
    margin-top: 30px;
}

.loginRoundDesign{
    height: 1800px;
    width: 1800px;
    border-radius: 50%;
    position: absolute;
}

/* .loginRoundDesign .third{
    left: -800px;
    top: -800px;
    background: rgb(201, 5, 5);
    border: 5px solid rgb(23, 168, 168);
    z-index: 6;
} */

/* .loginRoundDesign .second{
    right: -800px;
    top: -800px;
    background: pink; */
    /* background: rgba(19, 245, 245, 0.498); */
    /* border: 5px solid rgb(23, 168, 168);
} */
</style>