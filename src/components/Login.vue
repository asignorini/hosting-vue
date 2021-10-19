<template>
  <section class="container form-login">
    <div class="row justify-content-between align-items-center header-row">
      <div class="col-md-7">
        <img
          src="../assets/imgs/login.jpg"
          alt="foto de servidores"
          class="img-fluid"
        />
      </div>
      <div class="col-md-4">
        <h2 class="text-center mb-5">Inicia sesión con tus credenciales</h2>
        <form action="#" method="post" class="mb-5" @submit.prevent="goLogin()">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              v-model="user.email"
            />
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input
              type="password"
              class="form-control"
              name="password"
              id="password"
              v-model="user.password"
            />
          </div>
          <button type="submit" class="btn btn-primary w-100">Ingresar</button>
        </form>
        <p>Aún no tienes cuenta?</p>
        <router-link to="/register" class="nav-link p-0">
          <i class="fas fa-id-badge"></i> Regístrate
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { login } from "../services/auth.js";

export default {
  name: "Login",
  data: () => ({
    user: {
      email: "",
      password: "",
    },
  }),
  methods: {
    goLogin() {
      login(this.user.email, this.user.password)
        .then(() => {
            this.user = {
              email: "",
              password: ""
            };
            this.$router.push({ name: "adminPlans" });
      });
    },
  },
};
</script>

<style scoped>
.form-login {
  padding-top: 5rem;
}
.form-login h2 {
  font-size: 2rem;
  font-weight: 800;
}

.form-login img {
  border-radius: 1rem;
}

.header-row {
  height: calc(80vh - 105px);
}
</style>