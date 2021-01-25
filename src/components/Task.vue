<template >
  <!-- USING THE BEM CONVENTION -->
  <div class="task">
    <v-app>
      <v-data-table
        :headers="headers"
        :items="tasks"
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
    tasks: [],
    headers: [
          {
            text: '#',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'title', value: 'title' },
          { text: 'N° hours Forecast', value: 'nbHoursForecast' },
          { text: 'N° hours Real', value: 'nbHoursReal' },
          { text: 'Created', value: 'created' },
          { text: 'Type', value: 'type.label' },
          { text: 'Status', value: 'status.label' },

        ],
  }),
  async mounted() {
    await this.getAllTasks();
    console.log(this.tasks);
  },
  methods: {
    async getAllTasks() {
      let response = await serviceFactory.taskService.getAllTasks()
      this.tasks = response.data;
    },
  },
};
</script>
<style scoped>
</style>