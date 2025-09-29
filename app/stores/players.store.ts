import type { Player } from "~/shared/interfaces/players"
import { uuidv4 } from "~/shared/lib/uuid"

export const usePlayersStore = defineStore("players", () => {
    const playerInfoStore = usePlayerInfoStore();
    const {playerInfoVisible} = storeToRefs(playerInfoStore)
    const router = useRouter();
    const players = ref<Player[]>([])

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

    return {
        players, 
        createGame,
        selectedPlayer,
        selectPlayer
    }
})

