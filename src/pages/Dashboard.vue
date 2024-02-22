<template>
  <!-- Content -->
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200">
      <!-- Card -->
      <div class="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mb-4">
        <!-- Card Pending -->
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="grid grid-cols-2 gap-4 p-1">
              <div class="flex items-center">
                <div class="grid grid-rows-2">
                  <div class="mb-5">
                    <span class="text-gray-500 text-sm font-semibold"
                      >Pending</span
                    >
                    <p
                      v-html="formattedNumberPending"
                      class="text-2xl font-semibold"
                    ></p>
                  </div>
                  <div class="flex items-center">
                    <Icon
                      icon="ic:sharp-trending-up"
                      class="text-green-500"
                      style="font-size: 20px"
                    />
                    <span class="text-green-500 text-sm">2,15%</span>
                    <span class="text-gray-500 text-sm ml-2">Last Month</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-end">
                <div class="grid grid-rows-2">
                  <div class="mb-5">
                    <span>
                      <Icon
                        icon="mdi-light:home"
                        :style="{ fontSize: '30px', color: 'gray' }"
                      />
                    </span>
                  </div>
                  <div class="mt-6">
                    <a href="">View More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Card Paid -->
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="grid grid-cols-2 gap-4 p-1">
              <div class="flex items-center">
                <div class="grid grid-rows-2">
                  <div class="mb-5">
                    <span class="text-gray-500 text-sm font-semibold"
                      >Paid</span
                    >
                    <p
                      v-html="formattedNumberPaid"
                      class="text-2xl font-semibold"
                    ></p>
                  </div>
                  <div class="flex items-center">
                    <Icon
                      icon="ic:sharp-trending-down"
                      class="text-red-500"
                      style="font-size: 20px"
                    />
                    <span class="text-red-500 text-sm">- 1,10%</span>
                    <span class="text-gray-500 text-sm ml-2">Last Month</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-end">
                <div class="grid grid-rows-2">
                  <div class="mb-5">
                    <span>
                      <Icon
                        icon="mdi-light:home"
                        :style="{ fontSize: '30px', color: 'gray' }"
                      />
                    </span>
                  </div>
                  <div class="mt-6">
                    <a href="">View More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Card Rejected -->
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <div class="px-6 py-4">
            <div class="grid grid-cols-2 gap-4 p-1">
              <div class="flex items-center">
                <div class="grid grid-rows-2">
                  <div class="mb-5">
                    <span class="text-gray-500 text-sm font-semibold"
                      >Rejected</span
                    >
                    <p
                      v-html="formattedNumberRejected"
                      class="text-2xl font-semibold"
                    ></p>
                  </div>
                  <div class="flex items-center">
                    <Icon
                      icon="ic:sharp-trending-up"
                      class="text-green-500"
                      style="font-size: 20px"
                    />
                    <span class="text-green-500 text-sm">2,15%</span>
                    <span class="text-gray-500 text-sm ml-2">Last Month</span>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-end">
                <div class="grid grid-rows-2">
                  <div class="mb-5">
                    <span>
                      <Icon
                        icon="mdi-light:home"
                        :style="{ fontSize: '30px', color: 'gray' }"
                      />
                    </span>
                  </div>
                  <div class="mt-6">
                    <a href="">View More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Card -->

      <!-- Table -->
      <div
        class="relative overflow-x-auto border-solid border-2 border-grey-100 rounded-xl p-4"
      >
        <h1 class="text-xl font-semibold p-4 ml-2">User List</h1>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead
            class="text-xs text-gray-700 border-t-2 border-b-2 border-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">ID</th>
              <th scope="col" class="px-6 py-3">User</th>
              <th scope="col" class="px-6 py-3">Date of Birth</th>
              <th scope="col" class="px-6 py-3">Email</th>
              <th scope="col" class="px-6 py-3">Job</th>
              <th scope="col" class="px-6 py-3">Country</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {{ user.id }}
              </th>
              <td class="px-6 py-4">
                <img
                  class="w-10 h-10 rounded-full"
                  :src="user.profile_picture"
                  alt="Rounded avatar"
                />
                {{ user.first_name }}
              </td>
              <td class="px-6 py-4">{{ user.date_of_birth }}</td>
              <td class="px-6 py-4">{{ user.email }}</td>
              <td class="px-6 py-4">{{ user.job }}</td>
              <td class="px-6 py-4">{{ user.country }}</td>
              <td class="px-6 py-4">
                <button
                  type="button"
                  class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  Select
                </button>
                <button
                  type="button"
                  @click="selectUser(user)"
                  onclick="my_modal_1.showModal()"
                  class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                  View Detail
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- End of Table -->
    </div>
  </div>
  <!-- End of Content -->

  <!-- Modal Detail -->
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box p-20">
      <form method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>

      <div v-if="selectedUser">
        <div class="grid grid-cols-3">
          <div>
            <img
              class="w-20 h-20 rounded-full"
              :src="selectedUser.profile_picture"
              alt="Rounded avatar"
            />
          </div>
          <div class="col-span-2">
            <p>{{ selectedUser.first_name }}</p>
            <p>{{ selectedUser.email }}</p>
            <p>{{ selectedUser.phone }}</p>
          </div>
        </div>
      </div>
    </div>
  </dialog>
  <!-- End of Modal Detail -->
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

const numberPending = ref(2480.3);
const numberPaid = ref(84310);
const numberRejected = ref(12155);

const formattedNumberPending = ref("");
const formattedNumberPaid = ref("");
const formattedNumberRejected = ref("");

const users = ref([]);
const selectedUser = ref(null);

onMounted(() => {
  formatNumber();
  getAllDataUser();
});

const getAllDataUser = async () => {
  try {
    const response = await axios.get(
      "https://api.slingacademy.com/v1/sample-data/users"
    );
    users.value = response.data.users;

    return response.data.users;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

const selectUser = (user) => {
  selectedUser.value = user;
};

function formatNumber() {
  format(ref(numberPending), formattedNumberPending);
  format(ref(numberPaid), formattedNumberPaid);
  format(ref(numberRejected), formattedNumberRejected);
}

function format(numberRef, formattedNumberRef) {
  let afterDecimal = (numberRef.value - Math.floor(numberRef.value))
    .toFixed(2)
    .slice(2);

  formattedNumberRef.value = Math.floor(numberRef.value).toLocaleString(
    "id-ID"
  );

  if (parseInt(afterDecimal) > 0) {
    formattedNumberRef.value +=
      '<span style="color: gray">,' + afterDecimal + "</span>";
  }
}
</script>

<style scoped></style>
