import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const url = "https://covid19.mathdro.id/api";
export default new Vuex.Store({
  state: {
    countryData: '',
    dailyData: [],
    countries: [],
  },
  getters: {
    countryData: (state) => state.countryData,
    dailyData: (state) => state.dailyData,
    countries: (state) => state.countries,
  },
  mutations: {
    FETCH_COUNTRY_DATA_SUCCESS(state, data) {
      state.countryData = data;
    },
    FETCH_DAILY_DATA_SUCCESS(state, data) {
      state.dailyData = data;
    },
    FETCH_COUNTRIES_SUCCESS(state, data) {
      state.countries = data;
    },
  },
  actions: {
    async fetchData({ commit }, country) {
      try {
        let changeableUrl = url;
        if (country) {
          changeableUrl = `${url}/countries/${country}`;
        }
        const { data } = await axios.get(changeableUrl);
        commit("FETCH_COUNTRY_DATA_SUCCESS", data);
      } catch (e) {}
    },
    async fetchDailyData({ commit }) {
      try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
          confirmed: dailyData.confirmed.total,
          deaths: dailyData.deaths.total,
          date: dailyData.reportDate,
        }));
        commit("FETCH_DAILY_DATA_SUCCESS", modifiedData);
      } catch (e) {}
    },
    async getchCountries({ commit }) {
      try {
        const { data } = await axios.get(`${url}/countries`);
        commit("FETCH_COUNTRIES_SUCCESS", [
          "Global",
          ...data.countries.map(({ name }) => name),
        ]);
      } catch (e) {}
    },
  },
  modules: {},
});
