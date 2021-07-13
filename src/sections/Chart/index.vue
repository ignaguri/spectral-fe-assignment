<template>
  <section class="s-chart">
    <div class="container" v-if="selectedAsset">
      <h2>{{ selectedAsset.name }}</h2>
      <h4 v-if="hasChildren">
        This asset has no data. Instead the sum of its children is used.
      </h4>
      <line-chart
        class="chart-container"
        :data="measurements"
        :options="chartOptions"
      ></line-chart>
    </div>
    <div class="container" v-else>
      <h2>No asset selected</h2>
      <h4>You can select an asset in the menu on the left</h4>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { LineChart } from "vue-chart-3";
import {
  SELECTED_ASSET,
  FETCH_MEASUREMENTS,
  GET_MEASUREMENTS_BY_ASSET,
} from "@/store/constants";

export default {
  name: "Chart",
  components: { LineChart },
  computed: {
    ...mapState([SELECTED_ASSET]),
    ...mapGetters([GET_MEASUREMENTS_BY_ASSET]),
    measurements() {
      const msmts = this.getMeasurementsByAsset;

      const formatter = new Intl.DateTimeFormat("en-US", {
        year: "2-digit",
        month: "short",
        timeZone: "UTC",
      });
      const labels = Object.keys(msmts).map((date) =>
        formatter.format(new Date(date))
      );

      return {
        labels,
        datasets: [
          {
            label: "Energy consumption",
            data: Object.values(msmts),
            fill: false,
            borderColor: "#0f7cad",
            tension: 0.5,
          },
        ],
      };
    },
    hasChildren() {
      return this.selectedAsset.children && this.selectedAsset.children.length;
    },
  },
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.$store.dispatch(FETCH_MEASUREMENTS);
  },
};
</script>

<style scoped lang="scss">
.s-chart {
  margin: auto 20px;
}

.container {
  margin: auto;
}

.chart-container {
  margin: auto;
  position: relative;
  height: 75vh;
  width: 70vw;
}

h4 {
  color: #ababab;
}
</style>
