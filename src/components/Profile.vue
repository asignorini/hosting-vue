<template>
    <section>
        <h2 class="text-center mb-5">Mi perfil</h2>
        <ul>
            <li class="text-center mb-2">Email: <b>{{ authUser.email }}</b></li>
            <li class="text-center mb-5">Nombre de usuario: <b>{{ authUser.displayName }}</b></li>
            <li>
                <form action="#" @submit.prevent="updateProfile" class="w-50 m-auto">
                    <div class="form-group">
                      <label for="name">Actualizar nombre</label>
                      <input type="text" id="name" class="form-control" v-model="form.displayName">
                    </div>
                    <button type="submit" class="btn btn-primary">Actualizar</button>
                </form>
            </li>
        </ul>
    </section>        
</template>

<script>
import useAuth from "../composition/useAuth.js";
import { updateUserProfile } from "../services/auth"
import {ref} from "vue";

export default {
    name: 'profile',
    setup() {
        const {authUser} = useAuth();
        const form = ref({
            displayName: null
        });
        form.value.displayName = authUser.value.displayName;
        function updateProfile() {
            updateUserProfile(form.value);
        }
        return {
            authUser,
            form,
            updateProfile,
        };
    }
}
</script>