export interface ResponseContent<T> {
    message: T;
    status: number;
}

export interface JsonResponse<T> {
    json(): Promise<ResponseContent<T>>;
}

export interface ArrayObject<T> {
    [key: string]: T[];
}
