// File implements global singelton pattern
import { makeAutoObservable } from 'mobx';

class Store {
  secondsPassed = 0;
}

const store = new Store()

export default store
