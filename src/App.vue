// File: App.vue
<template>
  <div style="display: flex">
    <Sidebar />
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
export default {
  components: { Sidebar }
}
</script>