<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ["dailyData"],
  mounted() {
    this.renderChart(
      {
        labels: this.dailyData.map(({ date }) => date),
        datasets: [
          {
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
            data: this.dailyData.map(({ confirmed }) => confirmed)
          },
          {
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
            data: this.dailyData.map(({ deaths }) => deaths)
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>