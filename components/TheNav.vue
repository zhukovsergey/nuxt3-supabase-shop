<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </NuxtLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <span class="sr-only">Open main menu</span>
          <Icon
            name="iconamoon:menu-burger-horizontal-bold"
            width="24"
            height="24"
          />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <NuxtLink
          to="/catalog"
          class="text-lg font-semibold leading-6 text-gray-900"
          >Каталог</NuxtLink
        >
        <a href="#" class="text-lg font-semibold leading-6 text-gray-900"
          >Новости</a
        >
        <a href="#" class="text-lg font-semibold leading-6 text-gray-900"
          >О нас</a
        >
      </PopoverGroup>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <NuxtLink
          v-if="!user"
          to="/login"
          class="text-sm font-semibold leading-6 text-gray-900"
          ><Icon
            class="mx-2"
            name="material-symbols:login"
            width="24"
            height="24"
          /><span aria-hidden="true">Вход </span></NuxtLink
        >
        <NuxtLink
          v-else
          to="/logout"
          class="text-sm font-semibold leading-6 text-gray-900"
          ><Icon
            class="mx-2"
            name="teenyicons:logout-outline"
            width="24"
            height="24" />Выход <span aria-hidden="true"></span
        ></NuxtLink>
        <NuxtLink
          v-if="!user"
          to="/register"
          class="text-sm font-semibold leading-6 text-gray-900"
          ><Icon
            class="mx-2"
            name="material-symbols:app-registration-outline-sharp"
            width="24"
            height="24" />Регистрация <span aria-hidden="true"></span
        ></NuxtLink>
        <NuxtLink
          to="/cart"
          class="text-sm font-semibold leading-6 text-gray-900 px-4"
          ><Icon
            name="bytesize:cart"
            width="24"
            height="24"
            class="mx-2" />Корзина - {{ cart.length }}тов.<span
            aria-hidden="true"
          ></span
        ></NuxtLink>
      </div>
    </nav>
    <MobileMenu v-model="mobileMenuOpen" />
  </header>
</template>

<script setup>
import { ref } from "vue";
import { PopoverGroup } from "@headlessui/vue";
import { storeToRefs } from "pinia";
const main = useCart();
const { cart } = storeToRefs(main);

const user = useSupabaseUser();

const mobileMenuOpen = ref(false);
</script>

<style scoped>
nav {
  font-size: 50px;
  font-family: Roboto;
}
</style>
