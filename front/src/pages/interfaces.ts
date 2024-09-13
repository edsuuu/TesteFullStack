interface Color {
    id: number;
    name: string;
    rgb: string | null;
    hex_code: string;
    deleted: number;
}

interface Image {
    id: number;
    path: string;
    order: number;
    companies_key: string;
    products_id: number;
    deleted: number;
    created_at: string;
    updated_at: string;
}

interface Sku {
    id: number;
    size: string;
    open_grid: number;
    stock: string;
    min_quantity: number;
    stock_id: number | null;
    created_at: string;
    updated_at: string;
    deleted: number;
}

export interface Produto {
    id: number;
    name: string;
    brand: string;
    brands_id: string;
    category: string;
    colors: Color[];
    companies_id: number;
    created_at: string;
    updated_at: string;
    deadline_id: number | null;
    deleted: number;
    description: string | null;
    gender: string;
    id_erp: string;
    images: Image[];
    price: number;
    prompt_delivery: number;
    reference: string;
    skus: Sku[];
    stock: number | null;
    subcategory: string | null;
    type: string | null;
    variant_id: number | null;
}