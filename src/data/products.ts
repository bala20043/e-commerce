export interface Product {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    badge: "NEW" | "SALE" | "HOT" | "BESTSELLER";
    category: "Men" | "Women" | "Accessories" | "Sale";
    image: string;
}

export const products: Product[] = [
    { id: 1, name: "Cashmere Overcoat", price: 489, oldPrice: 649, badge: "SALE", category: "Men", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop" },
    { id: 2, name: "Silk Evening Gown", price: 329, badge: "NEW", category: "Women", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop" },
    { id: 3, name: "Leather Crossbody Bag", price: 219, oldPrice: 299, badge: "SALE", category: "Accessories", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop" },
    { id: 4, name: "Merino Wool Turtleneck", price: 159, badge: "NEW", category: "Men", image: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=800&auto=format&fit=crop" },
    { id: 5, name: "Tailored Wool Blazer", price: 399, oldPrice: 499, badge: "SALE", category: "Men", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop" },
    { id: 6, name: "Gold Chain Necklace", price: 289, badge: "HOT", category: "Accessories", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop" },
    { id: 7, name: "Suede Chelsea Boots", price: 349, oldPrice: 449, badge: "SALE", category: "Men", image: "https://images.unsplash.com/photo-1635397174447-50660639d661?q=80&w=800&auto=format&fit=crop" },
    { id: 8, name: "Satin Wide-Leg Trousers", price: 199, badge: "NEW", category: "Women", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop" },
    { id: 9, name: "Leather Belt", price: 89, badge: "BESTSELLER", category: "Accessories", image: "https://images.unsplash.com/photo-1624222247344-550fbadfd98e?q=80&w=800&auto=format&fit=crop" },
    { id: 10, name: "Cashmere Scarf", price: 129, badge: "NEW", category: "Accessories", image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop" },
    { id: 11, name: "Oversized Linen Shirt", price: 149, badge: "HOT", category: "Women", image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=800&auto=format&fit=crop" },
    { id: 12, name: "Velvet Evening Bag", price: 259, badge: "NEW", category: "Accessories", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop" },
    { id: 13, name: "Wool Trench Coat", price: 599, oldPrice: 799, badge: "SALE", category: "Women", image: "https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=800&auto=format&fit=crop" },
    { id: 14, name: "Silver Hoop Earrings", price: 179, badge: "BESTSELLER", category: "Accessories", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop" },
    { id: 15, name: "Slim Fit Chinos", price: 189, badge: "NEW", category: "Men", image: "https://images.unsplash.com/photo-1473966968600-fa804b86d30b?q=80&w=800&auto=format&fit=crop" },
    { id: 16, name: "Silk Blouse", price: 229, badge: "HOT", category: "Women", image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c33?q=80&w=800&auto=format&fit=crop" },
    { id: 17, name: "Leather Oxford Shoes", price: 449, badge: "BESTSELLER", category: "Men", image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop" },
    { id: 18, name: "Cashmere Cardigan", price: 279, badge: "NEW", category: "Women", image: "https://images.unsplash.com/photo-1574167132742-d3844f6f31bb?q=80&w=800&auto=format&fit=crop" },
    { id: 19, name: "Structured Tote Bag", price: 359, badge: "HOT", category: "Accessories", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop" },
    { id: 20, name: "Linen Blazer", price: 319, badge: "NEW", category: "Women", image: "https://images.unsplash.com/photo-1551487339-548332159781?q=80&w=800&auto=format&fit=crop" },
    { id: 21, name: "Diamond Stud Earrings", price: 499, badge: "BESTSELLER", category: "Accessories", image: "https://images.unsplash.com/photo-1598560912005-597659b85239?q=80&w=800&auto=format&fit=crop" },
    { id: 22, name: "Wool Knit Dress", price: 369, oldPrice: 469, badge: "SALE", category: "Women", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" },
    { id: 23, name: "Suede Ankle Boots", price: 399, badge: "NEW", category: "Women", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop" },
    { id: 24, name: "Minimalist Watch", price: 549, badge: "HOT", category: "Accessories", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop" }
];
