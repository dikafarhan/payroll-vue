<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-fixed-top"
  >
    <a class="navbar-brand" href="#">IOT Dashboard</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <span class="navbar-nav mr-auto" v-if="user" style="margin-top:10px">
        <!--end navbar-right -->
        <li class="nav-item">
          <router-link :to="{ name: 'dashboard' }">Dashboard</router-link>
        </li>
           <li class="nav-item">
          <router-link :to="{ name: 'vegetable' }">Vegetables</router-link>
        </li>
          <li class="nav-item">
          <router-link :to="{ name: 'Vegetablelist' }">Vegetable List</router-link>
        </li>
        <li class="nav-item">
          <a href="#" @click="logout">Logout</a>
        </li>
        <span>Hi,{{ getuser.name }}</span>
      </span>
      <span v-else>
        <router-link :to="{ name: 'register' }">Register</router-link>
        <router-link :to="{ name: 'login' }">Login</router-link>
      </span>
    </div>
  </nav>
</template>
<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    function logout() {
      store.dispatch("auth/logout").then(() => {
        router.push({
          name: "login",
        });
      });
    }
    const user = computed(() => {
      return store.getters["auth/isLoggedIn"];
    });
    const users = onMounted(() => {
      store.dispatch("auth/getUser");
    });
    const data_sensor = onMounted(() => {
      store.dispatch("auth/get_sensor");
      //use your own credentials you get from Pusher
    });
    const data = computed(() => {
      return store.state.auth.ultrasonik;
    });
    const getuser = computed(() => {
      return store.getters["auth/currentUser"];
    });
    return {
      store,
      user,
      users,
      getuser,
      router,
      logout,
      data_sensor,
      data,
    };
  },
};
</script>
<style scoped>
a {
  color: rgba(0, 0, 0, 0.5);
  margin-top: -7px;
  text-decoration: none;
  margin-right: 23px;
  font-weight: 600;
}
</style>
