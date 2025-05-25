// File: components/Sidebar.vue
<template>
  <aside class="sidebar">
    <h2 class="title">📚 Menu</h2>
    <nav class="menu">
      <RouterLink to="/" class="menu-item">📋 Semua Tugas</RouterLink>
      <RouterLink to="/subjects" class="menu-item">📘 Mata Kuliah</RouterLink>
      <RouterLink to="/today" class="menu-item">📅 Hari Ini</RouterLink>
      <RouterLink to="/favorites" class="menu-item">⭐ Favorit</RouterLink>
      <RouterLink to="/schedule" class="menu-item">🕒 Jadwal</RouterLink>
      <RouterLink to="/settings" class="menu-item">⚙️ Pengaturan</RouterLink>
    </nav>
  </aside>
</template>

<script>
import { RouterLink } from 'vue-router';
export default {
  components: { RouterLink }
}
</script>