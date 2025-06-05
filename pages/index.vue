<script setup lang="ts">
import VIcon from '@components/VIcon.vue';
import { useAdvantages } from '@composables/useAdvantages';

const { advantages, translateWithNuxt } = useAdvantages();
</script>

<template>
  <div>
    <h1>
      {{ $t('hello-world') }}
    </h1>

    translateWithNuxt - {{ translateWithNuxt }}

    <div v-for="item in advantages" :key="item.title">
      <VIcon :icon="item.icon" />
      <b>{{ item.title }}</b>
      <div class="text">
        {{ $t(item.text) }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
