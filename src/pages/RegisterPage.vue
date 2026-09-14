<script setup>

import { ref } from 'vue';
import { useAuthStore } from '../stores/authStores';
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const authStore = useAuthStore();

const handleRegister = async () => {
    const regi = await authStore.register({
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: confirmPassword.value
    });

    if(regi){
        router.push({name: 'login'});
    }
}

</script>

<template>
    <div class="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
        <div class="card shadow-lg border-0 rounded-4" style="max-width: 500px; width: 100%;">
            <div class="card-body p-5">
                <div class="text-center mb-4">
                    <h2 class="fw-bold text-primary">🚀 Create Account</h2>
                    <p class="text-muted">Get started with your team account</p>
                </div>
                <form @submit.prevent="handleRegister">
                    <div class="mb-3">
                        <label class="form-label font-monospace text-uppercase text-secondary small">Full Name</label>
                        <input type="text" 
                            class="form-control rounded-3" 
                            placeholder="" required 
                            name="name"
                            v-model="name">
                    </div>
                    <div class="mb-3">
                        <label class="form-label font-monospace text-uppercase text-secondary small">Email
                            Address</label>
                        <input type="email" 
                        class="form-control rounded-3" 
                        placeholder="" required 
                        name="email"
                        v-model="email">
                    </div>
                    <div class="mb-3">
                        <label class="form-label font-monospace text-uppercase text-secondary small">Password</label>
                        <input type="password" 
                        class="form-control rounded-3" 
                        placeholder="" required 
                        name="password"
                        v-model="password">
                    </div>
                    <div class="mb-3">
                        <label class="form-label font-monospace text-uppercase text-secondary small">Confirm
                            Password</label>
                        <input type="password" 
                        class="form-control rounded-3" 
                        placeholder="" required 
                        name="confirmPassword"
                        v-model="confirmPassword">
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg w-100 rounded-3 mt-3 fw-bold shadow-sm">Register</button>
                </form>
                <div class="text-center mt-4">
                    <p class="text-muted small">Already a member? 
                        <RouterLink :to="{name: 'login'}"
                            class="text-primary text-decoration-none fw-bold">Sign In
                        </RouterLink>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>