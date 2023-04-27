export {};
declare global {
    interface ResponseWithItems<T> {
        code: string;
        data: DataWithItem<T>;
    }

    interface DataWithItem<T> {
        count: number;
        items: T[];
        page?: number;
        rpp?: number;
    }

    interface ResponseWithoutItems<T> {
        code: string;
        data: T;
    }
}
