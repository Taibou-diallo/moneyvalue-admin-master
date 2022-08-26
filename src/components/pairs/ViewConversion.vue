<template>
    <h2>Currency Converter</h2>
    <div id="currency">
        <div class="container">
            <div class="container-one">
                <select name="first-currency" id="first-currency">
                    <option selected>Choisir la seconde devise</option>
                    <option value="1">EUR</option>
                    <option value="2">USD</option>
                    <option value="3">CAD</option>
                </select>
                <input type="number" name="input-one" id="input-one">
            </div>
            <div class="container-two">
                <button>voir</button>
                <h4 id="baseValue">12345 </h4>
            </div>

            <div class="container-three">
                <select name="seond-currency" id="second-currency">
                    <option selected>Choisir la seconde devise</option>
                    <option value="1">EUR</option>
                    <option value="2">USD</option>
                    <option value="3">CAD</option>
                </select>
                <input type="number" id="amout-two" placeholder="0" disabled/>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:"ViewConversion",
}

</script>

<style scoped>
 
select{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
}

#currency,.container.container-two{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    text-align: center; 
}

.container-two{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
}

.container-two-button {
    padding: 5px;
    font-size: 18px;
    background: #FF8C00;
    color:#ffff;
    width:30%;
    border: none;
    outline: none;
}

</style>