<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <!-- 
        /******************************************
        @click="$router.push({name: 'home'})"
        @click="$router.push({path: '/home'})"
        @click="$router.push('/home')"  
        ******************************************/
        -->
        <!-- <v-list-item @click="$router.push({name: 'home'})"> -->
        <v-list-item router :to="{ name: 'home' }" exact>
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="{ name: 'about' }" exact>
          <v-list-item-action>
            <v-icon>about</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          router
          :to="{
            name: 'users',
            params: {
              userId: 4321,
              name: 'hoza'
            },
            query: {
              group: 'member',
              category: 'trial'
            }
          }"
          exact
        >
          <v-list-item-action>
            <v-icon>users</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Users :: Parameter</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item router :to="{ name: 'users2' }" exact>
          <v-list-item-action>
            <v-icon>users2</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Users2 :: Children</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer color="indigo" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  methods: {
    test() {
      alert("클릭");
    }
  }
};
</script>
