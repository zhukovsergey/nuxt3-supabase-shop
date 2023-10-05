<script setup>
import { storeToRefs } from "pinia";
const main = useCart();
const { cart } = storeToRefs(main);
const { total } = storeToRefs(main);
const { deleteFromStore } = main;

function delFromcart(id) {
  console.log(id);
  deleteFromStore(id);
}
</script>

<template>
  <div class="mx-6">
    {{ cart }}<br />
    сумма{{ total }}
    <h1>Каталог</h1>
    <div v-if="cart.length > 0">
      <div
        v-for="(item, index) in cart"
        class="flex flex-wrap items-center justify-between mx-2 my-2 border border-indigo-200 w-[50%] px-4 py-4"
      >
        <div class="mx-2">№{{ index + 1 }}.</div>
        <div class="mx-2 w-[200px]">{{ item.title }}</div>

        <img
          :src="`/uploads/${item.imgs[0]}`"
          class="object-cover h-[10%] w-[10%]"
        />
        <div class="ml-8 font-bold">{{ item.count }} шт.</div>
        <div class="ml-8 font-bold">{{ item.price }} руб.</div>
        <div class="ml-8 font-bold">
          На сумму {{ item.price * item.count }} руб.
        </div>

        <button
          class="bg-indigo-500 rounded-md px-2 py-2 text-white hover:bg-indigo-300"
          @click="delFromcart(item.id)"
        >
          X
        </button>
      </div>
      <div class="flex mt-[50px] ml-[50px] text-xl">
        <span class="text-indigo-900">Общая сумма заказа:</span>

        <div class="font-bold text-indigo-900">&nbsp;{{ total }} руб.</div>
      </div>
    </div>
    <div
      v-else
      class="flex justify-center text-indigo-600 mt-[50px] items-center text-lg"
    >
      <Icon
        name="noto-v1:astonished-face"
        width="70"
        height="70"
        class="mx-4"
      />Ваша корзина пуста
    </div>
  </div>
</template>
