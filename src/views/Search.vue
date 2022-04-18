<template>
  <div>
    <h1>Search page here</h1>
  </div>
</template>

<script>
import { GetWords } from "../api/words";

export default {
  name: "PageSearch",

  props: {
    msg: String,
  },

  mounted: function () {
    GetWords().then(function (response) {
      const data = response.data.Data;
      const words = {};
      data.forEach((pair) => (words[pair.path] = pair.value));
      console.log(response.data.Data);
    });
  },
};
</script>
