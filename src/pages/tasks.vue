<script setup>
import { onMounted, ref } from 'vue';
import { useTaskStore } from '../stores/taskStores';

    const taskStore = useTaskStore();
    const tasks = ref([]);

    const getTasks = async () =>{
        tasks.value = await taskStore.getTasks();
    }

    onMounted(() => {
        getTasks();
    });
</script>

<template>
    <div class="card shadow-sm border-0 rounded-3 bg-white p-4">
        <!-- উপরের অংশ: হেডিং এবং অ্যাড টাস্ক বাটন -->
        <div class="d-flex justify-content-between align-items-center mb-4">
            <div>
                <h5 class="fw-bold text-dark m-0">📋 Task Directory</h5>
                <small class="text-muted">Manage and track your active workflows</small>
            </div>
            <!-- টাস্ক অ্যাড করার বাটন (Modal বা Form ট্রিগার করার জন্য) -->
            <RouterLink :to="{ name: 'createTask' }"
                class="btn btn-primary btn-sm rounded-2 fw-bold px-3 py-2 shadow-sm d-flex align-items-center gap-2">
                <i class="bi bi-plus-lg"></i> Add New Task
            </RouterLink>
        </div>

        <!-- টাস্ক লিস্ট শো করার টেবিল -->
        <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
                <thead class="table-light font-monospace text-uppercase text-secondary small">
                    <tr>
                        <th class="py-3 px-3" style="width: 40%">Task Name</th>
                        <th class="py-3" style="width: 20%">Assigned To</th>
                        <th class="py-3" style="width: 20%">Type</th>
                        <th class="py-3 text-center" style="width: 20%">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- টাস্ক ১: কোনো গ্রুপকে দেওয়া কাজ -->
                    <tr v-for="task in tasks" :key="task.id">
                        <td class="py-3 px-3">
                            <div class="fw-semibold text-dark">{{ task.name }}</div>
                            <small class="text-muted">{{ task.description }}</small>
                        </td>
                        <td>
                            <span class="fw-medium text-secondary"><i class="bi bi-people-fill me-1"></i> Backend
                                Devs</span>
                        </td>
                        <td>
                            <span
                                class="badge bg-info-subtle text-info rounded-pill px-2.5 py-1 text-uppercase font-monospace small">Group</span>
                        </td>
                        <td class="text-center">
                            <div class="d-flex justify-content-center gap-2">
                                <button class="btn btn-outline-secondary btn-sm rounded-2 py-1 px-2" title="Edit">
                                    <i class="bi bi-pencil-square"></i>
                                </button>
                                <button class="btn btn-outline-danger btn-sm rounded-2 py-1 px-2" title="Delete">
                                    <i class="bi bi-trash3-fill"></i>
                                </button>
                            </div>
                        </td>
                    </tr>

                    <!-- টাস্ক ২: কোনো সিঙ্গেল ইউজারকে দেওয়া কাজ -->
                    <!-- <tr>
                        <td class="py-3 px-3">
                            <div class="fw-semibold text-dark">Fix Auth Interceptor</div>
                            <small class="text-muted">Handle token expiration redirects in Vue frontend</small>
                        </td>
                        <td>
                            <span class="fw-medium text-secondary"><i class="bi bi-person-fill me-1"></i> Rakib
                                Ahmed</span>
                        </td>
                        <td>
                            <span
                                class="badge bg-success-subtle text-success rounded-pill px-2.5 py-1 text-uppercase font-monospace small">User</span>
                        </td>
                        <td class="text-center">
                            <div class="d-flex justify-content-center gap-2">
                                <button class="btn btn-outline-secondary btn-sm rounded-2 py-1 px-2" title="Edit">
                                    <i class="bi bi-pencil-square"></i>
                                </button>
                                <button class="btn btn-outline-danger btn-sm rounded-2 py-1 px-2" title="Delete">
                                    <i class="bi bi-trash3-fill"></i>
                                </button>
                            </div>
                        </td>
                    </tr> -->
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped></style>
