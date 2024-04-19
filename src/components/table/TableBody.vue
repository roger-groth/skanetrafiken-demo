<script setup lang="ts">
import type { User } from '@/faker';
import { useUserDataStore } from '@/stores/userData';
import { getLocalizedDateStr, isDate } from '@/utils/utils';

defineProps<{
  users: User[];
  isEditMode: boolean;
}>();
const { setUserEditable, setTmpUser } = useUserDataStore();

const handleSetUserEditable = (isEditMode: boolean, user: User) => {
  if (!isEditMode) {
    setUserEditable(user);
  }
};

const getBodyClass = (isEditMode: boolean) => {
  return isEditMode ? 'flex-1 compact-table ' : 'flex-1 lg:flex-none';
};

const getTrClass = (isEditMode: boolean) => {
  return isEditMode
    ? 'flex flex-col wrap 2xl:table-row 2xl:mb-0'
    : 'flex flex-col wrap lg:table-row mb-2 lg:mb-0';
};

const updateValue = (key: keyof User, prevUser: User, e: Event) => {
  const target = e.target as HTMLInputElement;
  const user = { ...prevUser, [key]: target.value };

  setTmpUser(user);
};
</script>

<template>
  <tbody :class="getBodyClass(isEditMode)">
    <tr v-for="user in users" :key="user.username" :class="getTrClass(isEditMode)">
      <td
        v-for="(value, key) in user"
        :key="key"
        class="border-grey-light border hover:bg-gray-100 p-3"
        @click="handleSetUserEditable(isEditMode, user)"
      >
        <input
          :value="formatValue(value)"
          @input="(ev) => updateValue(key, user, ev)"
          v-if="isEditMode && key !== 'username'"
          class="w-full"
        />
        <span v-else :class="{ 'cursor-pointer': key !== 'username'}">{{ formatValue(value) }}</span>
      </td>
    </tr>
  </tbody>
</template>

<script lang="ts">
const formatValue = (value: string | Date) => {
  if (isDate(value)) {
    return getLocalizedDateStr(value);
  }

  return value;
};
</script>

<style scoped>
tr {
  padding-top: 1px;
  padding-bottom: 1px;
}
</style>
