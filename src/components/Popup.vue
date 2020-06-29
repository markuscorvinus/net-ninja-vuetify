<template>
    <v-dialog max-width="600px">
        <template v-slot:activator="{ on, attrs }">
            <v-btn color="grey darken-4 grey--text text--lighten-1" 
            v-bind="attrs" v-on="on">
            <v-icon left>mdi-pencil-box</v-icon>
            <span>Create Project</span>
            </v-btn>
      </template>
      <v-card>
          <v-card-title>Add new project</v-card-title>
      </v-card>
    </v-dialog>    
</template>

<script>
export default {

}
</script>

<style>

</style>