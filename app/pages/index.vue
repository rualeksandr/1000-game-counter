<template>
    <div class="bg-main-bg h-screen overflow-hidden relative">
        <template v-if="playersStore.players.length">
            <PlayersTable
                :players="playersStore.players"
                @select-player="playersStore.selectPlayer($event)"
            />
            <button 
                class="bg-accent-blue text-white border-1"
                @click="isOpenModalEndingGame = true"
            >
                Завершить игру
            </button>
        </template>
        
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

        <UModal 
            v-model:open="isOpenModalEndingGame"
            title="Завершить игру?" 
            :ui="{ footer: 'justify-end' }"
        >
            <template #footer>
                <UButton 
                    label="Нет" 
                    color="neutral" 
                    variant="outline" 
                    @click="isOpenModalEndingGame = false" 
                />
                <UButton 
                    label="Да" 
                    color="neutral" 
                    variant="outline" 
                    @click="playersStore.endGame(); isOpenModalEndingGame = false" 
                />
            </template>
        </UModal>
    </div>

</template>

<script lang="ts" setup>
const router = useRouter();
import PlayerInfo from '~/modules/PlayerInfo/PlayerInfo.vue';
import PlayersTable from '~/modules/PlayersTable/PlayersTable.vue';

const drawerVisible = ref(false);
const isOpenModalEndingGame = ref(false);

const playersStore = usePlayersStore();

if (playersStore.checkGameState()) {
    playersStore.loadGameState();
}

</script>

<style>
</style>