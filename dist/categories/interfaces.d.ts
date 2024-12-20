export interface Category {
    id: string;
    name: string;
    items: CategoryItems;
}
export type Categories = Category[];
export interface CategoryItem {
    id: number;
    name: string;
}
export type CategoryItems = CategoryItem[];
