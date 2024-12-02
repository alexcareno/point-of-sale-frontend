import { z } from 'zod';
import ShoppingCart from '../components/card/ShoppingCart';

export const CategorySchema = z.object({
    id: z.number(),
    name: z.string()
})

export const ProductSchema = z.object({
    id: z.number(),
    name: z.string(),
    image: z.string(),
    price: z.coerce.number(),
    stock: z.number(),
    categoryId: z.number()
})

export const CategoryWithProductsResponseSchema = CategorySchema.extend({
    products: z.array(ProductSchema)
});

export const CategoriesResponseSchema = z.array(CategorySchema);

// Shopping Cart
const ShoppingCartContentsSchema = ProductSchema.pick({
    name: true,
    image: true,
    price: true,
    stock: true,
}).extend({
    productId: z.number(),
    quantity: z.number()
})

export const ShoppingCartSchema = z.array(ShoppingCartContentsSchema);

export type Product = z.infer<typeof ProductSchema>;
export type ShoppingCart = z.infer<typeof ShoppingCartSchema>;