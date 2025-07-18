export interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  rating: number;
  tag?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "霓虹街头T恤",
    price: "¥299",
    originalPrice: "¥399",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    category: "服装",
    tag: "HOT!",
    rating: 5
  },
  {
    id: 2,
    name: "波普艺术卫衣",
    price: "¥599",
    originalPrice: "¥799",
    image: "https://images.unsplash.com/photo-1556821840-3a9fbc86dcd5?w=300&h=300&fit=crop",
    category: "服装",
    tag: "NEW",
    rating: 4
  },
  {
    id: 3,
    name: "复古波点裙",
    price: "¥399",
    originalPrice: "¥599",
    image: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=300&h=300&fit=crop",
    category: "服装",
    tag: "SALE",
    rating: 5
  },
  {
    id: 4,
    name: "涂鸦风夹克",
    price: "¥799",
    originalPrice: "¥999",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop",
    category: "外套",
    tag: "LIMITED",
    rating: 4
  },
  {
    id: 5,
    name: "彩虹运动鞋",
    price: "¥459",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    category: "鞋子",
    rating: 5
  }
];