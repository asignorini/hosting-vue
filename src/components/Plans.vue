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
        <li class="row">
          <div class="col-lg-4" v-for="(plan, index) in plans" :key="index">
            <ul class="plan-card mb-5">
              <li class="text-center mb-3">
                <h4 class="mb-0">{{ plan.title }}</h4>
                <small>En oferta - Ahórrate {{ plan.discount }}%</small>
              </li>
              <li class="text-center mb-4">
                <p class="plan-price"><span class="dolar-price">$</span>{{ plan.price }}</p>
                <p class="text-muted">/por mes</p>
              </li>
              <li>
                <button class="btn btn-call-to-action w-100">
                  Empieza aquí
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
</template>

<script>
import {
  query,
  orderBy,
  collection,
  onSnapshot,
} from "@firebase/firestore";
import { db } from "../services/firebase";

export default {
    name: 'plans',
    data: () => ({
    plans: [],
  }),
  methods: {
    async getPlans() {
      const plans = await query(collection(db, "plans"), orderBy("price"));
      onSnapshot(plans, (querySnapshot) => {
        this.plans = [];
        querySnapshot.forEach((doc) => {
          let plan = doc.data();
          plan.id = doc.id;
          this.plans.push(plan);
        });
      });
    }
  },
  mounted() {
    this.getPlans();
  },
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