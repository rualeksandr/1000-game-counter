<template>
<div>
    <Drawer 
        v-model:visible="playerInfoVisible"
        :title="playersStore.selectedPlayer?.name || ''"
    >
            <ChangePlayerForm />
    </Drawer>
</div>
</template>

<script lang="ts" setup>
import Drawer from '~/components/Drawer/Drawer.vue';
import ChangePlayerForm from '../ChangePlayerForm/ChangePlayerForm.vue';

const playersStore = usePlayersStore();
const playerInfoStore = usePlayerInfoStore();
const {playerInfoVisible} = storeToRefs(playerInfoStore);
</script>

<style lang="scss">
</style>