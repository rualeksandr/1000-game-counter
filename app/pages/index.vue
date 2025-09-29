<template>
    <div class="bg-main-bg h-screen">
        <PlayersTable
            v-if="playersStore.players.length"
            :players="playersStore.players"
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
    </div>
    <button type="button" @click="drawerVisible = !drawerVisible">модалка</button>
    <Drawer v-model:visible="drawerVisible">ffjfjfj</Drawer>
</template>

<script lang="ts" setup>
const router = useRouter();
import Drawer from '~/components/Drawer/Drawer.vue';
import PlayersTable from '~/modules/PlayersTable/PlayersTable.vue';

const drawerVisible = ref(false);

const playersStore = usePlayersStore();
</script>

<style>
</style>