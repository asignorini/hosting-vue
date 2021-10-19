<template>
  <section>
    <h2 class="text-center mb-5">Admin plans</h2>
    <router-link to="/admin/plans/create" class="btn btn-primary mb-5">
      Crear plan de hosting
    </router-link>
    <table class="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Oferta</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(plan, index) in plans" :key="index">
          <td scope="row">{{ plan.title }}</td>
          <td>% {{ plan.discount }}</td>
          <td>$ {{ plan.price }}</td>
          <td>
            <form
              action="#"
              @submit.prevent="deletePlan(plan.id)"
              class="d-inline"
            >
              <button type="submit" class="btn btn-danger mr-2">
                Eliminar
              </button>
            </form>
            <router-link
              :to="{
                name: 'editPlan',
                params: { id: plan.id },
              }"
              class="btn btn-warning"
            >
              Editar
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import {
  collection,
  orderBy,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from "@firebase/firestore";
import { db } from "../services/firebase";

export default {
  name: "adminPlans",
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
    },
    async deletePlan(id) {
      await deleteDoc(doc(db, "plans", id))
        .then(() => {
          console.log("El plan ha sido eliminado correctamente");
        })
        .catch(function(error) {
          console.error("Error al querer eliminar el plan");
        })
    },
  },
  mounted() {
    this.getPlans();
  },
};
</script>