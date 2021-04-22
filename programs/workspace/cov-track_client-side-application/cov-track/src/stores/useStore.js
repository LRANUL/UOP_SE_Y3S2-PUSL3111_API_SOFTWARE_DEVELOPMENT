import createStore from 'zustand';
import persist from '../utils/persist';

export const useStore = createStore(set => ({
    param: 'InitialValue',
    setParam: (param) => set({ param }),

    data: 'InitialString',
    setData: (data) => set({ data }),

    geoData: {
        "latitude": "1",
        "longitude": "1",
    },
    setGeoData: (geoData) => set({ geoData }),

}));

export const useTodoListStore = createStore(
    persist(
        {
            key: 'todoList',
            denylist: ['isLoading', 'errorMessage']
        },
        (set) => ({
            isLoading: false,
            errorMessage: '',
            data: [
                {
                    id: '1',
                    text: 'first note',
                    date: new Date().toISOString(),
                    completed: false
                }
            ],
            create: (todoRequest) => {
                set((state) => ({
                    data: [
                        {
                            id: new Date().getTime().toString(),
                            ...todoRequest
                        },
                        ...state.data
                    ]
                }))
            },
            remove: (todoId) => {
                set((state) => ({
                    data: state.data.filter((item) => item.id !== todoId)
                }))
            },
            update: (todoId, todoRequest) => {
                set((state) => ({
                    data: state.data.map((item) =>
                        item.id === todoId
                            ? {
                                ...item,
                                ...todoRequest
                            }
                            : item
                    )
                }))
            },
            clear: () => {
                set((state) => ({
                    data: []
                }))
            }
        })
    )
);
