<template>
    <div class="px-5">
        <div class="border-1 border-gray-border flex">
            <button 
                class="bg-gray-btn px-4 py-3 flex-none"
                @click="changeAccount('decrease')"
            >
                <Icon mode="svg" name="ic:baseline-minus" />
            </button>
            <input 
                v-model="account"
                class="p-3 grow text-center"
                type="number" 
                min="0"
            />
            <button 
                class="bg-gray-btn px-4 py-3 flex-none"
                @click="changeAccount('increase')"
            >
                <Icon mode="svg" name="material-symbols:add" />
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ChangeAccountPayload } from '~/shared/interfaces/players';

const emit = defineEmits<{
    (e: 'change', changeAccountPayload: ChangeAccountPayload ): void
}>()
const account = ref(0);

const changeAccount = (changeType: 'increase' | 'decrease') => {
    const result = {
        changeType,
        value: account.value
    }
    account.value = 0;
    emit('change', result);
}
</script>

<style lang="scss">
</style>