<script setup>
import { useAuthStore } from "../stores/authStores";

const authStore = useAuthStore();
</script>

<template>
  <!-- Add & Polymorphic Task Assignment Section -->
  <div class="card shadow-sm border-0 rounded-4 p-4 mb-5 bg-white">
    <h5 class="fw-bold mb-4 text-dark">
      <i class="bi bi-plus-circle-fill text-primary me-2"></i> Assign New Task
    </h5>
    <form class="row g-3 align-items-end">
      <div class="col-md-3">
        <label
          class="form-label font-monospace text-uppercase text-secondary small"
          >Select Task</label
        >
        <select class="form-select rounded-3">
          <option value="">Choose a task...</option>
          <option value="1">Database Optimization</option>
          <option value="2">Vue Frontend Scaffold</option>
        </select>
      </div>

      <!-- স্যারের এপিআই আর্কিটেকচার অনুযায়ী টাইপ ড্রপডাউন -->
      <div class="col-md-2">
        <label
          class="form-label font-monospace text-uppercase text-secondary small"
          >Assign To</label
        >
        <select v-model="assignType" class="form-select rounded-3">
          <option value="user">Single User</option>
          <option value="group">Team Group</option>
        </select>
      </div>

      <!-- টাইপ অনুযায়ী ডাইনামিকালি আইডি সিলেক্ট করার অপশন -->
      <div class="col-md-4">
        <label
          class="form-label font-monospace text-uppercase text-secondary small"
          >Select Target Entity</label
        >
        <select v-model="selectedAssignId" class="form-select rounded-3">
          <option value="">Select ID...</option>
          <template v-if="assignType === 'user'">
            <option value="1">Rakib Ahmed (User ID: 1)</option>
            <option value="2">Sumon Khan (User ID: 2)</option>
          </template>
          <template v-else>
            <option value="1">Backend Devs (Group ID: 1)</option>
            <option value="2">QA Engineers (Group ID: 2)</option>
          </template>
        </select>
      </div>

      <div class="col-md-3">
        <button
          type="submit"
          class="btn btn-primary w-100 rounded-3 fw-bold shadow-sm py-2"
        >
          Execute Assignment
        </button>
      </div>
    </form>
  </div>

  <!-- Current Task Assignment Status Table -->
  <div class="card shadow-sm border-0 rounded-4 overflow-hidden bg-white">
    <div class="card-header bg-white border-0 py-4 px-4">
      <h5 class="fw-bold text-dark m-0">Live Task Pipeline</h5>
    </div>
    <div class="table-responsive">
      <table class="table table-hover align-middle mb-0">
        <thead
          class="table-light font-monospace text-uppercase text-secondary small"
        >
          <tr>
            <th class="py-3 px-4">Task Name</th>
            <th class="py-3">Assignee Type</th>
            <th class="py-3">Assigned Target</th>
            <th class="py-3">Assigned By</th>
            <th class="py-3 text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="py-3 px-4 fw-medium">Database Optimization</td>
            <td>
              <span class="badge bg-info-subtle text-info rounded-pill px-2"
                >Group</span
              >
            </td>
            <td class="fw-semibold">Backend Devs</td>
            <td>Admin User</td>
            <td class="text-center">
              <span class="badge bg-warning text-dark px-3 rounded-3"
                >Progress</span
              >
            </td>
          </tr>
          <tr>
            <td class="py-3 px-4 fw-medium">Vue Frontend Scaffold</td>
            <td>
              <span
                class="badge bg-success-subtle text-success rounded-pill px-2"
                >User</span
              >
            </td>
            <td class="fw-semibold">Rakib Ahmed</td>
            <td>Admin User</td>
            <td class="text-center">
              <span class="badge bg-success px-3 rounded-3">Completed</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.hover-text-white:hover {
  color: white !important;
  transition: 0.2s ease;
}
</style>
