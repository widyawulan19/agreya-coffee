
// DKULTURE CAFE 

export interface MenuItemCafe {
    id: number;
    name: string;
    description: string;
    tags: string[];
    menuPicks: string[];
    price: {
        medium: number;
        large: number;
    };
}

export interface MenuCategoryCafe {
    id: number;
    category: string;
    categoryDesc: string;
    items: MenuItemCafe[];
}

