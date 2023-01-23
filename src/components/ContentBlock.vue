<template>
  <v-container>
    <v-row
        align="start"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>

      <v-col
          cols="12"
          md="4"
      >
       
        <FilterByCountry />
        <FilterByScore />
        <loader v-if="$store.state.filtesActive.loading" object="#3FFDF7" color1="#443FFD" color2="#4BA2FA" size="5" speed="2" bg="#343a40" objectbg="#999793" opacity="80" name="circular"></loader>

      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <v-card
            max-width="450"
            class="mx-auto"
        >
          
            <UsersList :users="USERS_FILTERED" />
          
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import FilterByCountry from './FilterByCountry';
  import FilterByScore from './FilterByScore';
  import UsersList from './UsersList';
  
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'ContentBlock',
    components: {
      FilterByCountry,
      FilterByScore,
      UsersList
    },

    data: () => ({
      variant: 'default',
    }),

    computed: {
      ...mapGetters([
          'USERS_FILTERED'
      ])
    },

    methods:{
      ...mapActions([
          'GET_USERS'
      ])
    },

    mounted() {
      this.GET_USERS()
    }

  }
  
</script>
