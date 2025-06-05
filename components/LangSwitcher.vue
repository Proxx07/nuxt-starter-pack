<script setup lang="ts">
const { locales, locale, setLocale } = useI18n();
</script>

<template>
  <div class="switcher">
    <Button
      v-for="lang in locales"
      :key="lang.code"
      :severity="lang.code === locale ? 'success' : 'primary'"
      :label="lang.name"
      @click="setLocale(lang.code)"
    />
    <hr>
    {{ locale }}
  </div>
</template>

<style scoped lang="scss">
.active {
  background: var(--black);
  color: #fff;
}
</style>
