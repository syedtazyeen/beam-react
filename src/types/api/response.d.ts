interface ApiResponse<T> {
    statusCode: number;
    message: string;
    data: T[];
    timestamp: string;
}

export interface PaginationResponse<T> {
    statusCode: number;
    message: string;
    data: Pagination<T>;
    timestamp: string;
}

export interface Pagination<T> {
    totalPages: number;
    list: T[];
    totalCount: number;
    currentPage: number;
    type: string;
}

export default ApiResponse