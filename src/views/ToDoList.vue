<!-- 1.可以輸入文字的輸入框
2.可以標記的checkbox
3.可以刪除的button
4.可以儲存的button -->


<script>
export default {
    data() {
        return {
            newTodos: '',
            todos: [
                {
                    id: 1,
                    text: '宏碁最好是給我往上走',
                    check: false,
                },
            ],
        };
    },
    methods: {
        addTodos() {
            // 讓 新增事項欄位(newTodos)為空白時，無法新增新事項
            if(!this.newTodos) return;
            // 抓取 陣列(todos) 裡的最大數id，此id+1後為陣列的下一個id，如果沒有最大數的話則id為1
            const listId = this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
            // 印出新增的事項
            this.todos.push({
                id: listId,
                text: this.newTodos,
                check: false,
            });
            // 在印出後，清空新增事項欄位
            this.newTodos = '';
        },
    },
}
</script>

<template>
    <form class="border p-2">
        <h1 class="text-x1 px-2 py-1">
            代辦事項:
        </h1>
        <div class="">
            <input type="text" v-model="newTodos" placeholder="新增事項" class="border px-2">
            <button type="button" @click="addTodos()" class="border px-2">新增</button>
        </div>
        <ul class="px-3 py-2">
            <li v-for=" todo in todos" :key="todo.id" class="px-1">
                <input type="checkbox" class="p-1">
                <span class="px-3">
                    {{ todo.text }}
                </span>
            </li>
        </ul>
        <button type="button" class="px-3 py-2">
            <font-awesome-icon :icon="['fas', 'trash-can']" />
        </button>
    </form>
    
</template>
<div>
    
</div>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;500;700;900&display=swap');

html,
body {
    font-family: 'Noto Sans TC', sans-serif;
}

#app {
    font-family: 'Noto Sans TC', sans-serif;
}
</style>

