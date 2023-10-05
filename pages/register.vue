<template>
  <div class="flex flex-wrap flex-col justifu-center items-center mt-4">
    <h2 class="text-lg mb-2">Регистрация</h2>
    <input
      v-model="email"
      type="email"
      class="border border-indigo px-2 py-2 mb-4 w-[30%]"
    />
    <input
      v-model="password"
      type="text"
      class="border border-indigo px-2 py-2 mb-2 w-[30%]"
    />
    <button
      class="bg-indigo-500 rounded-md px-4 py-2 text-white w-[150px]"
      @click="reg"
    >
      reg
    </button>
  </div>
</template>

<script setup>
const { $nt } = useNuxtApp();
const supabase = useSupabaseClient();
const email = ref(null);
const password = ref(null);
const reg = async () => {
  try {
    let { data, error } = await supabase.auth
      .signUp({
        email: email.value,
        password: password.value,
      })
      .then((data) => {
        console.log(data);
        if (data.data.session) {
          $nt.show({ content: "Регистрация пройдена" });
        } else if (data.error) {
          $nt.show({ content: data.error.message });
        }
      });
  } catch (error) {
    $nt.show({ content: error });
  }
};
</script>

<style lang="scss" scoped></style>
