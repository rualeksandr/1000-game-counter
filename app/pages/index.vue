<template>
    <div class="bg-main-bg h-screen">
        <PlayersTable 
            :players="players"
        />
        <div class="flex h-screen justify-center items-center">
            <button class="bg-accent-blue text-white p-4">Создать игру</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Player } from '~/shared/interfaces/players';

const players: Player[] = [
    // {
    //     id: "string",
    //     name: "Саша",
    //     scores: 200,
    //     bolts: 0,
    //     actionHistory: [0, 200]
    // },
    // {
    //     id: "string",
    //     name: "Женя",
    //     scores: 100,
    //     bolts: 0,
    //     actionHistory: [0, 100]
    // },
    // {
    //     id: "string",
    //     name: "Настя",
    //     scores: 30,
    //     bolts: 1,
    //     actionHistory: [0, 30]
    // },
]
</script>

<style>
</style>