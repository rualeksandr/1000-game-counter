import type { ChangeAccountPayload, Player } from "~/shared/interfaces/players"
import { roundToNearest5 } from "~/shared/lib/helpers/numbers";
import { uuidv4 } from "~/shared/lib/uuid"

export const usePlayersStore = defineStore("players", () => {
    const playerInfoStore = usePlayerInfoStore();
    const {playerInfoVisible} = storeToRefs(playerInfoStore)
    const router = useRouter();
    const players = ref<Player[]>([])

    const saveGameState = () => {
        localStorage.setItem('playersStore', JSON.stringify(players.value));
    }

    const createGame = (arrName: string[]) => {
        players.value = arrName.map((item) => {
            return {
                id: uuidv4(),
                name: item,
                scores: 0,
                bolts: 0,
                actionHistory: []
            }
        })
        saveGameState();
        router.push('/');
    }

    const selectPlayerId = ref<string | null>(null);

    const selectedPlayer = computed(() => {
        if (!selectPlayerId.value) return null;
        return players.value.find((item) => {
            return item.id === selectPlayerId.value;
        });
    })

    const selectPlayer = (id: string) => {
        selectPlayerId.value = id;
        playerInfoVisible.value = true;
    }

    const changeAccount = (changeAccountPayload: ChangeAccountPayload) => {
        selectedPlayer.value?.actionHistory.push(changeAccountPayload);
        
        if (changeAccountPayload.value === 0) {
            if (selectedPlayer.value!.bolts >= 2) {
                selectedPlayer.value!.bolts = 0;
                changeAccount({
                    changeType: 'decrease',
                    value: 120
                })
            } else {
                selectedPlayer.value!.bolts += 1;
            }
            saveGameState();
            return
        }
        selectedPlayer.value!.bolts = 0;
        if (changeAccountPayload.changeType === 'increase') {
            selectedPlayer.value!.scores += roundToNearest5(changeAccountPayload.value);
        } else { 
            selectedPlayer.value!.scores -= roundToNearest5(changeAccountPayload.value);
        }
        saveGameState();
    }

    
    const loadGameState = () => {
        const state = localStorage.getItem('playersStore');
        if (state) {
            players.value = JSON.parse(state);
        }
    }
    
    const deleteGameState = () => {
        localStorage.removeItem('playersStore');
    }

    const checkGameState = () => {
        return !!localStorage.getItem('playersStore');
    }

    const endGame = () => {
        deleteGameState();
        players.value = [];
    }

    return {
        players, 
        createGame,
        selectedPlayer,
        selectPlayerId,
        selectPlayer,
        changeAccount,
        saveGameState,
        loadGameState,
        deleteGameState,
        checkGameState,
        endGame
    }
})

