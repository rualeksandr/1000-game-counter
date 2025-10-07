<template>
    <div class="p-6">
        <div v-for="(name, i) in usersNames" :key="i"
            class="flex mb-3"
        >
            <input 
                v-model="usersNames[i]"
                type="text"
                class="w-full rounded-xl border border-accent-blue px-3 py-2 mr-2"  
                placeholder="Введите имя игрока"
            />
            <button 
                v-if="usersNames.length > 2"
                class="flex justify-center items-center text-white rounded-xl bg-red-400 px-4 py-2"
                @click="usersNames.splice(i, 1)"
            >
                <Icon name="mdi:close" mode="svg" class="h-4 w-4" />
            </button>
        </div>
        <button 
            v-if="usersNames.length < 4"
            class="text-accent-blue rounded-xl border-1 border-accent-blue px-4 py-2 mr-3"
            type="button"
            @click="addPlayer()"
        >
            + Добавить игрока
        </button>

        <button 
            class="text-white rounded-xl bg-accent-blue px-3 py-2 mr-3"
            type="button"
            @click="validateAndSubmitForm()"
        >
            Начать игру
        </button>
        <span 
            class="text-red-500"
            v-show="isErrorEmptyValue"
        >
            Укажите имя всем игрокам!
        </span>
        <span 
            class="text-red-500"
            v-show="isErrorBigValue"
        >
            Имя не больше 20 символов!
        </span>
    </div>
</template>

<script lang="ts" setup>
const playersStore = usePlayersStore();

const usersNames = ref<string[]>(['','']);
const isErrorEmptyValue = ref(false);
const isErrorBigValue = ref(false);

const addPlayer = () => {
    console.log(usersNames.value);
    usersNames.value.push('');
}

const validateAndSubmitForm = () => {
    for (let i = 0; i < usersNames.value.length; i++) {
        if (!usersNames.value[i]) {
            isErrorEmptyValue.value = true;
            return;
        }
        if (usersNames.value[i]!.trim() === '') {
            isErrorEmptyValue.value = true;
            return;
        }
        if (usersNames.value[i]!.trim().length > 5) { 
            isErrorBigValue.value = true;
            return;
        }
    }

    playersStore.createGame(usersNames.value);
}

</script>

<style></style>
