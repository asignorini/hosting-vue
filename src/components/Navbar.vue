<template>
  <header class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <h1>Hostingar</h1>
      </a>
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
        <ul class="navbar-nav ml-auto">
          <template v-if="authUser.email === null">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                <i class="fas fa-home"></i> Inicio
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/plans" class="nav-link">
                <i class="fas fa-cloud"></i> Planes
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login"
                ><i class="fas fa-sign-in-alt"></i> Ingresar</router-link
              >
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link to="/admin/plans" class="nav-link">
                <i class="fas fa-receipt"></i> Administrar planes
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/chats" class="nav-link">
                <i class="fas fa-comments"></i> Chat
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/admin/profile"
                ><i class="fas fa-user-circle"></i> Perfil</router-link
              >
            </li>
            <li class="nav-item">
              <button type="button" class="btn nav-link" @click="goLogout">
                <i class="fas fa-sign-out-alt"></i> Cerrar Sesión | {{ authUser.email }}
              </button>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { logout } from "../services/auth.js";
import useAuth from "../composition/useAuth.js";
import { useRouter } from "vue-router";

export default {
  name: "Nabvar",
  setup() {
    const { authUser } = useAuth();
    const router = useRouter();
    function goLogout() {
      logout().then(() => {
        router.push({
          name: "login",
        });
      });
    }

    return {
      authUser,
      goLogout,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 0;
  background: url(../assets/imgs/hostingar-logo.png) no-repeat center center;
  width: 120px;
  height: 79px;
  margin-bottom: 0;
}

.navbar-light .navbar-nav .nav-link {
  color: rgb(0 0 0);
}

.navbar-nav li:last-child .nav-link {
  border: 1px solid #f3a161;
  border-radius: 15px;
  padding-left: 15px;
  padding-right: 15px;
}

.navbar-light .navbar-nav .nav-link:focus,
.navbar-light .navbar-nav .nav-link:hover {
  color: rgb(241 98 44);
}
</style>
