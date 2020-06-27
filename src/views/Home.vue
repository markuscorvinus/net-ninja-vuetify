<template>
  <div class="home">
    <h1>Home Page</h1>
    <v-btn color="pink">click me</v-btn>    
    <v-btn depressed color="pink">click me</v-btn>    
    <v-btn text color="pink">click me</v-btn>  

    <v-btn depressed class="pink white--text">
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>    

    <v-btn depressed class="pink white--text" small>
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>    

    <v-btn depressed dark color="purple" large>
      <span>email me</span>
      <v-icon right large>mdi-email</v-icon>
    </v-btn>    

    <v-btn depressed dark color="purple" large fab>
      <v-icon>mdi-heart</v-icon>
    </v-btn>    
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
