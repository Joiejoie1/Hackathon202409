<script lang="ts">
  import { store } from "../store";

  import spinner from "../assets/loading.gif";
  import iclogo from "/internet-computer.svg";

  export let loading;
  export let toggleModal;

  async function connect() {
    loading = "internetidentity";
    store.internetIdentityConnect();
    loading = "";
    toggleModal();
  };
</script>

<a
  class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow cursor-pointer"
  on:click={connect}
  disabled={loading}
>
  {#if loading === "internetidentity"}
    <img class="h-6 block" src={spinner} alt="loading animation" />
  {:else}
    <img class="h-3" src={iclogo}  alt="ic wallet" />
    <span class="flex-1 ms-3 whitespace-nowrap">Internet Identity</span>
  {/if}
</a>
