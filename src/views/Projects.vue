<template>
    <div class="projects">
        <h1 class="subheading grey--text">Projects</h1>
        <v-container class="my-5">
            <v-expansion-panels>
                <v-expansion-panel v-for="(project,index) in filterProject" :key="index" class="px-4">
                    <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <div class="d-flex justify-end grey--text subtitle-2">Due By: {{ project.due }} </div>
                        {{ project.content }}
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-container>
          
    </div>  
</template>

<script>
import db from '@/fb.js'

export default {
    data(){
    return {
      projects: []
    }
  },
  computed:{
      filterProject(){
          return this.projects.filter((proj) => {
              return proj.person == 'The Net Ninja'
          });
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

</style>