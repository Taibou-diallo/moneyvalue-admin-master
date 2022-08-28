<template> 
    <h2>Ajouter une devise</h2>
        <input type="text" v-model="text" placeholder="Entrer une devise">
        <input type="text" v-model="text" placeholder="Entrer le nom">
        <button v-on:click="addCurrency" class="button">Enregistrer</button>
</template>
 
<script> 
export default {
  name: "AddCurrency",
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