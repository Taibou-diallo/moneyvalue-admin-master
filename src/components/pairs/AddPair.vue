<template>
  <h1>Creer une pair de conversion</h1>
  <form>
    <select class="form-select" aria-label="Default select example">
       <option selected>Choisir la premiere devise</option>
       <option value="1">EUR</option>
       <option value="2">USD</option>
       <option value="3">CAD</option>
    </select>
    <select class="form-select" aria-label="Default select example">
       <option selected>Choisir la seconde devise</option>
       <option value="1">EUR</option>
       <option value="2">USD</option>
       <option value="3">CAD</option>
    </select>
    <input type="email" v-model="email" placeholder="entrer le taux">
    <button v-on:click="signIn" class="byn-btn-pimary">Creer</button>
  </form>
</template>

<script>
export default {
  name: "AddPair",
};
</script>

<style scoped>
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

