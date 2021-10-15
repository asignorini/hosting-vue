<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
        <ul class="navbar-nav ml-auto align-items-center">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <i class="fas fa-home"></i> Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/enter"
              >Entrar</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>

export default {
  name: "Nabvar",
};
</script>
