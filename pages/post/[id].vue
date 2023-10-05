<template>
  <div>
    <div>
      <div v-for="pos in post" class="flex flex-wrap flex-col gap-4 ml-[100px]">
        <div>
          <h1 class="flex justify-center">{{ pos.title }}</h1>
        </div>
        <div class="flex flex-wrap justify-around gap-8">
          <img
            class="object-cover h-48 w-78"
            :src="`/uploads/${pos.imgs[0]}`"
          />
          <div v-html="pos.body"></div>

          <div class="flex flex-col flex-wrap items-center">
            <div class="text-lg my-4">Цена {{ pos.price }} р.</div>
            <div>
              <button
                class="bg-indigo-500 text-white rounded-md px-2 py-2 w-[150px]"
              >
                Купить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const post = ref(null);
const route = useRoute();
async function getPosts() {
  const { data } = await supabase
    .from("posts")
    .select()
    .eq("id", route.params.id);
  post.value = data;
}

onBeforeMount(async () => {
  const { data } = await supabase
    .from("posts")
    .select()
    .eq("id", route.params.id);
  post.value = data;
});
</script>

<style lang="scss" scoped></style>
