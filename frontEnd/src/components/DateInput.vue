<template>
  <div class="input-area">
    <!-- <button class="but"  @click="infoCollector">LOg me</button> -->
    <form method="post">
      <input type="date" class="dateInput" max="9999-12-31" min="0000-01-01" pattern="[0-9]{2}-[0-9]{2}"
        inputmode="month" v-model="birthDate">
      <input type="text" class="name" placeholder="Enter your name" v-model="senderName">
      <input type="text" class="name" placeholder="Enter recipients name" v-model="recipientName">
      <input type="email" class="email" placeholder="Enter recipients email" v-model="recipientEmail">
      <div class="stylePicker">
        <span class="stylePickerSpan">{{ stylePicked }} <div class="arrow">&#9660;</div></span>
        <div class="dropDown">
          <p class="styleChoice" v-for="(style, index) in styleList" :key="index" :id="style"
            @click="stylePicked=style">{{ style }}</p>
        </div>
      </div>
      <button type="submit">
        <span>LET'S MARK IT UP!!</span>
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "DateInput",
  data() {
    return {
      styleList: ["dog", "gold", "pink", "gold", "black", "blue"],
      stylePicked: "Choose a style:",
      senderName:"",
      recipientName:"",
      recipientEmail:"",
      birthDate:""
    }
  },
  methods:{
   infoCollector(){
    const info = {
      senderName: this.senderName,
      recipientName: this.recipientName,
      recipientEmail: this.recipientEmail,
      birthDate: this.birthDate,
      style: this.stylePicked
    }
    const keys = Object.keys(info);
    console.log(keys.forEach(key => !info[key] ? `${key} missing` : key));
    this.$emit("infoEmitted", info)
   }
  }
}
</script>

<style scoped>

.input-area {
  padding: 50px;
  /* background-color: #2fa8cc; */
  padding: 10px;
  border-radius: 50%;
  color: #fff;
  height: 300px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input[type="date"],
.input-area input[type="email"],
.input-area input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px #2fa8cc solid;
  border-radius: 8px;
  /* background-color: #ffffff25; */
  background-color: transparent;
  backdrop-filter: blur(5px);
  color: #333;
  box-shadow:0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
}

.input-area input[type="date"]::placeholder,
.input-area input[type="email"]::placeholder,
.input-area input[type="text"]::placeholder {
  color: #767575;
  font-family: 'Dancing Script', cursive;
  font-size: 15px;
}

.input-area input[type="date"]:focus,
.input-area input[type="email"]:focus,
.input-area input[type="text"]:focus {
  outline: none;
  box-shadow: 0 0 5px #2fa7cc;
}

.input-area input[type="date"]:hover,
.input-area input[type="email"]:hover,
.input-area input[type="text"]:hover {
  background: #ddd;
  cursor: text;
}

.input-area input[type="date"]:active,
.input-area input[type="email"]:active,
.input-area input[type="text"]:active {
  background-color: #ddd;
}


.input-area input[type="date"] {
  font-family: 'Dancing Script', cursive;
  font-size: 20px;
  padding: 3px;
  padding-bottom: 5px;
  padding-left: 8px;
}

.stylePicker {
  position: relative;
  font-family: 'Dancing Script', cursive;
  display: inline-block;
  width: 100%;
  padding: 9px;
  color: #333;
  border-radius: 7px;
  /* background: #fff; */
  backdrop-filter: blur(8px);
  border: 2px #2fa8cc solid;
  margin-bottom: 8px;
}

.dropDown {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px #2fa8cc(0, 0, 0, 0.2);
  padding: 12px 16px;
  left: 0;
  right: 0;
  z-index: 1;
  text-align: center;
  border-radius: 8px;
  background-color: #fff;
  color: #333;
}

.styleChoice:hover {
  background: #c7c6c6;
}

.stylePicker:hover .dropDown {
  display: block;
}

.stylePickerSpan {
  display: flex;
  justify-content: space-between;

}

.arrow {
  color: #333;
  font-size: 15px;
}

.styleChoice {
  border-top: 1px solid #a5a5a5;
}

/* .submit{
  padding: 2rem;
  background: #4848ad;
  color: #fff;
  border: none;
  outline: none;
} */

/* body {
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	
	background-image: linear-gradient(135deg, #0042D9 0%, #0093FF 60%, #0078FF 100%);
} */

button {
  cursor: pointer;
  position: relative;
  padding: 1.25rem 3.75rem;
  /* Updated padding */
  border-radius: 3.75rem;
  line-height: 1.25rem;
  /* Updated line-height */
  font-size: 2rem;
  font-weight: 600;

  /* border: 1px solid #012880; */
  background-image: linear-gradient(-180deg, #FF89D6 0%, #C01F9E 100%);
  box-shadow: 0 1rem 1.25rem 0 #2fa8cc(22, 75, 195, 0.50),
    0 -0.25rem 1.5rem #2fa8cc(110, 15, 155, 1) inset,
    0 0.75rem 0.5rem #2fa8cc(255, 255, 255, 0.4) inset,
    0 0.25rem 0.5rem 0 #2fa8cc(180, 70, 207, 1) inset;
}

button span {
  color: transparent;
  background-image: linear-gradient(0deg, #EE82DA 0%, #FEFAFD 100%);
  -webkit-background-clip: text;
  background-clip: text;
  filter: drop-shadow(0 2px 2px hsla(290, 100%, 20%, 1));
}

button::before {
  content: "";
  display: block;
  height: 0.25rem;
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 3.75rem);
  /* Updated width */
  background: #fff;
  border-radius: 100%;
  opacity: 0.7;
  background-image: linear-gradient(-270deg, #2fa8cc(255, 255, 255, 0.00) 0%, #FFFFFF 20%, #FFFFFF 80%, #2fa8cc(255, 255, 255, 0.00) 100%);
}

button::after {
  content: "";
  display: block;
  height: 0.25rem;
  position: absolute;
  bottom: 0.75rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 3.75rem);
  /* Updated width */
  background: #fff;
  border-radius: 100%;
  filter: blur(1px);
  opacity: 0.05;
  background-image: linear-gradient(-270deg, #2fa8cc(255, 255, 255, 0.00) 0%, #FFFFFF 20%, #FFFFFF 80%, #2fa8cc(255, 255, 255, 0.00) 100%);
}
</style>