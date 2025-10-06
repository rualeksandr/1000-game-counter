<template>
    <div class="bg-main-bg h-screen overflow-hidden relative">
        <PlayersTable
            v-if="playersStore.players.length"
            :players="playersStore.players"
            @select-player="playersStore.selectPlayer($event)"
        />
        <div 
            v-else
            class="flex h-screen justify-center items-center"
        >
            <button 
                type="button"
                class="bg-accent-blue text-white p-4"
                @click="router.push('/createGame')"
            >
                Создать игру
            </button>
        </div>
        <PlayerInfo />
    </div>

</template>

<script lang="ts" setup>
const router = useRouter();
import PlayerInfo from '~/modules/PlayerInfo/PlayerInfo.vue';
import PlayersTable from '~/modules/PlayersTable/PlayersTable.vue';

const drawerVisible = ref(false);

const playersStore = usePlayersStore();

</script>

<style>
</style>