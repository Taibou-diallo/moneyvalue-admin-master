<template>
  <h2>Creer une nouvelle pair de conversion</h2>
  <form onsubmit="event.preventDefaul()">
    <!-- <select  class="form-select" aria-label="Default select example">
       <option selected v-model="addPair.currency_start" name="currency_start" >Choisir la seconde devise</option>
    </select>


    <select  class="form-select" aria-label="Default select example">
      <option selected v-model="addPair.currency_end" name="currency_end" >Choisir la seconde devise</option>
    </select> -->
    <input type="number" v-model="addPair.rate" placeholder="entrer le taux">
    <button v-on:click="AddPair" class="byn-btn-pimary">Enregistrer</button>
  </form>
</template>

<script>
import axios from 'axios';
export default {
  name: "AddPair",

data() {
  return {
        addPair: {
            currency_start: "",
            currency_end: "",
            rate: "",
  },
    curenncies:[]
  }
},

// methods: {
//   createPair(){
//    axios.post('http://127.0.0.1:8000/api/pair/',this.addPair)
//    .then(response) =>{
//     this.
//    }
//   }
// }

mounted() {
    axios.get("http://127.0.0.1:8000/api/currency").then((response) => {
      this.currency = response.data;
      console.log(this.currency);
    });
  }
}




</script>

<style scoped>
h2{
 color:#FF8C00;
}

select{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #FF8C00;
}

input {
    width: 280px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #FF8C00;
}

button{
    width: 300px;
    height: 40px;
    border: 1px solid #FF8C00;
    background: #FF8C00;
    color: #ffff;
    cursor: pointer;
}

</style>

