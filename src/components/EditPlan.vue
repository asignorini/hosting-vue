<template>
  <section>
    <h2 class="text-center mb-5">
      Editar el plan: <strong>{{ plan.title }}</strong>
    </h2>
    <form action="#" @submit.prevent="editPlan" class="w-50 m-auto">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input
          type="text"
          id="name"
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
      <button type="submit" class="btn btn-primary">Actualizar</button>
    </form>
  </section>
</template>

<script>
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

export default {
  name: "editPlan",
  data: () => ({
    plan: {
      title: "",
      discount: null,
      price: null,
    },
  }),
  methods: {
    async getPlan() {
      let id = this.$route.params.id;
      const docRef = doc(db, "plans", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        this.plan.title = docSnap.data().title;
        this.plan.discount = docSnap.data().discount;
        this.plan.price = docSnap.data().price;
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    },
    async editPlan() {
      let id = this.$route.params.id;
      const docRef = doc(db, "plans", id);

      await updateDoc(docRef, {
        title:this.plan.title,
        discount:this.plan.discount,
        price:this.plan.price,
      })
        .then(() => {
            console.log("El plan ha sido actualizado correctamente");
            this.$router.push({ name: "adminPlans" });
        })
        .catch(function(error) {
            console.error("Error al querer modificar el plan");
        })
    },
  },
  mounted() {
    this.getPlan();
  },
};
</script>