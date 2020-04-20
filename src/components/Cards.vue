<template>
  <v-row>
    <v-col cols="12" md="4" sm="6">
      <v-card>
        <v-card-subtitle class="pb-0">Infected</v-card-subtitle>

        <v-card-text class="text--primary">
          <ICountUp :delay="500" :endVal="this.data.confirmed.value" />

          <div
            style="font-weight:400;font-size:14px;color:grey"
          >{{new Date(data.lastUpdate).toDateString()}}</div>
          <div>Number of active cases of COVID-19</div>
        </v-card-text>
        <div class="infected"></div>
      </v-card>
    </v-col>
    <v-col cols="12" md="4" sm="6">
      <v-card>
        <v-card-subtitle class="pb-0">Recovered</v-card-subtitle>

        <v-card-text class="text--primary">
          <ICountUp :delay="500" :endVal="this.data.recovered.value" />
          <div
            style="font-weight:400;font-size:14px;color:grey"
          >{{new Date(data.lastUpdate).toDateString()}}</div>
          <div>Number of recovered cases of COVID-19</div>
        </v-card-text>
        <div class="recovered"></div>
      </v-card>
    </v-col>
    <v-col cols="12" md="4" sm="6">
      <v-card>
        <v-card-subtitle class="pb-0">Deaths</v-card-subtitle>

        <v-card-text class="text--primary">
          <ICountUp :delay="500" :endVal="this.data.deaths.value" />
          <div
            style="font-weight:400;font-size:14px;color:grey"
          >{{new Date(data.lastUpdate).toDateString()}}</div>
          <div>Number of death cases of COVID-19</div>
        </v-card-text>
        <div class="death"></div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import ICountUp from "vue-countup-v2";
export default {
  props: ["data"],
  components: {
    ICountUp
  }
};
</script>

<style scoped>
.infected {
  border-bottom: 12px solid rgba(0, 0, 255, 0.5);
  padding: 0px;
  margin: 0px;
}

.recovered {
  border-bottom: 12px solid rgba(0, 255, 0, 0.5);
  padding: 0px;
  margin: 0px;
}

.death {
  border-bottom: 12px solid rgba(255, 0, 0, 0.5);
  padding: 0px;
  margin: 0px;
}
</style>