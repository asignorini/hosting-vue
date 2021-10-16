<template>
  <div class="home">
    <section class="index-header">
      <div class="container h-100">
        <div class="row align-items-center header-row">
          <ul class="col-md-5 mb-0">
            <li>
              <h2 class="header-title mb-4">
                El mejor <span class="d-block">Hosting Web</span>
              </h2>
            </li>
            <li>
              <p class="header-subtitle">
                Comienza tu experiencia con nuestra promoción inicial de
                <strong><del>$800</del> $400/mes*</strong>
              </p>
            </li>
            <li>
              <p class="mb-4">
                Todo lo que necesitas para el manejo y alojamiento de tu sitio,
                en un solo lugar.
              </p>
            </li>
            <li>
              <button class="btn btn-call-to-action">Comienza ahora!</button>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-padding-top">
      <div class="container">
        <div class="row">
          <ul class="col text-center mb-5">
            <li>
              <h3 class="h3-title">Características generales</h3>
            </li>
            <li>
              <p class="mb-5">
                Nuestra revolucionaria solución es poderosa, simple y
                sorprendentemente asequible
              </p>
            </li>
          </ul>
        </div>
        <div class="row">
          <ul class="col-md-4 d-flex">
            <li><i class="fas fa-upload features-icon"></i></li>
            <li>
              <h4 class="features-subtitle">Actualizaciones automáticas</h4>
              <p>
                Despreocúpese de andar perdiendo tiempo con actualizaciones
                tediosas
              </p>
            </li>
          </ul>
          <ul class="col-md-4 d-flex">
            <li><i class="fas fa-sliders-h features-icon"></i></li>
            <li>
              <h4 class="features-subtitle">Software optimizado</h4>
              <p>
                Despreocúpese de andar perdiendo tiempo con actualizaciones
                tediosas
              </p>
            </li>
          </ul>
          <ul class="col-md-4 d-flex">
            <li><i class="fas fa-globe features-icon"></i></li>
            <li>
              <h4 class="features-subtitle">Amplia red</h4>
              <p>
                Despreocúpese de andar perdiendo tiempo con actualizaciones
                tediosas
              </p>
            </li>
          </ul>
          <ul class="col-md-4 d-flex">
            <li><i class="fas fa-shield-virus features-icon"></i></li>
            <li>
              <h4 class="features-subtitle">Protección</h4>
              <p>
                Despreocúpese de andar perdiendo tiempo con actualizaciones
                tediosas
              </p>
            </li>
          </ul>
          <ul class="col-md-4 d-flex">
            <li><i class="fas fa-headphones-alt features-icon"></i></li>
            <li>
              <h4 class="features-subtitle">Soporte gratuito</h4>
              <p>
                Despreocúpese de andar perdiendo tiempo con actualizaciones
                tediosas
              </p>
            </li>
          </ul>
          <ul class="col-md-4 d-flex">
            <li><i class="fas fa-archive features-icon"></i></li>
            <li>
              <h4 class="features-subtitle">Resguardos diarios</h4>
              <p>
                Despreocúpese de andar perdiendo tiempo con actualizaciones
                tediosas
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-padding-top newsletter">
      <ul class="container form-area">
        <li class="offset-md-2 col-md-8 text-center mb-5">
          <h3 class="h3-title">Empieza hoy!</h3>
          <p>
            Puedes ponerte en contacto con nosotros para cualquier consulta
            relacionada con el alojamiento web. Con gusto te ayudaremos!
          </p>
        </li>
        <li class="offset-md-3 col-md-6">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" class="form-text text-muted"
                >Nunca compartiremos tus datos con nadie.</small
              >
            </div>
            <div class="form-group">
              <label for="exampleInputName1">Nombre</label>
              <input type="text" class="form-control" id="exampleInputName1" />
            </div>
            <div class="form-group form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1"
                >Envienme novedades sobre sus productos</label
              >
            </div>
            <button type="submit" class="btn btn-call-to-action w-100 py-3">
              Quiero que me contacten!
            </button>
          </form>
        </li>
        <li class="offset-md-4 col-md-4 text-center mt-5">
          <p>Aceptamos</p>
          <ul class="d-flex justify-content-center p-0">
            <li><i class="fab fa-cc-visa payments"></i></li>
            <li><i class="fab fa-cc-paypal payments"></i></li>
            <li><i class="fab fa-cc-amex payments"></i></li>
          </ul>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
section {
    padding-top: 5rem;
}
.index-header {
  background: url(../assets/imgs/home.jpg) no-repeat;
  background-size: contain;
  width: 100%;
  min-height: 700px;
}

.header-row {
  height: calc(80vh - 105px);
}

.header-title {
  font-size: 4rem;
  font-weight: 800;
}

.header-subtitle {
  font-size: 1.5rem;
  font-weight: 800;
}

.btn-call-to-action {
  background: royalblue;
  border-radius: 30px;
  padding: 15px 30px;
  color: white;
}

.btn-call-to-action:hover {
  color: lightgrey;
}

.features-icon {
    font-size: 2.5rem;
    color: orangered;
    margin-right: 1rem;
}

.h3-title {
    font-size: 2.5rem;
    font-weight: 800;
}

.features-subtitle {
    font-weight: 600;
}

.form-area {
    position: relative;
    background: #f2f2f2;
    padding-top: 5rem;
    padding-bottom: 5rem;
    border-radius: 20px;
}

.form-area:after {
    background: #f2f2f2;
    position: absolute;
    left: 0;
    bottom: -25px;
    width: 50.5%;
    height: 40px;
    content: "";
    -webkit-transform: rotate(3deg);
    -moz-transform: rotate(3deg);
    -ms-transform: rotate(3deg);
    -o-transform: rotate(3deg);
    transform: rotate(3deg);
    z-index: 9;
}

.form-area:before {
    background: #f2f2f2;
    position: absolute;
    right: 0;
    bottom: -25px;
    width: 50.5%;
    height: 40px;
    content: "";
    -webkit-transform: rotate(-3deg);
    -moz-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    -o-transform: rotate(-3deg);
    transform: rotate(-3deg);
    z-index: 9;
}

.payments {
    font-size: 2.5rem;
    color: orangered;
    margin-left: 10px;
    margin-right: 10px;
}
</style>