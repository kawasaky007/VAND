export interface PayloadList {
    'page[number]': number;
    'page[size]': number;
    sort?: string | null,
    'filter[type]': number | null,
    'filter[name]': string
}

export interface DataList<T> {
    data: Array<T>;
    links?: Links;
    meta: Meta;
    status: number;
    success: boolean;

}

export interface Meta {
    per_page: number;
    current_page: number;
    from: number;
    to: number;
    total: number;
    last_page: number;
    path: string;
}
export interface Links {
    first: string,
    last: string,
    prev: string,
    next: string
}