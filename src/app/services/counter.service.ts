export class CounterService {
  private inactiveCount = 0;
  private activeCount = 0;
  increamentedToInactive() {
    this.inactiveCount++;
    console.log('Inactive Count >', this.inactiveCount);
  }
  incrementedToActive() {
    this.activeCount++;
    console.log('Active Count >', this.activeCount);
  }
}
