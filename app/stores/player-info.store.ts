export const usePlayerInfoStore = defineStore("player-info", () => {
    const playerInfoVisible = ref(false);
    return {
        playerInfoVisible
    };
})