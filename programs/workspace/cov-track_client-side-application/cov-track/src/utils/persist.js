import { configurePersist } from 'zustand-persist';
import AsyncStorage from '@react-native-community/async-storage';

const { persist, purge } = configurePersist({
    storage: AsyncStorage
});

export default persist;
export { purge };
