<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { useTaskStore } from '../stores/taskStores';
import { ref } from 'vue';

const router = useRouter();
const taskStore = useTaskStore();

const name = ref('');
const description = ref('');

const handleTaskSubmit = async ()=> {
    const success = await taskStore.createTask({
        name: name.value,
        description: description.value,
    })

    if(success){
        router.push({name: 'tasks'});
    }
}
    
</script>

<template>
    <div class="container mt-4">
        <div class="card shadow-sm border-0 rounded-3 bg-white">
            <!-- কার্ড হেডার -->
            <div class="card-header bg-white border-0 pt-4 px-4">
                <h5 class="fw-bold text-dark m-0">🆕 Create New Task</h5>
                <small class="text-muted">Fill in the details below to add a new task to the system.</small>
            </div>

            <!-- কার্ড বডি / ফর্ম -->
            <div class="card-body p-4">
                <form @submit.prevent="handleTaskSubmit">
                    <!-- টাস্কের নাম ইনপুট -->
                    <div class="mb-3">
                        <label for="taskName"
                            class="form-label font-monospace text-uppercase text-secondary small fw-bold">Task
                            Name</label>
                        <input v-model="name" type="text" id="taskName" class="form-control rounded-2 py-2"
                            placeholder="e.g., Fix Authentication Bug" required />
                    </div>

                    <!-- টাস্কের ডেসক্রিপশন ইনপুট -->
                    <div class="mb-4">
                        <label for="taskDesc"
                            class="form-label font-monospace text-uppercase text-secondary small fw-bold">Description</label>
                        <textarea v-model="description" id="taskDesc" class="form-control rounded-2" rows="4"
                            placeholder="Provide a brief summary of the task requirements..."></textarea>
                    </div>

                    <!-- অ্যাকশন বাটনসমূহ -->
                    <div class="d-flex justify-content-end gap-2 border-top pt-3">
                        <RouterLink :to="{ name: 'tasks' }" class="btn btn-light btn-sm rounded-2 px-3 fw-semibold text-secondary">
                            Cancel
                        </RouterLink>
                        <button type="submit" class="btn btn-primary btn-sm rounded-2 px-4 fw-bold shadow-sm">
                            Save Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
