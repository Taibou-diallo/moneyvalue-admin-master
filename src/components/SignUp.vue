<template>
    <h1>Administrateur</h1>
    <div class="register">
        <input type="name" v-model="name" placeholder="Entrer votre nom">
        <input type="email" v-model="email" placeholder="Entrer e-mail">
        <input type="password" v-model="password" placeholder="Entrer password">
        <button v-on:click="signUp">Connexion</button>
    </div>
</template>

<script>
// 
import axios from 'axios'
export default {
    name: "SignUp",
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },

    methods:{
       async  signUp(){
            console.log("signUp",this.name,this.email,this.password)

            let result = await axios.post("http://localhost:3000/user",{
                email:this.email,
                password:this.password,
                name:this.name
            });
            console.warn(result);

            if(result.status==201) {
              alert("signup done")  

              localStorage.setItem("user-info",JSON.stringify(result.data))
            }
        }
    }
}
</script>

<style scoped>
.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #FF8C00;
}

.register button {
    width: 320px;
    height: 40px;
    border: 1px solid #FF8C00;
    background: #FF8C00;
    color: #ffff;
    cursor: pointer;


}
</style>