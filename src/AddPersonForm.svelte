<script>
    let name;
    let beltColor;
    let age;
    let skills = [];

    const handleSubmit = () => {
        console.log(name, beltColor, age, skills);
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name}>
    <input type="text" placeholder="belt color" bind:value={beltColor}>
    <input type="number" placeholder="age" bind:value={age}>
    <label>Skills:</label>
    <input type="checkbox" bind:group={skills} value="fighting">fighting<br>
    <input type="checkbox" bind:group={skills} value="sneaking">sneaking<br>
    <input type="checkbox" bind:group={skills} value="running">running<br>
    	<button>Add Person</button>
</form>

<style>

</style>