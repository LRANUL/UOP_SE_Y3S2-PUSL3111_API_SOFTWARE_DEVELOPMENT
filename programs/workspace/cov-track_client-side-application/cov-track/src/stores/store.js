import create from 'zustand';

export const useStore = create(set => ({
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

export const useMiscStore = create(set => ({
    param: 0,
    setParam: (param) => set({ param })
}));
