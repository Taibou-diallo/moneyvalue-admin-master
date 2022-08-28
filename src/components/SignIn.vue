<template>
    <h1>Administrateur</h1>
    <div class="register">
    
        <input type="email" v-model="email" placeholder="Entrer e-mail">
        <input type="password" v-model="password" placeholder="Entrer password">
        <button v-on:click="signIn">Connexion</button>
    </div>
</template>

<script>
// 
import axios from 'axios'
export default {
    name: "SignIn",
    data() {
        return {
           
            email: "",
            password: ""
        }
    },

    methods:{
       async  signIn(){
            console.log("signIn",this.email,this.password)

            let result = await axios.post("http://127.0.0.1:8000/users",{
                email:this.email,
                password:this.password,
                
            });
            console.warn(result);

            if(result.status==201) {
              localStorage.setItem("user-info",JSON.stringify(result.data))
            //   redirection de la page home apres connexion
              this.$router.push({name:'ViewPair'})
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