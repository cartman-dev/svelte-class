<script>
  import PollStore from '../stores/PollStore.js';
  import PollDetails from "../shared/PollDetails.svelte";

  export let polls = [];

  PollStore.subscribe(data => {
    polls = data;
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
