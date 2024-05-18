import { ReplaySubject } from 'rxjs';

export abstract class AbsBaseService {
    protected destroy$: ReplaySubject<boolean> = new ReplaySubject(1);


    protected abstract getTable(): void;
    protected destroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
