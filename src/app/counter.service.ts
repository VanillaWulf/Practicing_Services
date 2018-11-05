export class CounterService {
  inactiveClick = 0;
  activeClick = 0;

  activeLogging() {
    this.activeClick++;
    console.log('Active clicks:' + this.activeClick);
  }

  inActiveLogging() {
    this.inactiveClick++;
    console.log('InActive clicks:' + this.inactiveClick);
  }
}
