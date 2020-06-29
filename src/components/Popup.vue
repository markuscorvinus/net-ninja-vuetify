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
          <v-card-title primary-title class="grey">Add New project</v-card-title>
          <v-card-text>
            <v-form class="py-3">
                <v-text-field prepend-icon="mdi-pencil" label="Title" v-model="title" color="green" />
                <v-textarea prepend-icon="mdi-folder" label="Project Information" v-model="content" color="green" />
            </v-form>               
          </v-card-text>
          <v-card-actions>
              <v-btn flat class="teal lighten-2 mx-0 mt-3" @click.stop="addProject">Add Project</v-btn>
          </v-card-actions>        
      </v-card>
    </v-dialog>    
</template>

<script>
export default {
    data(){
        return{
            title: '',
            content: ''
        }
    },
    methods:{
        addProject(){
            
        }
    }
}
</script>

<style>

</style>