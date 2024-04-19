<script setup lang="ts">
import type { User } from '@/faker';
import { dataLabels } from '@/stores/userData';

defineProps<{
  users: User[];
  isEditMode: boolean;
}>();

const keys = Object.keys(dataLabels) as Array<keyof User>;

const getTrClass = (isEditMode: boolean) => {
  return isEditMode
    ? 'bg-slate-500 flex flex-col wrap 2xl:table-row rounded-l-2xl 2xl:rounded-none 2xl:mb-0 compact-table '
    : 'bg-slate-500 flex flex-col wrap lg:table-row rounded-l-lg lg:rounded-none mb-2 lg:mb-0';
};
</script>

<template>
  <thead class="text-white">
    <tr :class="getTrClass(isEditMode)" v-for="n in users.length" :key="n">
      <th class="p-3 text-left" v-for="key in keys" :key="key">{{ dataLabels[key] }}</th>
    </tr>
  </thead>
</template>
