<template>
  <Dialog
    as="div"
    class="lg:hidden"
    @close="props.modelValue = false"
    :open="props.modelValue"
  >
    <div class="fixed inset-0 z-10" />
    <DialogPanel
      class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
    >
      <div class="flex items-center justify-between">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>

          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
        <button
          type="button"
          class="-m-2.5 rounded-md p-2.5 text-gray-700"
          @click="emitFunction"
        >
          <span class="sr-only">Close menu</span>
          <Icon name="material-symbols:close" width="24" height="24" />
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <a
              href="#"
              class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >Features</a
            >
            <a
              href="#"
              class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >Marketplace</a
            >
            <a
              href="#"
              class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >Company</a
            >
          </div>
          <div class="py-6">
            <a
              href="#"
              class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >Вход</a
            >
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
</template>

<script setup>
import { Dialog, DialogPanel } from "@headlessui/vue";
const emit = defineEmits(["update:modelValue"]);
const emitFunction = function () {
  emit("update:modelValue", !props.modelValue);
};

const props = defineProps({
  modelValue: {
    type: Boolean,
  },
});
console.log(props.modelValue + "Из дочернего");
</script>
