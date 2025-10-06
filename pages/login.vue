<template>
    <section class="pages login">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <img src="/newimg/loginbanner.png" class="img-fluid">
                </div>
                <div class="col-md-4 d-flex align-items-center">
                    <form action="" class="login-form-field">
                        <div class="row">
                            <div class="col-md-12">
                                <h1>Login</h1>
                            </div>
                            <div class="col-md-12">
                                <p>Please fill in the details below.</p>
                            </div>
                            <div class="col-md-12">
                                <input class="form-control" type="text" v-model="credentials.username"
                                    placeholder="Username" autocomplete="off">
                            </div>
                            <div class="col-md-12">
                                <input class="form-control" type="password" v-model="credentials.password"
                                    placeholder="Password" autocomplete="off">
                            </div>
                            <div class="col-md-12 mb-2">
                                <button class="btn btn-primary" type="button" @click="login">Login</button>
                            </div>
                            <div class="col-md-12 d-flex justify-content-between gap-2">
                                <NuxtLink to="/register">Register</NuxtLink>
                                <NuxtLink to="/forgetpassword">Forget Password?</NuxtLink>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import Swal from 'sweetalert2';
import {
    reactive,
    ref
} from 'vue';
import {
    useRouter
} from 'vue-router';
import {
    useAuthStore
} from '~/stores/auth';

const credentials = reactive({
    username: '',
    password: '',
});

const loading = ref(false);
const error = ref<string | null>(null);
const router = useRouter();
const authStore = useAuthStore();

async function login() {
    loading.value = true;
    error.value = null; // Clear previous errors

    try {
        await authStore.login(credentials);
        router.push('/'); // Redirect to home on successful login
    } catch (err: any) {

        Swal.fire({
            icon: 'error',
            title: 'แจ้งเตือน',
            text: err.data?.message || 'Login failed. Please try again.',
        });

        // Check if the error has a response body (from createError in H3)
        // error.value = err.data?.message || 'Login failed. Please try again.';
        // console.error('Login error:', err);
    } finally {
        loading.value = false;
    }
}

definePageMeta({
    layout: 'default',
    middleware: 'auth'
})
</script>

<style scoped>
.img-fluid {
    width: 100%;
    padding: 1.5rem 0rem 1.5rem 0rem;
    background-color: #ff7377;
}

input {
    background-color: transparent;
    border: 0;
    height: 3rem;
    padding: 0.5rem !important;
    font-size: 1rem;
    border-bottom: solid 1px #aaaaaa;
    border-radius: 0;
    margin-bottom: 1.5rem;
}
.btn {
    width: 100%;
    height: 3.5rem;
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 0.25
}
.login-form-field {
    padding: 2rem;
}
</style>
