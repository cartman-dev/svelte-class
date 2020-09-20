<script>
  import PollStore from "../stores/PollStore.js";
  import PollDetails from "../shared/PollDetails.svelte";
  import { onDestroy, onMount } from "svelte";

  export let polls = [];

  const unsub = PollStore.subscribe((data) => {
    polls = data;
  });

  onMount(() => {
    // Maybe get data
    console.log("Component mounted.");
  });

  onDestroy(() => {
    // Maybe unsubscribe
    console.log("Destroyed");
    unsub();
  });
</script>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>

<div class="poll-list">
  {#each polls as poll (poll.id)}
    <PollDetails {poll} on:vote />
  {/each}
</div>
