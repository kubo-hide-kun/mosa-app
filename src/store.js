import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        now: '',
        place: '',
        feeling: '',
        freeTime: '',
        task: [
            {
                id: 1,
                name: 'ハッカソン',
                dedLine: new Date(2019, 5, 22),
                difficulty: 2,
                usingTime: 120,
                times: [
                    {start: '9:30', end: '11:30'},
                    {start: '22:30', end: '23:00'},
                ],
                place: ['福岡'],
                feeling: 'Good',
                isActive: false
            },
            {
                id: 2,
                name: 'レポート',
                dedLine: new Date(2019, 5, 24),
                difficulty: 3,
                usingTime: 40,
                times: [
                    {start: '9:30', end: '11:30'},
                    {start: '22:30', end: '23:00'},
                ],
                place: ['北九州高専'],
                feeling: 'Bad',
                isActive: true
            },
            {
                id: 3,
                name: 'テスト',
                dedLine: new Date(2019, 5, 30),
                difficulty: 3,
                usingTime: 90,
                times: [
                    {start: '9:30', end: '11:30'},
                    {start: '22:30', end: '23:00'},
                ],
                place: ['北九州高専'],
                feeling: 'Bad',
                isActive: false
            },
            {
                id: 4,
                name: '代数幾何の宿題',
                dedLine: new Date(2019, 5, 25),
                difficulty: 1,
                usingTime: 20,
                times: [],
                place: [],
                feeling: 'Bad',
                isActive: false
            },
            {
                id: 5,
                name: '高専祭準備',
                dedLine: new Date(2019, 11, 20),
                difficulty: 1,
                usingTime: 90,
                times: [],
                place: ['北九州高専'],
                feeling: 'Good',
                isActive: false
            },
            {
                id: 6,
                name: 'TypeScriptの勉強',
                dedLine: new Date(2019, 6, 1),
                difficulty: 0,
                usingTime: 10,
                times: [],
                place: [],
                feeling: 'Good',
                isActive: false
            },
            {
                id: 7,
                name: 'パワポの作成',
                dedLine: new Date(2019, 5, 23),
                difficulty: 0,
                usingTime: 70,
                times: [],
                place: [],
                feeling: 'Good',
                isActive: false
            },
            {
                id: 8,
                name: 'Cコンパイラの作成',
                dedLine: new Date(2019, 11, 30),
                difficulty: 0,
                usingTime: 120,
                times: [],
                place: [],
                feeling: 'Good',
                isActive: true
            },
            {
                id: 9,
                name: '先生へのメール',
                dedLine: new Date(2019, 5, 30),
                difficulty: 1,
                usingTime: 10,
                times: [],
                place: [],
                feeling: 'Bad',
                isActive: true
            },
            {
                id: 10,
                name: 'インターンのネット面接',
                dedLine: new Date(2019, 5, 30),
                difficulty: 2,
                usingTime: 30,
                times: [
                    {start: '14:30', end: '19:00'}
                ],
                place: [],
                feeling: 'Bad',
                isActive: false
            },
            {
                id: 11,
                name: '企業訪問',
                dedLine: new Date(2020, 3, 28),
                difficulty: 3,
                usingTime: 180,
                times: [
                    {start: '9:30', end: '19:00'}
                ],
                place: ['東京'],
                feeling: 'Bad',
                isActive: false
            },
            {
                id: 12,
                name: '散髪',
                dedLine: new Date(2019, 6, 1),
                difficulty: 2,
                usingTime: 60,
                times: [
                    {start: '9:30', end: '19:00'}
                ],
                place: [],
                feeling: 'Good',
                isActive: false
            },
            {
                id: 13,
                name: '大熱血アセンブラ入門 の購入',
                dedLine: new Date(2019, 8, 2),
                difficulty: 0,
                usingTime: 5,
                times: [],
                place: [],
                feeling: 'Good',
                isActive: true
            },
        ],
    },
    mutations: {
        addTask(state, obj) {
            state.task = [
                ...state.task,
                {
                    id: state.task.length + 1,
                    name: obj.name,
                    dedLine: obj.dedLine,
                    difficulty: obj.difficulty,
                    usingTime: obj.usingTime,
                    times: obj.times,
                    place: obj.place,
                    feeling: obj.feeling,
                    isActive: false,
                },
            ];
        },
        nowFeeling(state, obj) {
            state.now = new Date();
            state.place = obj.place;
            state.feeling = obj.feeling;
            state.freeTime = obj.freeTime;
        },
        deleteTask (state, obj) {
            state.task.forEach((task, index, array) => {
                for(let i = 0; i < obj.id.length; i++) {
                    if(task.id === obj.id[i]) {
                        array.splice(index, 1);
                    }
                }
            });
            console.table(state.task);
        },
    },
    actions: {}
})
