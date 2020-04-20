<template>
  <v-app>
    <v-content>
      <v-container>
        <div class="my-2">
          <v-img src="@/assets/covid19_logo.png" contain height="150"></v-img>
        </div>
        <div v-if="countryData">
          <Cards :data="countryData" />
        </div>
        <div v-if="this.countries.length>0" align="center" class="mt-4">
          <CountryPicker :countries="this.countries" @countryChanged="countryChanged" />
        </div>

        <div v-if="this.country!='Global'">
          <div v-if="this.countryData">
            <BarChart :countryData="countryData" :country="country" />
          </div>
        </div>
        <div v-else>
          <div v-if="this.dailyData.length>0">
            <LineChart :dailyData="this.dailyData" />
          </div>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Cards from "./components/Cards";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import CountryPicker from "./components/CountryPicker";
export default {
  name: "App",
  components: {
    Cards,
    LineChart,
    BarChart,
    CountryPicker
  },
  data: () => ({
    country: "Global"
  }),
  computed: {
    ...mapGetters(["countryData", "countries", "dailyData"])
  },
  methods: {
    countryChanged(country) {
      this.country = country;
      if (country != "Global") {
        this.$store.dispatch("fetchData", country);
      } else {
        this.$store.dispatch("fetchData");
      }
    }
  },
  created() {
    this.$store.dispatch("fetchData");
    this.$store.dispatch("fetchDailyData");
    this.$store.dispatch("getchCountries");
  }
};
</script>
