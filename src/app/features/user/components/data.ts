import { Category } from "../../../models/category";
import { Question } from "../../../models/question";

export const categories: Category[] = [
    {
        id: 1,
        name: "Category1",
        description: "Category"
    },
    {
        id: 2,
        name: "Category2",
        description: "Category"
    },
    {
        id: 2,
        name: "Category3",
        description: "Category"
    },
];

export const myQuestion: Question[] = [
    {
        id: 1,
        title: "Question1",
        content: "Question1",
        categoryName: "Category1",
        userName: "user2",
        createdAt: "2024",
        viewsCount: 0,
        questionStatus: "OPEN"
    },
    
    {
        id: 2,
        title: "Question2",
        content: "Question2",
        categoryName: "Category2",
        userName: "user2",
        createdAt: "2024",
        viewsCount: 0,
        questionStatus: "OPEN"
    },
    {
        id: 3,
        title: "Question3",
        content: "Question3",
        categoryName: "Category3",
        userName: "user2",
        createdAt: "2024",
        viewsCount: 0,
        questionStatus: "OPEN"
    },

]