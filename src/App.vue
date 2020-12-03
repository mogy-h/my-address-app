<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon
        @click.stop="toggleSideMenu"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>マイアドレス張</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
      <side-nav></side-nav>

    <v-main>
      <v-container fluid fill-height align-start>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import SideNav from "./components/SideNav";
export default {
  name: "App",

  components: { SideNav },

  data: () => ({
    //
  }),
  methods: {
    ...mapActions(["toggleSideMenu"]),
  },
};
</script>
