<template>
  <div>
    <div class="flex flex-col flex-wrap justify-center items-center gap4">
      <h1>Создание нового товара</h1>
      <div class="my-4 mx-4">
        <input
          type="text"
          v-model="title"
          class="focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Заголовок"
        />
      </div>
      <div class="my-4 mx-4">
        <ClientOnly>
          <Editor v-model="body" />
        </ClientOnly>
      </div>
      <div class="my-4 mx-4">
        <input
          type="number"
          v-model="price"
          class="focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Цена"
        />
      </div>

      <input type="file" multiple @change="fils" />

      <button
        @click="postUpload"
        class="bg-indigo-500 rounded-md px-2 py-2 text-white my-4"
      >
        Сохранить
      </button>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();

const title = ref(null);
const body = ref(null);
const files = ref([]);
const price = ref(null);
console.log(body.value);
async function fils(e) {
  files.value = e.target.files;
  console.log(files);
}
async function postUpload() {
  const formData = new FormData();
  for (let i = 0; i < files.value.length; i++) {
    formData.append("files", files.value[i]);
  }
  formData.append("title", title.value);
  formData.append("body", body.value);
  formData.append("price", price.value);

  await $fetch("/api/post/post", {
    method: "POST",
    body: formData,
  });
  await refreshNuxtData();
  files.value = null;
  title.value = null;
  body.value = null;
}
</script>

<style lang="scss" scoped></style>
