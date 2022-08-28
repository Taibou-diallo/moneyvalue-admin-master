<template>
    <h2>La liste des pairs</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Devise 1</th>
            <th scope="col">Devise 2</th>
            <th scope="col">Taux</th>
            <th scope="col" colspan="2"> Action</th>
          </tr>
        </thead>
   
        <tbody>
          <tr v-for="item in pairs" v-bind:key="item.id" >
              <td>{{item.currency_start}}</td>
              <td>{{item.currency_end}}</td>
              <td>{{item.rate}}</td>
              <td><button v-on:click="modifier" class="update">Modifier</button></td>
              <td> <button v-on:click="supprimer" class="delete">Supprimer</button></td>
            </tr>
        </tbody>
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
h2{
  color:#FF8C00;
}
.table{
  border-collapse: collapse;
  min-width:400px;
  width:auto;
  box-shadow: 0 3px 10px #dddd;
   /* cursor: pointer; */
  margin:100px auto;
  margin-top: 20px;
  border: 1px solid #ddd ;
}

thead tr {
  background-color: #FF8C00 ;
  color: #fff;
  text-align:left;
}

th,td {
  padding: 5px 10px ;

}

tbody tr,td,th {
  border: 1px solid #ddd;

}

tbody tr:nth-child(even) {
  background-color: #f3f3f3;
}

tbody tr:last-of-type{
  border-bottom: 2px solid hsla(33, 100%, 50%, 0.703) ;
}

tbody tr td button.delete {
  background: #ff0000;
  border: none;
  color:#fff;
   cursor: pointer;

}

tbody tr td button.update {
  background: #0000ff;
  border: none;
  color:#fff;
   cursor: pointer;

}


</style>