<template>
    <h2>La liste des pairs</h2>
      <table class="table">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Devise 1</th>
      <th scope="col">Devise 2</th>
      <th scope="col">Taux</th>
      <th scope="col" colspan="2"> Action</th>
    </tr>
 
    <tr v-for="item in pairs" v-bind:key="item.id" >
      <th scope="row">{{item.id}}</th>
      <td>{{item.currency_start}}</td>
      <td>{{item.currency_end}}</td>
      <td>{{item.rate}}</td>
      <td>Modifier</td>
      <td>Supprimer</td>
    </tr>
    
</table>
</template>

<script>
import axios from 'axios'
export default {
    name: "ViewPair",

    data() {
        return {
          pairs:[],
          //  currency_start:"",
          //  currency_end:"",
          //  rate:""
        }
    },

mounted() {
    axios.get('http://127.0.0.1:8000/api/pair/')

        .then(response=>
        // (this.currency_start=response
        // this.currency_end=response,
        // this.rate=response)
        this.pairs= response.data
        )

        // capturer les erreurs avec la methode catch
        .catch(err => {
            console.warn(err);
        })
}
}

</script>

<style scoped>
.table,th,td{
    padding: 10px;
    border-collapse: collapse;
    border: 1px solid black;
    margin-top: 20px;

    
}

</style>