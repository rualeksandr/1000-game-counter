<template>
<div class="px-3 text-center text-xl">
    <div v-if="true" class="flex flex-col-reverse">
        <div 
            v-for="item in history"
            class="mb-2"
            :class=" (item.changeType === 'decrease' || item.value === 0) ? 'text-danger' : 'text-success' "
        >   
            {{ displayHistoryRecord(item) }}
        </div>
    </div>
    <span v-else>Список пуст</span>
</div>
</template>

<script lang="ts" setup>
import type { ChangeAccountPayload } from '~/shared/interfaces/players';
import { roundToNearest5 } from '~/shared/lib/helpers/numbers';

const props = defineProps<{
    history: ChangeAccountPayload[]
}>()

const displayHistoryRecord = (historyRecord: ChangeAccountPayload) => {
    if (historyRecord.value === 0) {
        return 'Болт';
    }
    
    const changeTypeSymbol = (historyRecord.changeType === 'increase') ? '+' : '-';
    return `${changeTypeSymbol}${roundToNearest5(historyRecord.value)}`;
}
</script>

<style lang="scss">
</style>
