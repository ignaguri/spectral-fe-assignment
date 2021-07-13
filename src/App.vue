<template>
  <Layout>
    <template #sidebar>
      <sidebar></sidebar>
    </template>
    <template #content>
      <chart></chart>
    </template>
  </Layout>
</template>

<script>
import Layout from "./components/Layout";
import Sidebar from "./sections/Sidebar";
import Chart from "./sections/Chart";

export default {
  name: "App",
  components: {
    Layout,
    Sidebar,
    Chart,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
