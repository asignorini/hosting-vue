<template>
    <section class="section-padding-top">
      <ul class="container">
        <li class="row">
          <ul class="col text-center mb-5">
            <li>
              <h3 class="h3-title">Selecciona tu plan</h3>
            </li>
            <li>
              <p>Alojamiento personalizado, sin cargos ocultos.</p>
            </li>
          </ul>
        </li>
        <li class="row justify-content-center">
          <div class="col-lg-4">
            <ul class="plan-card">
              <li class="text-center mb-3">
                <h4 class="mb-0">Standard Hosting</h4>
                <small>En oferta - Ahórrate 50%</small>
              </li>
              <li class="text-center mb-4">
                <p class="plan-price"><span class="dolar-price">$</span>400</p>
                <p class="text-muted">/por mes</p>
              </li>
              <li>
                <button class="btn btn-call-to-action w-100">
                  Empieza aquí
                </button>
              </li>
              <li>
                <ul class="pl-0 pt-4">
                  <li class="d-flex align-items-center mb-2">
                    <i class="fas fa-check mr-3"></i>
                    <p class="mb-0">Hasta 10 sitios</p>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="fas fa-check mr-3"></i>
                    <p class="mb-0">Hasta 10 sitios</p>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="fas fa-check mr-3"></i>
                    <p class="mb-0">Hasta 10 sitios</p>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="fas fa-check mr-3"></i>
                    <p class="mb-0">Hasta 10 sitios</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-lg-4">
            <ul class="plan-card">
              <li class="text-center mb-3">
                <h4 class="mb-0">Advance Hosting</h4>
                <small>En oferta - Ahórrate 50%</small>
              </li>
              <li class="text-center mb-4">
                <p class="plan-price"><span class="dolar-price">$</span>700</p>
                <p class="text-muted">/por mes</p>
              </li>
              <li>
                <button class="btn btn-call-to-action w-100">
                  Empieza aquí
                </button>
              </li>
              <li>
                <ul class="pl-0 pt-4">
                  <li class="d-flex align-items-center mb-2">
                    <i class="fas fa-check mr-3"></i>
                    <p class="mb-0">Hasta 25 sitios</p>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="fas fa-check mr-3"></i>
                    <p class="mb-0">Hasta 10 sitios</p>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="fas fa-check mr-3"></i>
                    <p class="mb-0">Hasta 10 sitios</p>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="fas fa-check mr-3"></i>
                    <p class="mb-0">Hasta 10 sitios</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="col-lg-4">
            <ul class="plan-card">
              <li class="text-center mb-3">
                <h4 class="mb-0">Unlimited Hosting</h4>
                <small>En oferta - Ahórrate 50%</small>
              </li>
              <li class="text-center mb-4">
                <p class="plan-price"><span class="dolar-price">$</span>1050</p>
                <p class="text-muted">/por mes</p>
              </li>
              <li>
                <button class="btn btn-call-to-action w-100">
                  Empieza aquí
                </button>
              </li>
              <li>
                <ul class="pl-0 pt-4">
                  <li class="d-flex align-items-center mb-2">
                    <i class="fas fa-check mr-3"></i>
                    <p class="mb-0">Sitios ilimitados</p>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="fas fa-check mr-3"></i>
                    <p class="mb-0">Hasta 10 sitios</p>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="fas fa-check mr-3"></i>
                    <p class="mb-0">Hasta 10 sitios</p>
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <i class="fas fa-check mr-3"></i>
                    <p class="mb-0">Hasta 10 sitios</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
</template>

<script>
export default {
    name: 'plans'
}
</script>

<style>
.plan-price {
    color: orangered;
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 0;
}

.dolar-price {
    font-size: 1rem;
}

.plan-card {
    padding: 40px!important;
    box-shadow: 0 8px 8px -1px rgb(0 0 0 / 15%);
    border-radius: 3px;
    border: 1px solid #ebebeb;
}
</style>