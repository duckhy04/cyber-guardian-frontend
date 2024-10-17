export interface Question {
    id: number;
    title: string;
    content: string;
    userName: string;
    categoryName: string;
    questionStatus: string;
    viewCount: number;
    createAt: string;
    updateAt?: string;
}
