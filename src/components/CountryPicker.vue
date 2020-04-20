<template>
  <v-select
    :items="this.countries"
    label="Select Country"
    style="width:300px;"
    dense
    @change="countrySelected"
  ></v-select>
</template>

<script>
export default {
  props: ["countries"],
  methods: {
    countrySelected(country) {
      this.$emit("countryChanged", country);
    }
  }
};
</script>