<template>
    <h2>La liste des pairs</h2>

        <button v-on:click="signUp">Ajouter une nouvelle pair</button>
      <table class="table">

    <tr>
      <th scope="col">#</th>
      <th scope="col">Devise 1</th>
      <th scope="col">Devise 2</th>
      <th scope="col">Taux</th>
    </tr>
  
    
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    
</table>
</template>

<script>
export default {
    name: "ViewPair"
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