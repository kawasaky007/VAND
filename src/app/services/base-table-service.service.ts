import { BehaviorSubject, Observable } from "rxjs";
import { AbsBaseService } from "./base-service.service";
import { PayloadList } from "../models";

export class BaseTableService extends AbsBaseService {

    private subscriptionLoading = new BehaviorSubject<boolean>(false);
    loading$: Observable<boolean> = this.subscriptionLoading.asObservable();
    private subscriptionTotal = new BehaviorSubject<number>(0);
    total$: Observable<number> = this.subscriptionTotal.asObservable();
    keyword: string = '';
    page: number = 1;
    size: number = 10;
    sort: string | null = null;
    filterType: number | null = null;
    getPayload(): PayloadList {
        return {
            'page[number]': this.page,
            'page[size]': this.size,
            'filter[type]': this.filterType,
            sort: this.sort,
            'filter[name]': this.keyword


        }
    }
    getTable() {

    }

    setLoading(value: boolean) {

        this.subscriptionLoading.next(value)
    }
    setTotal(value: number) {
        this.subscriptionTotal.next(value)
    }
    setPageNumber(value: number) {
        this.page = value;
    }
    setKeyword(value: string) {
        this.keyword = value;
    }
    setFilterType(value: number) {
        this.filterType = value;
    }
    setSort(value: string | null) {
        this.sort = value
    }
}