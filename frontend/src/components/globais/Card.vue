<template>
  <div class="card">
    <div class="card-header" v-if="this.$slots['header']">
      <slot name="header"></slot>
    </div>
    <div class="card-body" v-if="this.$slots.default">
      <slot name="default"></slot>
    </div>
    <div class="card-footer" v-if="this.$slots['footer']">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>
