<template>
  <!-- Sidebar -->
  <aside
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-5 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
  >
    <div class="h-full px-9 pb-4 overflow-y-auto bg-white">
      <h1 class="text-3xl font-extrabold mb-4">heylink.</h1>
      <ul class="space-y-2 font-medium">
        <li>
          <router-link
            to="/"
            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <Icon icon="mdi-light:home" :style="{ fontSize: '30px' }" />
            <span class="ms-3">Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/overview"
            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <Icon
              icon="material-symbols-light:grid-view-rounded"
              :style="{ fontSize: '30px' }"
            />
            <span class="ms-3">Overview</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
  <!-- End of Sidebar -->
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
};
</script>

<style scoped></style>
