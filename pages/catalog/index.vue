<script setup>
import { storeToRefs } from "pinia";
const supabase = useSupabaseClient();
const main = useCart();
const { cart } = storeToRefs(main);
const { addToStore } = main;
const posts = ref([]);
const loader = ref(true);
const selectedTask = ref(null);

async function getPosts() {
  loader.value = true;
  const { data } = await supabase
    .from("posts")
    .select()
    .order("price", { ascending: true });
  posts.value = data;
  loader.value = false;
}

onMounted(() => {
  getPosts();
});

async function delFilter() {
  getPosts();
}

async function onChangeSelectedTask() {
  console.log(posts);
  if (selectedTask._value == 1)
    posts.value.sort(function (a, b) {
      return b.price - a.price; //to reverse b.date-a.date
    });
  if (selectedTask._value == 2)
    posts.value.sort(function (a, b) {
      return a.price - b.price; //to reverse b.date-a.date
    });

  // posts.value = filprice;
}

function addToCart(post) {
  addToStore(post);
}
</script>

<template>
  <div class="mx-4">
    <h1 class="flex justify-center">Каталог</h1>
    <div class="filter flex flex-wrap gap-4">
      <select v-model="selectedTask" @change="onChangeSelectedTask">
        <option value="1">Цена по убыванию</option>
        <option value="2">Цена по возрастанию</option>
      </select>
      <div
        class="cursor-pointer bg-red-400 hover:bg-red-500 text-black rounded-md w-[150px] px-2 py-2 flex items-center justify-center"
        @click="delFilter"
      >
        Удалить фильтр
      </div>
    </div>
    <div class="flex justify-center">
      <Icon
        v-if="loader"
        name="svg-spinners:pulse-rings-multiple"
        width="150"
        height="150"
      />
    </div>

    <div class="flex flex-wrap justify-center items-center mx-8 gap-[40px]">
      <div
        v-for="post in posts"
        :key="post.id"
        class="items-center flex flex-col border border-indigo-100 rounded-lg hover:shadow-md"
      >
        <NuxtLink class="flex flex-col items-center" :to="`/post/${post.id}`">
          <div class="text-black-800 font-bold mt-4 mb-4 text-[20px]">
            {{ post.title }}
          </div>

          <img
            v-if="(index = 1)"
            class="object-cover h-48 w-78"
            :src="`/uploads/${post.imgs[0]}`"
          />
          <div v-html="post.body"></div>
          <div class="text-indigo-700 font-bold mt-4">
            {{ post.price }} руб.
          </div></NuxtLink
        >
        <button
          @click="addToCart(post)"
          class="bg-indigo-500 text-white rounded-md px-4 py-2 my-2 hover:bg-indigo-400 w-[200px]"
        >
          Купить
        </button>
      </div>
    </div>
  </div>
</template>
