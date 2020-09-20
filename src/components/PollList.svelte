<script>
  import PollStore from "../stores/PollStore.js";
  import PollDetails from "../shared/PollDetails.svelte";
</script>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <PollDetails {poll} on:vote />
  {/each}
</div>
