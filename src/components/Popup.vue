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
            <v-form class="py-3" ref="form">
                <v-text-field prepend-icon="mdi-pencil" 
                  label="Title" 
                  v-model="title" 
                  color="green" 
                  :rules="inputRules"
                />
                <v-textarea prepend-icon="mdi-folder" 
                  label="Project Information" 
                  v-model="content" 
                  color="green" 
                  :rules="inputRules"
                />
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      :value="computedDateFormatted"
                      label="Picker in menu"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="due" no-title scrollable  @input="menu = false"></v-date-picker>
                </v-menu>
                <v-btn text class="teal lighten-2 mx-0 mt-3" @click.stop="addProject">Add Project</v-btn>
            </v-form>               
          </v-card-text>          
      </v-card>
    </v-dialog>    
</template>

<script>
import { format } from 'date-fns'
import db from '@/fb.js'


export default {
    data(){
        return{
            title: '',
            content: '',
            menu: false,
            due: new Date().toISOString().substr(0, 10),
            inputRules: [
              v => v.length >= 3 || 'Minimum length is 3 characters' 
            ]
        }
    },
    computed: {
        computedDateFormatted(){
            return this.due ? format(new Date(this.due), 'do MMM yyyy') : ''
        }
    },
    methods:{
        addProject(){
          if(this.$refs.form.validate()){
            const project = {
              title: this.title,
              content: this.content,
              due: this.computedDateFormatted,
              person: 'The Net Ninja',
              status: 'ongoing'
            }

            db.collection('projects').add(project)
            .then(() => {
              console.log(`success`);
            });
          }
        },        
    }
}
</script>

<style>

</style>