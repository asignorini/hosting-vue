<template>
  <section>
    <h2 class="text-center mb-5">Registrate en Hostingar</h2>
    <form
      action="#"
      method="post"
      class="w-50 m-auto"
      @submit.prevent="goRegister()"
    >
      <div class="form-group">
        <label for="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          class="form-control"
          v-model="user.name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          class="form-control"
          v-model="user.email"
        />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          class="form-control"
          v-model="user.password"
        />
      </div>
      <div class="form-group">
        <label for="password-repeat">Vuelve a introducir la contraseña</label>
        <input
          type="password"
          name="password-repeat"
          id="password-repeat"
          class="form-control"
          v-model="user.repeatPassword"
        />
      </div>
      <button type="submit" class="btn btn-primary w-100">Registrarse</button>
    </form>
  </section>
</template>

<script>
import { register } from "../services/auth";

export default {
  name: "Register",
  data: () => ({
    user: {
      name: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
  }),
  methods: {
    goRegister() {
      if (this.user.password !== this.user.repeatPassword) {
        console.log("Las contraseñas deben coincidir");
      } else {
        register(this.user.email, this.user.password)
          .then(() => {
            this.user = {
              name: "",
              email: "",
              password: "",
              repeatPassword: "",
            };
            this.$router.push({ name: "home" });
        });
      }
    },
  },
};
</script>

<style scoped>
</style>