<template>
  <div class="dashboard">
      <h1 class="subheading grey--text">Dashboard</h1>
      <v-container class="my-5">
        <v-card class="pa-5">
          <v-row>
            <v-flex xs12 md6>
              <div class="caption grey--text">Project Title</div>  
              <div>create a new website</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Person</div>  
              <div>The Net Ninja</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Due Date</div>  
              <div>2020-06-28</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="caption grey--text">Status</div>  
              <div>Complete</div>
            </v-flex>
          </v-row>
        </v-card>
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
