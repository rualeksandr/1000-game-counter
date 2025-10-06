<template>
<div>
    <Drawer 
        v-model:visible="playerInfoVisible"
        :title="playersStore.selectedPlayer?.name || ''"
    >
            <ChangePlayerForm />
            <span class="text-2xl p-5 text-center">История</span>
            <AccountHistory />
    </Drawer>
</div>
</template>

<script lang="ts" setup>
import Drawer from '~/components/Drawer/Drawer.vue';
import ChangePlayerForm from '../ChangePlayerForm/ChangePlayerForm.vue';
import AccountHistory from '../AccountHistory/AccountHistory.vue';

const playersStore = usePlayersStore();
const playerInfoStore = usePlayerInfoStore();
const {playerInfoVisible} = storeToRefs(playerInfoStore);
</script>

<style lang="scss">
</style>