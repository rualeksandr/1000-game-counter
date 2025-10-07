<template>
    <div>
        <div 
            v-for="(player, index) in players" 
            class="flex justify-between p-[26px]"
            :class="[
                (index % 2) ? 'bg-white' : 'bg-anti-flash-white',
                {'border-l-4 border-accent-blue': playerStore.selectPlayerId === player.id}
            ]"
            
            @click="emit('select-player', player.id)"
        >
            <div>{{ player.name }}</div>
            <div>{{ player.scores }}</div>
            <div class="text-danger">{{ player.bolts }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Player } from '~/shared/interfaces/players';

const playerStore = usePlayersStore();

const {
    players = []
} = defineProps<{
    players: Player[]
}>()

const emit = defineEmits(['select-player']);
</script>

<style>
</style>