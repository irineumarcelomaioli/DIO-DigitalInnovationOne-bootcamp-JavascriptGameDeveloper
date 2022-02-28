class Observable {
  constructor() {
    this.Observables = [];
  }

  subscribe(fn) {
    this.Observables.push(fn);
  }

  notify(data) {
    this.Observables.forEach(fn => fn(data));
  }

  unsubscribe(fn) {
    this.Observables = this.Observables.filter(obs => obs !== fn);
  }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('Notified 1');
o.unsubscribe(logData2);
o.notify('Notified 2');