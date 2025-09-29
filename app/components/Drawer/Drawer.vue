<template>
<div
    class="h-0 absolute bottom-0 left-0 w-full"
>
    
    <div 
        class="h-[50vh] bg-white rounded-t-[16px] shadow-xl/30 transition-all duration-300 ease-in-out p-"
        :class="{
            'mt-[-50vh]': visible
        }"
    >
        <div>
            <slot name="title">
                <div class="flex justify-between p-3 items-center">
                    <h3>
                        {{ title }}
                    </h3>
                    <button
                        class="p-2"
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