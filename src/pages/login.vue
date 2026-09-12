<script setup>
</script>

<template>
  <div class="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
    <div class="card shadow-lg border-0 rounded-4" style="max-width: 450px; width: 100%;">
      <div class="card-body p-5">
        <div class="text-center mb-4">
          <h2 class="fw-bold text-primary">🎯 TaskManager</h2>
          <p class="text-muted">Sign in to your account</p>
        </div>
        <form @submit.prevent="handleLogin">
          <div class="mb-3">
            <label class="form-label font-monospace text-uppercase text-secondary small">Email Address</label>
            <input type="email" class="form-control form-control-lg rounded-3 fs-6" placeholder="name@example.com" required>
          </div>
          <div class="mb-3">
            <label class="form-label font-monospace text-uppercase text-secondary small">Password</label>
            <input type="password" class="form-control form-control-lg rounded-3 fs-6" placeholder="••••••••" required>
          </div>
          <button type="submit" class="btn btn-primary btn-lg w-100 rounded-3 mt-3 fw-bold shadow-sm">Sign In</button>
        </form>
        <div class="text-center mt-4">
          <p class="text-muted small">Don't have an account? <a href="#" class="text-primary text-decoration-none fw-bold">Register here</a></p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
</style>