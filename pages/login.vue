<template>
  <div>
    <input v-model="email" type="email" />
    <input v-model="password" type="text" />
    <button @click="login">reg</button>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();
const email = ref(null);
const password = ref(null);
const login = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
};
const user = useSupabaseUser();
</script>

<style lang="scss" scoped></style>
