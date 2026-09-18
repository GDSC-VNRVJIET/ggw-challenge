export interface Product {
  id: string;
  name: string;
  price: number; // price in cents
  stock: number;
  discountPercent: number; // 0-100
}

export const PRODUCTS: Product[] = [
  { id: 'p_1', name: 'Wireless Mouse', price: 2500, stock: 10, discountPercent: 0 },
  { id: 'p_2', name: 'Mechanical Keyboard', price: 7500, stock: 5, discountPercent: 10 },
  { id: 'p_3', name: 'USB-C Hub', price: 4000, stock: 3, discountPercent: 20 },
  { id: 'p_4', name: 'Gaming Monitor', price: 20000, stock: 8, discountPercent: 28 },
];

export function findProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function deleteProduct(id: string): boolean |void {
    // TODO
}

export function searchProducts(query: string): Product[] {
    const normalizedQuery = query.trim();

    if (!normalizedQuery) {
        return [];
    }

    return PRODUCTS.filter((product) =>
        product.name.includes(normalizedQuery)
    );
}
