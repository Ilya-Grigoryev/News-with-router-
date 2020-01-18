<template>
  <v-app>
    <v-navigation-drawer
      style="position:fixed; top:0; left:0; overflow-y:scroll;"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >

        <v-list-item>
          <v-list-item-content>
            <router-link to="/us">Ameriсa</router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <router-link to="/ru">Russia</router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <router-link to="/ua">Ukraina</router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <router-link to="/de">Germany</router-link>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <router-link to="/bg">Bulgaria</router-link>
          </v-list-item-content>
        </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">{{name}}</span>
      </v-toolbar-title>

      <v-col md="5" @keyup.enter="Search()">
      <v-text-field
        v-model="inquiry"
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Enter keyword and press 'Enter'"
        class="hidden-sm-and-down"
      />
      </v-col>
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          /></v-avatar>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container
        class="fill-height"
        fluid>
        
          

      </v-container>
    </v-content>
    <router-view/>
  </v-app>
</template>

<script>
  export default {
    data () {
      return{
      dialog: false,
      drawer: null,
      name: 'News',
      inquiry: '',
    }},
    methods:{
      Search(){
        
      }
    }
  }
</script>

<style>

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

</style>
