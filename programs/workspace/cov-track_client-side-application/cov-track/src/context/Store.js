import { makeAutoObservable } from 'mobx';
import { makeObservable } from "mobx";
import { observer } from 'mobx-react';

// const centralStore = new Store();
class Store {
  users = [];
  visits = [];

  constructor () {
    makeObservable(this, {
      visits: observable,
      users: observable,
      totalUsers: computed,
      totalVisits: computed,
      storeDetails: computed,
      getVisitsByUser: action,
      createVisit: action,
      createUser: action,
      updateVisit: action,
      updateUser: action,
      deleteVisit: action,
      deleteUser: action,
      assignUserToVisit: action
    });
    autorun(logStoreDetails);
  }


  get totalUsers() {
    return this.users.length;
  }

  get totalVisits() {
    return this.visits.length;
  }

  // Get visits using userId
  getVisitsByUser(userId) {
    return this.visits.filter((visit) => {
      return visit.user && visit.user.id === userId;
    });
  }

  createUser(user = { id: 0, firstName: "", lastName: "" }) {
    this.users.push(user);
  }

  createVisit(visit = { id: 0, locationName: "", coordinates: "", startTime: "", endTime: null }) {
    this.visits.push(visit);
  }

  updateUser(userId, update) {
    const userIndexAtId = this.users.findIndex((user) => user.id === userId);
    if (userIndexAtId > -1 && update) {
      this.users[userIndexAtId] = update;
    }
  }

  updateVisit(visitId, update) {
    const visitIndexAtId = this.visits.findIndex((visit) => visit.id === visitId);
    if (visitIndexAtId > -1 && update) {
      this.visits[visitIndexAtId] = update;
    }
  }

  deleteUser(userId) {
    const userIndexAtId = this.users.findIndex((user) => user.id === userId);
    if (userIndexAtId > -1) {
      this.users.splice(userIndexAtId, 1)
    }
  }

  deleteVisit(visitId) {
    const visitIndexAtId = this.visits.findIndex((visit) => visit.id === visitId);
    if (visitIndexAtId > -1) {
      this.visits.splice(visitIndexAtId, 1)
    }
  }

  // Assign a user using userId to a visit using visitId
  assignUserToVisit(userId, visitId) {
    const visitIndexAtId = this.visits.findIndex((visit) => visit.id === visitId);
    const userIndexAtId = this.users.findIndex((visit) => visit.id === userId);
    if (visitIndexAtId > -1 && userIndexAtId > -1) {
      this.visits[visitIndexAtId].user = this.users[visitIndexAtId];
    }
  }

  get storeDetails () {
    return `Tracked ${this.totalVisits()} total visits and ${this.totalUsers()} total users, so far.`
  }

    // Log the store details to the console
  logStoreDetails() {
    console.log(this.storeDetails);
  }

}
