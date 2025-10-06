<template>
<div
    class="h-0 absolute bottom-0 left-0 w-full"
>
    
    <div 
        class="h-[50vh] bg-white rounded-t-3xl shadow-[0_-2px_10px_0_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out p-"
        :class="{
            'mt-[-50vh]': visible
        }"
    >
        <div>
            <slot name="title">
                <div class="flex justify-between p-5 items-center text-2xl">
                    <h3>
                        {{ title }}
                    </h3>
                    <button
                        class="p-3"
                        type="button"
                        @click="visible = false"
                    >
                    <Icon name="material-symbols:close"></Icon>
                </button>
                </div>
            </slot>
            
        </div>
        <slot />
    </div>
</div>
</template>

<script lang="ts" setup>
const visible = defineModel('visible', {
    default: false
});

const {
    title = 'hghghgh'
} = defineProps<{
    title: string
}>()
</script>

<style lang="scss">
</style>