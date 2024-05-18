export abstract class AbsBaseModalComponent {

    active: boolean = false;

    show(args?: any): void {
        this.active = true;
        this.initShow(args);
    }
    close() {
        this.active = false;
    }
    protected initShow(args?: any): void { }

}