export interface Question {
    id: number;
    title: string;
    content: string;
    userName: string;
    categoryName: string;
    questionStatus: string;
    viewsCount: number;
    createdAt: string;
    updatedAt?: string | null;
}
