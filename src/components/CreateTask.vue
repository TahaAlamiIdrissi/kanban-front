<template >
  <div class="createTask">
    <v-app>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="Task.title"
                :counter="10"
                label="title"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="Task.created"
                :counter="10"
                label="created"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="Task.nbHoursForecast"
                label="nbHoursForecast"
                type="number"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="Task.nbHoursReal"
                label="nbHoursReal"
                type="number"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-select
                :items="this.Tasks.developers.map((e) => e.firstname)"
                label="developers"
                v-model="Task.developer"
              ></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <v-select
                :items="this.Tasks.status.map((e) => e.label)"
                label="status"
                v-model="Task.status"
              ></v-select>
            </v-col>
            <v-col cols="12" md="4">
              <v-select
                :items="this.Tasks.types.map((e) => e.label)"
                label="types"
                v-model="Task.type"
              ></v-select>
            </v-col>
          </v-row>

          <v-btn color="success" class="mr-4" @click="createTask">
            Validate
          </v-btn>
        </v-container>
      </v-form>
    </v-app>
  </div>
</template>
<script>
import serviceFactory from "../services/serviceFactory";

export default {
  data: () => ({
    Task: {
      title: "",
      created: null,
      nbHoursForecast: 0,
      nbHoursReal: 0,
      status: null,
      type: null,
      developer: null,
    },
    Tasks: {
      status: [],
      types: [],
      developers: [],
    },
  }),
  async mounted() {
    await this.getAllDevelopers();
    await this.getAllTaskStatus();
    await this.getAllTaskTypes();
  },
  methods: {
    // submit() {},
    async getAllTaskStatus() {
      let response = await serviceFactory.taskService.getAllTaskStatus();
      this.Tasks.status = response.data;
    },
    async getAllTaskTypes() {
      let response = await serviceFactory.taskService.getAllTaskTypes();
      this.Tasks.types = response.data;
    },
    async getAllDevelopers() {
      let response = await serviceFactory.developerService.getAllDevelopers();
      this.Tasks.developers = response.data;
    },
    async createTask() {
        let response = await serviceFactory.taskService.createTask(this.Task);
        console.log(response);
    },
  },
};
</script>
<style scoped>
</style>