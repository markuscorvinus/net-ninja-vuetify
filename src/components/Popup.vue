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
                <v-menu
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      :value="date"
                      label="Due Date"
                      hint="MM/DD/YYYY format"
                      persistent-hint
                      prepend-icon="mdi-calendar"
                      @blur="date = parseDate(dateFormatted)"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
                </v-menu>
                <v-btn flat class="teal lighten-2 mx-0 mt-3" @click.stop="addProject">Add Project</v-btn>
            </v-form>               
          </v-card-text>          
      </v-card>
    </v-dialog>    
</template>

<script>
export default {
    data(){
        return{
            title: '',
            content: '',
            date: ''
        }
    },
    computed: {
        computedDateFormatted(){
            return this.date;
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