<template>
  <section>
    <h2 class="text-center mb-5">Crear plan de hosting</h2>
    <form action="#" @submit.prevent="createPlan" class="w-50 m-auto">
      <div class="form-group">
        <label for="title">Título</label>
        <input
          type="text"
          id="title"
          class="form-control"
          v-model="plan.title"
        />
      </div>
      <div class="form-group">
        <label for="discount">Descuento</label>
        <input
          type="number"
          id="discount"
          class="form-control"
          v-model="plan.discount"
        />
      </div>
      <div class="form-group">
        <label for="price">Precio</label>
        <input
          type="number"
          id="price"
          class="form-control"
          v-model="plan.price"
        />
      </div>
      <button type="submit" class="btn btn-primary">Crear plan</button>
    </form>
  </section>
</template>

<script>
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";

export default {
  name: "createPlan",
  data: () => ({
    plan: {
      title: "",
      discount: null,
      price: null,
    },
  }),
  methods: {
    async createPlan() {
      const docRef = await addDoc(collection(db, "plans"), {
        title: this.plan.title,
        discount: this.plan.discount,
        price: this.plan.price,
      })
        .then(() => {
          console.log("El plan se ha creado correctamente");
          this.plan.title = "";
          this.plan.discount = null;
          this.price = null;
          this.$router.push({ name: "adminPlans" });
        })
        .catch(function (error) {
          console.error("Error al querer crear el plan");
        });
    },
  },
};
</script>