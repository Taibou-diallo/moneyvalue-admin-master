<template>
    <h2>La liste des conversions </h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">La date de conversion</th>
            <th scope="col">Le montant</th>
            <th scope="col">Le nombre de conversion</th>
          </tr>
        </thead>
   
        <tbody>
          <tr>
              <td>12/12/12</td>
              <td>1234543</td>
              <td>53</td>
            </tr>
        </tbody>
     </table>
</template>

<script>


export default {
    name: "ViewConversion",

    
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