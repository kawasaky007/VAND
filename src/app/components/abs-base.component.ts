import { ReplaySubject } from "rxjs";

export abstract class AbsBaseComponent {
    protected destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

    constructor(
    ) {
    }



    protected destroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}