import api from './api';

/**
 * Sweet Interface definition
 * matches the shape of data returned from the backend.
 */
export interface Sweet {
    id: string;
    name: string;
    category: string;
    price: number;
    quantity: number;
    imageUrl?: string;
}

export interface SearchParams {
    name?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
}

export const sweetService = {
    /**
     * Fetch all sweets
     * @returns List of all sweets with formatted price and image URL.
     */
    getAll: async () => {
        const response = await api.get<any[]>('/sweets');
        return response.data.map(s => ({
            ...s,
            price: Number(s.price),
            imageUrl: s.image_url
        })) as Sweet[];
    },

    /**
     * Search sweets
     * @param params Filter criteria (name, category, price range)
     */
    search: async (params: SearchParams) => {
        // Convert SearchParams to a plain object for axios
        const query: Record<string, string | number> = {};
        if (params.name) query.name = params.name;
        if (params.category && params.category !== 'All') query.category = params.category;
        if (params.minPrice !== undefined) query.minPrice = params.minPrice;
        if (params.maxPrice !== undefined) query.maxPrice = params.maxPrice;

        const response = await api.get<any[]>('/sweets/search', { params: query });
        return response.data.map(s => ({
            ...s,
            price: Number(s.price),
            imageUrl: s.image_url
        })) as Sweet[];
    },

    /**
     * Purchase a sweet
     * @param id The ID of the sweet
     * @param quantity Amount to buy
     */
    purchase: async (id: string, quantity: number) => {
        const response = await api.post(`/sweets/${id}/purchase`, { quantity });
        const s = response.data;
        return {
            ...s,
            price: Number(s.price),
            imageUrl: s.image_url
        } as Sweet;
    },

    // Admin endpoints

    /**
     * Create a new sweet (Admin)
     */
    create: async (data: Omit<Sweet, 'id'>) => {
        const response = await api.post('/sweets', data);
        const s = response.data;
        return {
            ...s,
            price: Number(s.price),
            imageUrl: s.image_url
        } as Sweet;
    },

    /**
     * Update an existing sweet (Admin)
     */
    update: async (id: string, data: Partial<Sweet>) => {
        const response = await api.put(`/sweets/${id}`, data);
        const s = response.data;
        return {
            ...s,
            price: Number(s.price),
            imageUrl: s.image_url
        } as Sweet;
    },

    delete: async (id: string) => {
        const response = await api.delete(`/sweets/${id}`);
        return response.data;
    }
};
