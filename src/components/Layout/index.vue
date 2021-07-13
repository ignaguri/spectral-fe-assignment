<template>
  <header>Spectral Front-end assignment</header>
  <div class="container">
    <div class="sidebar">
      <slot name="sidebar"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>

<style scoped lang="scss">
header {
  background-color: #1595c5;
  color: #fff;
  font-size: 1.5em;
  height: 5vh;
  text-align: center;
}

.container {
  display: flex;
  justify-content: flex-start;
}

.sidebar {
  min-width: 12em;
  margin-right: 1em;
}
</style>
