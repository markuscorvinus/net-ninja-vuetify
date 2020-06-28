<template>
    <div class="team">
        <h1 class="subheading grey--text">Team</h1>
        <v-container class="my-5">
            <v-row>
                <v-col xs12 sm6 md4 lg3 
                    v-for="(person,index) in team" 
                    :key="index"
                >
                    <v-card class="text-center ma-3" color="blue lighten-2">
                        <v-responsive class="pt-4">
                            <v-avatar size="64"><img :src="person.avatar" :alt="person.name"></v-avatar>
                        </v-responsive>
                        <v-card-text>
                            <div class="text-h6">{{ person.name }}</div>
                            <div class="dark">{{ person.role }}</div>
                        </v-card-text>

                        <v-card-actions>
                            <v-row>
                                <v-col justify-center>
                                    <v-btn flat color="grey lighten-3">
                                        <v-icon small left>mdi-message</v-icon>
                                        <span>Message Me</span>
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card-actions>        
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            team: [
                { name: 'The Net Ninja', role: 'Web developer', avatar: '/avatar-1.png'},
                { name: 'Ryu', role: 'Graphic designer', avatar: '/avatar-2.png'},
                { name: 'Chun Li', role: 'Web developer', avatar: '/avatar-3.png'},
                { name: 'Gouken', role: 'Social media maverick', avatar: '/avatar-4.png'},
                { name: 'Yoshi', role: 'Sales guru', avatar: '/avatar-5.png'}
            ]
        }
    }
}
</script>

<style>

</style>