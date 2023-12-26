<template>
    <img src="/public/bird.png" class="birdImg">
    <main class="container formGroup">
        <div class="form">
            <div class="form-content">
                <h1>Signup</h1>
                <h1 id="signup_message"></h1>
                <div class="exit" @click="exit">
                    <h3>X</h3>
                </div>
                <form action="post">
                    <div class="field input-field">
                        <input autofocus type="email" placeholder="Email" class="input userName" v-model="newUsername">
                    </div>

                    <div class="field input-field">
                        <input type="password" placeholder="Create password" class="password" id="pwd1" v-model="pwd1">
                    </div>

                    <div class="field input-field">
                        <input type="password" placeholder="Confirm password" class="password" id="pwd2" v-model="pwd2">
                        <i class='bx bx-hide eye-icon'></i>
                    </div>

                    <div class="field button-field">
                        <button type="click" @click="signupSystem"> Signup </button>
                    </div>
                </form>

                <div class="form-link">
                    <span><a href="#" class="link login-link">Already have an account? Login</a></span>
                </div>
            </div>

            <div class="line"></div>

            <div class="media-options">
                <a href="#" class="field github">
                    <i class='bx bxl-github github-icon'></i>
                    <span>Login with Github</span>
                </a>
            </div>

            <div class="media-options">
                <a href="#" class="field google">
                    <i class='bx bxl-google google-icon'></i>
                    <span>Login with Google</span>
                </a>
            </div>
        </div>

        <!-- <div class="designRound first"></div>
        <div class="designRound second"></div>
        <div class="designRound third"></div> -->
    </main>
</template>

<script>
export default {
    name: "SignupForm",
    props: {
        DATABASE: Array
    },
    data() {
        return {
            newUsername: "",
            pwd1: "",
            pwd2: "",

            // Counter for assigning user IDs
            idCounter: 100,
        }
    },
    methods: {
        exit() {
            this.$emit("exit", "signupForm");
        },
        // Function to validate password
        isPasswordValid(pwd) { return /[A-Za-z]/.test(pwd) },

        // Function to validate username availability
        userNameValidator(userName) {
            if (this.DATABASE.some((formerUser) => formerUser.name === userName)) {
                let userNameInUse = `Username: ${userName} is already in use`;
                //signup_message.innerText = userNameInUse;
                throw new Error(userNameInUse);
            }
            return userName;
        },

        // Function to validate password match and stre
        passwordValidator(pwd1, pwd2) {
            if (pwd1 === pwd2 && this.isPasswordValid(pwd1)) {
                return pwd1;
            }
            throw new Error(`Invalid password!`);
        },

        // UserRegistrationSystem constructor
        // UserRegistrationSystem(userName, pwd1, pwd2) {
        //     this.name = this.userNameValidator(userName);
        //     this.pwd = this.passwordValidator(pwd1, pwd2);
        //     this.id = this.idCounter++;
        // },

        // Sign-up form submission handler
        signupSystem(event) {
            const target = event.target.closest("form");
            target.reset();
            const userName = this.newUsername;
            const pwd1 = this.pwd1;
            const pwd2 = this.pwd2;
            try {
                const name = this.userNameValidator(userName);
                const pwd = this.passwordValidator(pwd1, pwd2);
                const id = this.idCounter++;
                const user = { name, pwd, id };
                console.log(`Current user: ${JSON.stringify(user)}`);
                this.$emit("newUserSuccess", user);
                const target = event.target.closest("form");
                target.reset();
            } catch (error) {
                console.error(error.message);
            }
        },
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


</style>
<style>
.birdImg{
    position: absolute;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
}

.exit {
    position: absolute;
    top: 200px;
    right: 150px;
}

/* Form styles */
.form {
    opacity: 80%;
    position: absolute;
    max-width: 430px;
    width: 100%;
    padding: 30px;
    border-radius: 6px;
    /* background: #FFF; */
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);

}

/* Hide form */
.formHidden {
    display: none;
}

/* Arrow styles */
.arrow {
    color: #3373cc;
    font-size: 13px;
}

/* Form field styles */
.form .field {
    position: relative;
    height: 50px;
    width: 100%;
    margin-top: 20px;
    border-radius: var(--border-radius);
}

/* Form input and button styles */
.field input,
.field button {
    background-color: #CACACA;
    height: 100%;
    width: 100%;
    border: none;
    font-size: 16px;
    font-weight: 600;
    border-radius: var(--border-radius);
}

/* Form input focus styles */
.field input:focus {
    border-bottom-width: 2px;
}

/* Form input styles */
.field input {
    opacity: 100%;
    display: block;
    outline: none;
    width: 100%;
    padding: 0.95rem;
    box-sizing: border-box;
    border: 1.5px solid #d6d0d0f9;
    background: #dfdbdb;
    transition: background 0.2s, border-color 0.2s;
    margin-bottom: 1.5rem;
    border-radius: var(--border-radius);
}

/* Form input focus styles */
.field input:focus {
    border-color: var(--color-primary);
    background: #ffffff;
}

/* Form button styles */
.field button {
    color: #fff;
    background-color: #c9991f;
    transition: all 0.3s ease;
    cursor: pointer;
}

/* Form button hover styles */
.field button:hover {
    background-color: #d2c9b4;
}

/* Eye icon styles */
.eye-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 18px;
    color: #8b8b8b;
    cursor: pointer;
    padding: 5px;
}

/* Form link styles */
.form-link {
    text-align: center;
    margin-top: 10px;
}

/* Form link text styles */
.form-link span,
.form-link a {
    font-size: 14px;
    font-weight: 400;
    color: #232836;
}

/* Form link hover styles */
.form a {
    color: #0171d3;
    text-decoration: none;
}

/* Form content link hover styles */
.form-content a:hover {
    text-decoration: underline;
}

/* Line separator styles */
.line {
    position: relative;
    height: 1px;
    width: 100%;
    margin: 36px 0;
    background-color: #d4d4d4;
}

/* Line separator text styles */
.line::before {
    content: 'Or';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFF;
    color: #8b8b8b;
    padding: 0 15px;
}

/* signup message */

#signup_message {
    font-size: 15px;
    color: red;
    font-weight: normal;
}



/* Responsive styles for screens up to 400px */
@media screen and (max-width: 400px) {
    .form {
        padding: 20px 10px;
    }
}

/* Social media options styles */
.media-options a {
    display: flex;
    align-items: center;
    justify-content: center;
}

/* GitHub link styles */
a.github {
    color: #fff;
    background-color: #222222;
}

/* GitHub icon styles */
a.github .github-icon {
    height: 28px;
    width: 28px;
    color: #f6f6f6;
    font-size: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0b0b0b;
}

/* GitHub icon and Google image positioning styles */
.github-icon,
img.google-img {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
}

/* Google image styles */
img.google-img {
    height: 20px;
    width: 20px;
    object-fit: cover;
}

/* Google link styles */
a.google {
    border: 1px solid #CACACA;
}

/* Google link text styles */
a.google span {
    font-weight: 500;
    opacity: 0.6;
    color: #232836;
}
</style>