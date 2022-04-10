<template>
  <div class="not-found"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style scoped lang="less">
.not-found {
  height: 100%;
  width: 100%;
  background: url("../../assets/img/404.webp") no-repeat center;
}
</style>
