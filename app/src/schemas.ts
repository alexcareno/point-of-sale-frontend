import { z } from 'zod';

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
})

export const CategoryWithProductsResponseSchema = CategorySchema.extend({
    products: z.array(ProductSchema)
});