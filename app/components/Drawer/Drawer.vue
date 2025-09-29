<template>
<div
    class="h-0 relative"
>
    <div 
        class="h-[50vh] bg-white rounded-t-1"
        :class="{
            'mt-[-100%]': visible
        }"
    >
        <slot />
    </div>
</div>
</template>

<script lang="ts" setup>
const visible = defineModel('visible', {
    default: false
});
</script>

<style lang="scss">
</style>