import type { Player } from "~/shared/interfaces/players"
import { uuidv4 } from "~/shared/lib/uuid"

export const usePlayersStore = defineStore("players", () => {
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

    return {
        players, 
        createGame
    }
})

