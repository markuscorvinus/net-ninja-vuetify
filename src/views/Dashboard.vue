<template>
  <div class="dashboard">
      <h1 class="subheading grey--text">Dashboard</h1>

      <v-container class="my-5">

        <v-row class="mb-3">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">  
              <v-btn small text color="grey" class="mx-3" 
                @click="sortBy('title')" 
                v-bind="attrs"
                v-on="on">
                <v-icon left small>mdi-folder</v-icon><span class="caption text-lowercase">by project name</span>
              </v-btn>
            </template>
            <span>Sort by Title</span>
          </v-tooltip>
          
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">  
              <v-btn small text color="grey" class="mx-3" 
                @click="sortBy('person')" 
                v-bind="attrs"
                v-on="on">
                <v-icon left small>mdi-folder</v-icon><span class="caption text-lowercase">by person name</span>
              </v-btn>
            </template>
            <span>Sort by Person</span>
          </v-tooltip>
        </v-row>

        <v-card flat v-for="(project, index) in projects" :key="index">
          <v-row :class="`pa-3 project ${project.status}`">
            <v-col xs12 md6>
              <div class="caption grey--text">Project Title</div>  
              <div>{{ project.title }}</div>
            </v-col>
            <v-col xs6 sm4 md2>
              <div class="caption grey--text">Person</div>  
              <div>{{ project.person }}</div>
            </v-col>
            <v-col xs6 sm4 md2>
              <div class="caption grey--text">Due Date</div>  
              <div>{{ project.due }}</div>
            </v-col>
            <v-col xs6 sm4 md2>
              <div class="text-right">
                <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </v-card>
      </v-container>

  </div>  
</template>

<script>
// @ is an alias to /src
import db from '@/fb.js'

export default {
  name: 'Home',
  data(){
    return {
      projects: []
    };
  },
  components: {
  },
  methods: {
    sortBy (prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1 )
    }
  },
  created(){
    db.collection('projects').onSnapshot( res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if(change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      });
    })
  }

}
</script>


<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete{
  background: #3cd1c2 !important;
}
.v-chip.ongoing{
  background: #ffaa2c !important;
}
.v-chip.overdue{
  background: #f83e70 !important;
}
</style>