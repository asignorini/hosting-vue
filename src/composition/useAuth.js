import {onUnmounted, ref} from "vue";
import {authStateSubscribe} from "../services/auth.js";

export default () => {
    const authUser = ref({
        email: null,
        displayName: null,
    });

    const unsubscribe = authStateSubscribe(user => authUser.value = user);

    onUnmounted(() => {
        unsubscribe();
    });

    return {
        authUser,
    };
}
