<template>
  <section class="chat">
    <h2 class="text-center mb-5">Admin Chat</h2>
    <div class="row">
      <div class="col-md-8 bg-secondary p-5">
        <ul v-for="(message, index) in messages" :key="index">
          <li>Nombre: {{ message.name }}</li>
          <li>Mensaje: {{ message.text }}</li>
        </ul>
      </div>
      <div class="col-md-4">
        <form action="#" @submit.prevent="sendMessage" class="p-5">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input
              type="text"
              id="name"
              class="form-control"
              v-model="msj.name"
            />
          </div>
          <div class="form-group">
            <label for="msj">Mensaje</label>
            <textarea
              id="msj"
              v-model="msj.text"
              class="d-block w-100 form-control"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Enviar mensaje</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import {
  collection,
  query,
  addDoc,
  Timestamp,
  onSnapshot,
  QuerySnapshot,
  orderBy
} from "firebase/firestore";
import { db } from "../services/firebase";

export default {
  name: "chats",
  data: () => ({
    msj: {
      name: "",
      text: "",
    },
    messages: [],
  }),
  methods: {
    async sendMessage() {
      const docRef = await addDoc(collection(db, "chat"), {
        name: this.msj.name,
        text: this.msj.text,
        created_at: Timestamp.now(),
      })
        .then(() => {
          console.log("Mensaje enviado");
          this.msj.name = "";
          this.msj.text = "";
        })
        .catch(function (error) {
          console.error("Error al enviar el mensaje");
        });
    },
    async getMessages() {
      const chats = await query(collection(db, "chat"), orderBy("created_at"));
      onSnapshot(chats, (querySnapshot) => {
        this.messages = [];
        querySnapshot.forEach((doc) => {
          let message = doc.data();
          message.id = doc.id;
          this.messages.push(message);
        });
      });
    },
  },
  mounted() {
    this.getMessages();
  },
};
</script>