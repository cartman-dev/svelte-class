<script>
    let name;
    let beltColor;
    let age;
    let fighting = false;
    let sneaking = false;
    let running = false;

    const handleSubmit = () => {
        console.log(name, beltColor, age, fighting, sneaking, running);
    }
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={name}>
    <input type="text" placeholder="belt color" bind:value={beltColor}>
    <input type="number" placeholder="age" bind:value={age}>
    <label>Skills:</label>
    <input type="checkbox" bind:checked={fighting}>fighting<br>
    <input type="checkbox" bind:checked={sneaking}>sneaking<br>
    <input type="checkbox" bind:checked={running}>running<br>
	<button>Add Person</button>
</form>

<style>

</style>