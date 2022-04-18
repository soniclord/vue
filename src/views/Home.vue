<template>
  <div>
    <h1>Main page here</h1>
    <router-link :to="{ name: 'Search' }">x123</router-link>

    <h1>counter test: {{ counter.count }}</h1>

    <button
      class="btn btn-primary"
      data-bs-target="#collapseTarget"
      data-bs-toggle="collapse"
    >
      Bootstrap collapse
    </button>
    <div class="collapse" id="collapseTarget">
      This is the toggle-able content!
    </div>
  </div>
</template>

<script>
import { useCounterStore } from "@/stores/counter";

export default {
  name: "PageDefault",
  props: {
    msg: String,
  },

  data: function () {
    const counter = useCounterStore();
    counter.increment();

    return {
      counter,
    };
  },
};
</script>
