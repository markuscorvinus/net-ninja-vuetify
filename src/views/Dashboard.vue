<template>
  <div class="dashboard">
      <h1 class="subheading grey--text">Dashboard</h1>
      <v-container class="my-5">
        <v-row>
          <v-flex xs12 md6 >
            <v-btn outlined block color="primary">Click Me</v-btn>
          </v-flex>
          <v-flex xs4 md2 >
            <v-btn outlined block color="primary">Click Me1</v-btn>
          </v-flex>
          <v-flex xs4 md2 >
            <v-btn outlined block color="primary">Click Me2</v-btn>
          </v-flex>
          <v-flex xs4 md2 >
            <v-btn outlined block color="primary">Click Me3</v-btn>
          </v-flex>
        </v-row>

        <v-row justify="center">
          <v-flex xs4 md3>
            <v-btn outlined block color="success">1</v-btn>
          </v-flex>
          <v-flex xs4 md3>
            <v-btn outlined block color="success">2</v-btn>
          </v-flex>
        </v-row>
      </v-container>
  </div>  
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
