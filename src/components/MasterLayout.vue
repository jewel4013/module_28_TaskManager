<script setup>
import { useAuthStore } from '../stores/authStores';

    const authStore = useAuthStore();
</script>
    
<template>
    <div class="d-flex min-vh-100 bg-light">
        <!-- Sidebar Navigation -->
        <div class="bg-dark text-white p-4" style="width: 260px">
            <h4 class="fw-bold mb-5 text-primary text-center">🎯 TaskManager</h4>
            <ul class="nav flex-column gap-2">
                <li class="nav-item">
                    <RouterLink :to="{ name: 'dashboard' }" class="nav-link text-white active bg-primary rounded-3 px-3 py-2"><i
                            class="bi bi-grid-1x2-fill me-2"></i> Dashboard</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink :to="{ name: 'tasks' }" class="nav-link text-secondary px-3 py-2 hover-text-white"><i
                            class="bi bi-list-task me-2"></i> All Tasks</RouterLink>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link text-secondary px-3 py-2 hover-text-white"><i
                            class="bi bi-people-fill me-2"></i> Groups</a>
                </li>
                <li class="nav-item">
                    <hr class="border-secondary my-4" />
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link text-danger px-3 py-2" @click="authStore.logout">
                        <i class="bi bi-box-arrow-left me-2"></i>
                        Logout
                    </a>
                </li>
            </ul>
        </div>

        <!-- Main Workspace -->
        <div class="flex-grow-1 p-5 overflow-auto">
            <!-- Navbar / Top Header -->
            <div class="d-flex justify-content-between align-items-center mb-5 pb-3 border-b">
                <div>
                    <h2 class="fw-extrabold text-dark mb-0">Task Assignment Dashboard</h2>
                    <small class="text-muted">Manage corporate and individual workloads</small>
                </div>
                <div class="d-flex align-items-center gap-3">
                    <span class="badge bg-secondary p-2 rounded-circle"><i class="bi bi-bell-fill fs-5"></i></span>
                    <div class="fw-semibold text-secondary">Hello, Admin 👋</div>
                </div>
            </div>

            <RouterView />
        </div>
    </div>
</template>

<style scoped></style>
