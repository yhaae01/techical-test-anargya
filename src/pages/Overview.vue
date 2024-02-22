<template>
  <div class="p-4 sm:ml-64">
    <div
      class="relative overflow-x-auto border-solid border-2 border-grey-100 rounded-xl p-4"
    >
      <h2 class="text-xl font-semibold p-4 ml-2">Daftar Kota</h2>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead
          class="text-xs text-gray-700 border-t-2 border-b-2 border-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3 cursor-pointer" @click="sortById">
              ID
            </th>
            <th scope="col" class="px-6 py-3">Nama Kota</th>
            <th
              scope="col"
              class="px-6 py-3 cursor-pointer"
              @click="sortByProvince"
            >
              Provinsi
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(city, index) in paginatedCities" :key="index">
            <td
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ city.id }}
            </td>
            <td
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ city.name }}
            </td>
            <td
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ city.province.name }}
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div class="flex items-center mt-10 justify-center">
        <button
          class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          @click="prevPage"
          :disabled="currentPage === 1"
        >
          <svg
            class="w-3.5 h-3.5 me-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </button>
        <span class="mx-10">Page {{ currentPage }}</span>
        <button
          class="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          @click="nextPage"
          :disabled="currentPage === totalPage"
        >
          Next
          <svg
            class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
      <!-- End of Pagination -->
    </div>
  </div>
</template>

<script>
import cities from "./../assets/js/city.js";
import provinces from "./../assets/js/province.js";

export default {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      citiesWithProvinces: [],
      sortByIdDirection: "asc",
      sortByProvinceDirection: "asc",
    };
  },
  created() {
    this.mergeCitiesWithProvinces();
  },
  computed: {
    totalPage() {
      return Math.ceil(this.citiesWithProvinces.length / this.pageSize);
    },
    paginatedCities() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.citiesWithProvinces.slice(startIndex, endIndex);
    },
  },
  methods: {
    mergeCitiesWithProvinces() {
      this.citiesWithProvinces = cities.map((city) => {
        const province = provinces.find((p) => p.id === city.provinsi_id);
        return { ...city, province: province || { name: "Unknown" } };
      });
    },
    nextPage() {
      if (this.currentPage < this.totalPage) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    sortById() {
      this.sortByIdDirection =
        this.sortByIdDirection === "asc" ? "desc" : "asc";
      this.citiesWithProvinces.sort((a, b) => {
        return this.sortByIdDirection === "asc" ? a.id - b.id : b.id - a.id;
      });
    },
    sortByProvince() {
      this.sortByProvinceDirection =
        this.sortByProvinceDirection === "asc" ? "desc" : "asc";
      this.citiesWithProvinces.sort((a, b) => {
        const nameA = a.province.name.toUpperCase();
        const nameB = b.province.name.toUpperCase();
        if (this.sortByProvinceDirection === "asc") {
          return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        } else {
          return nameA > nameB ? -1 : nameA < nameB ? 1 : 0;
        }
      });
    },

    getProvinceNameByCityId(cityId) {
      for (let i = 0; i < cities.length; i++) {
        if (cities[i].id === cityId) {
          const provinceId = cities[i].provinceId;
          for (let j = 0; j < provinces.length; j++) {
            if (provinces[j].id === provinceId) {
              return provinces[j].name;
            }
          }
          return "Undefiend";
        }
      }
      return "Undefiend";
    },
  },
};
</script>
