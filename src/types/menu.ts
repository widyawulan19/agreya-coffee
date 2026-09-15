
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



// AGREYA COFFEE 

export interface MenuItem {
    // id: number;
    title: string;
    desc: string;
    price: string;
    tags?: string[];
    menuPicks?: string[];
    extraTag?: string[];
    img?: string;
}

export interface MenuCategory {
    id: number;
    category: string;
    description: string;
    items: MenuItem[];
    jumlahItem: number;
}

