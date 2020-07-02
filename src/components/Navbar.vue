<template>
   <nav>
        <v-snackbar v-model="snackbar" :timeout="4000" top color="green"> 
            <span>Awesome! You added a new project.</span>
            <template v-slot:action="{ attrs }">
                <v-btn text v-bind="attrs" @click="snackbar = false">Close</v-btn>
            </template>
        </v-snackbar>
        <v-app-bar app dark>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

            

            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninja</span>
            </v-toolbar-title>
            
            <v-spacer></v-spacer>

            <!-- Dropdown menu -->
            <v-menu bottom offset-y rounded="b-xl"> 
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark text
                    v-bind="attrs"
                    v-on="on"
                    >
                    <v-icon left>mdi-chevron-down</v-icon>
                    <span>Menu</span>
                    </v-btn>
                </template>    
                <v-list>
                    <v-list-item v-for="(link,index) in links" :key="index" :to="link.route">
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>    
                </v-list>
            </v-menu>
            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

        
        <v-navigation-drawer app v-model="drawer" color="secondary" > 
            <v-row>
                <v-col class="mt-5">
                    <v-row  justify="center" align="center">
                        <v-avatar size="100" ><img src="/avatar-1.png" alt="The net Ninja"></v-avatar>
                    </v-row>
                    <p class="white--text text-center text-subtitle-1 mt-1">THE NET NINJA</p>                    
                    <v-row justify="center" align="center" class="mt-4">
                        <Popup @projectAdded="snackbar = true" />
                    </v-row>
                </v-col>
            </v-row>
            
            <v-divider></v-divider>

            <v-list>
                <v-list-item v-for="(link,index) in links" :key="index" :to="link.route">
                    <v-list-item-action>
                        <v-icon color="white">mdi-{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
   </nav>
</template>

<script>
import Popup from './Popup'

export default {
    data(){
        return{
            drawer: false,
            links: [
                {icon: 'view-dashboard', text: 'Dashboard', route: '/'},
                {icon: 'folder', text: 'My Projects', route: '/projects'},
                {icon: 'account-group', text: 'Team', route: '/team'}
            ],
            snackbar: false
        }
    },
    components:{
        Popup
    }
}
</script>

<style>

</style>