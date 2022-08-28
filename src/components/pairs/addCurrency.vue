<template> 
    <h2>Ajouter une devise</h2>
    <form @submit.prevent="submitCurrency">
        <input type="text" v-model="currency_code" placeholder="Entrer une devise">
        <input type="text" v-model="name" placeholder="Entrer le nom de la devise">
        <input type="text" v-model="symbol" placeholder="Entrer le symbol de la devise">
        <button type="submit" class="button">Enregistrer</button>
    </form>
</template>
 
<script> 
import axios from 'axios';
export default {
  name: "AddCurrency",

  data() {
    return {
           currency_code:'',
           name:'',
           symbol:'',
    }
  },

  methods: {
    submitCurrency() {
        axios.post('http://localhost:8080/api/currencies/', {
            currency_code: this.currency_code,
            name: this.name,
            symbol: this.symbol,
        })
        .then((response) =>{
            console.war(response)
        })

        // console.log(this.currency_code,this.name,this.symbol)
    }
  }

// methods:{
//        async  addCurrency(){
//             console.log("addCurrency",this.currency_code,this.name,this.symbol)

//             let result = await axios.post("http://localhost:8080/api/currencies",{
//                 currency_code:this.currency_code,
//                 name:this.name,
//                 symbol:this.symbol,
                
//             });
//             console.warn(result);

//         }
//     }


}
</script>

<style> 
h2 {
    color: #FF8C00;
}
input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #FF8C00;
}

.button {
    width: 320px;
    height: 40px;
    border: 1px solid #FF8C00;
    background: #FF8C00;
    color: #ffff;
    cursor: pointer;


}
</style>