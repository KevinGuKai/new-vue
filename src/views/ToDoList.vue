<!-- 1.可以輸入文字的輸入框
2.可以標記的checkbox
3.可以刪除的button
4.可以儲存的button -->


<script>
export default {
    data() {
        return {
            newTodos: '',
            deadline: '',
            todos: [
                {
                    id: 1,
                    text: '嗨',
                    check: false,
                },
            ],
        };
    },
    // 當網頁載入時觸發
    mounted() {
        // 將sessionStorage裡的JSON格式資料轉檔放回陣列
        if (sessionStorage.getItem('todos')) {
            this.todos = JSON.parse(sessionStorage.getItem('todos'));
        }
    },
    methods: {
        addTodos() {
            let date = new Date().toISOString().split('T');
            // 解構
            const { newTodos, todos, deadline } = this;
            // 讓 新增事項欄位(newTodos) 為空白時，無法新增新事項
            if (!newTodos || !deadline) return;
            // 抓取 陣列(todos) 裡的最大數id，此id+1後為陣列的下一個id，如果沒有最大數的話則id為1
            const listId = todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
            // 印出新增的事項
            todos.push({
                id: listId,
                text: newTodos,
                check: false,
                currentDate: date[0],
                deadline: deadline,
            });
            // 在印出後，清空新增事項欄位
            this.newTodos = '';
            // 將新一筆資料以JSON格式存入sessionStorage
            sessionStorage.setItem('todos', JSON.stringify(todos));
        },
    },
}
</script>

<template>
    <div class="w-full m-3">進度條</div>
    <form class="border-4 p-2">
        <h1 class="text-x1 px-2 py-1 mb-2">
            代辦事項:
        </h1>
        <div class="px-3">
            <div class="mb-2">
                <span>截止日: </span>
                <input type="date" v-model="deadline" class="border-2">
            </div>
            <input type="text" v-model="newTodos" placeholder="新增事項" class="border px-2">
            <button type="button" @click="addTodos()" class="border px-2">新增</button>

        </div>
        <ul class="px-3 py-2">
            <li v-for=" todo in todos" :key="todo.id" class="px-1 hover:ring-1">
                <input type="checkbox" v-model="todo.done" class="p-1">
                <span :class="{ 'line-through text-sm': todo.done === true }" class="px-2">
                    {{ todo.text }}
                    期限:{{ todo.deadline }}
                </span>
                <div class="px-2 pb-2">
                    <span class="font-light">
                        紀錄日期: {{ todo.currentDate }}
                    </span>
                    <button type="button" @click="removeTodo(todo.id)" class="float-end text-2xl">
                        <font-awesome-icon :icon="['fas', 'trash-can']" />
                    </button>
                </div>
            </li>
        </ul>

    </form>
</template>
<div>
    
</div>
<style>
/* import googl font */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;500;700;900&display=swap');

html,
body {
    font-family: 'Noto Sans TC', sans-serif;
}

#app {
    font-family: 'Noto Sans TC', sans-serif;
}
</style>

