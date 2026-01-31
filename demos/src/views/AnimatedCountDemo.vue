<script setup>
import { AnimatedCount } from "druware-components";
</script>

<template>
  <div class="container">
    <p class="mb-3">
      Display an animated count card
    </p>

    <AnimatedCount :count="1235" label="Total Users" iconFamily="fa" icon="fa-users" iconStyle="has-text-success" />
    <AnimatedCount :count="43" card label="Inactive Users" iconFamily="fa" icon="fa-users" iconStyle="has-text-danger" />
    <AnimatedCount :count="35" label="Pending Confirmation" iconFamily="fa" icon="fa-users" iconStyle="has-text-warning" />

    <h3 class="subtitle">
      Properties
    </h3>

    <h4>Count</h4>

    <p>Sets the count to be animated and displayed.</p>


  </div>
</template>

<style scoped>

</style>
