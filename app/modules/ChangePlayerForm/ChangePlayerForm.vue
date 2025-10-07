<template>
<div>
    <NumberStepper 
        @change="playersStore.changeAccount"
    />
</div>
</template>

<script lang="ts" setup>
import NumberStepper from '~/components/NumberStepper/NumberStepper.vue';

const playersStore = usePlayersStore();

</script>

<style lang="scss">
</style>