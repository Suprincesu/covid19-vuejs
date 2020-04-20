<template>
  <Barchart :chartData="getCollection" :options="getOptions" />
</template>

<script>
import Barchart from "./BarGraphBuilder";
export default {
  components: {
    Barchart
  },
  props: ["countryData", "country"],
  computed: {
    getCollection: function() {
      return {
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(255,0,0,0.5)"
            ],

            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#249EBF",
            data: [
              this.countryData.confirmed.value,
              this.countryData.recovered.value,
              this.countryData.deaths.value
            ]
          }
        ]
      };
    },
    getOptions: function() {
      return {
        legend: {
          display: false
        },
        tooltips: {
          enabled: true,
          mode: "single",
          callbacks: {
            label: function(tooltipItems, data) {
              return tooltipItems.yLabel;
            }
          }
        },

        responsive: true,
        maintainAspectRatio: false,
        height: 200
      };
    }
  }
};
</script>