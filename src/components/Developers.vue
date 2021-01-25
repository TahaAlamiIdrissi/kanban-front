<template >
  <!-- USING THE BEM CONVENTION -->
  <div class="developers">
    <v-app>
      <v-data-table
        :headers="headers"
        :items="developers"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-app>
  </div>
</template>
<script>
import serviceFactory from "../services/serviceFactory";

export default {
  data: () => ({
    developers: [],
    headers: [
          {
            text: '#',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Firstname', value: 'firstname' },
          { text: 'Lastname', value: 'lastname' },
          { text: 'Password', value: 'password' },
          { text: 'Email', value: 'email' },
          { text: 'Start Contract', value: 'startContract' },
        ],
  }),
  async mounted() {
    await this.getAllDevelopers();
    console.log(this.developers);
  },
  methods: {
    async getAllDevelopers() {
      let response = await serviceFactory.developerService.getAllDevelopers();
      this.developers = response.data;
    },
  },
};
</script>
<style scoped>
</style>