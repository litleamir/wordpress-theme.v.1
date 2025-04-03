// Types
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  featured_media: number;
  date: string;
  author: string;
}

export interface Product {
  id: number;
  title: string;
  excerpt: string;
  featured_media: number;
  price: string;
  image?: string;
}

// Query Functions
export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await fetch('/wp-json/spa-shop/v1/blog');
  if (!response.ok) {
    throw new Error('خطا در دریافت پست‌های وبلاگ');
  }
  return response.json();
};

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await fetch('/wp-json/spa-shop/v1/products');
  if (!response.ok) {
    throw new Error('خطا در دریافت محصولات');
  }
  const products: Omit<Product, 'image'>[] = await response.json();
  return products.map(product => ({
    ...product,
    image: product.featured_media ? `/wp-content/uploads/${product.featured_media}` : undefined
  }));
}; 