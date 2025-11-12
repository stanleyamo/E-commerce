import { useState } from "react";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import HeroCarousel from "../components/HeroCarousel";

const categories = ["African Wear", "Imported Clothes", "Perfumes"];

export default function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Carousel */}
            <HeroCarousel />

            {/* Categories Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-7xl mx-auto px-4">
                {categories.map((cat) => {
                    const catProduct = products.find((p) => p.category === cat);
                    return (
                        <div
                            key={cat}
                            className="bg-white p-4 rounded-xl flex flex-col items-center justify-center shadow hover:shadow-lg transition cursor-pointer"
                        >
                            {catProduct && (
                                <img
                                    src={catProduct.image}
                                    alt={cat}
                                    className="w-32 h-32 object-cover rounded-lg mb-2"
                                />
                            )}
                            <h2 className="font-semibold text-lg">{cat}</h2>
                        </div>
                    );
                })}
            </div>

            {/* Products Section with Load More */}
            <div className="max-w-7xl mx-auto px-4 space-y-12">
                {categories.map((cat) => (
                    <CategorySection key={cat} category={cat} />
                ))}
            </div>
        </div>
    );
}

// Category section with Load More per category
function CategorySection({ category }: { category: string }) {
    const catProducts = products.filter((p) => p.category === category);
    const [visible, setVisible] = useState(4);

    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {catProducts.slice(0, visible).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {visible < catProducts.length && (
                <div className="flex justify-center mt-6">
                    <button
                        onClick={() => setVisible(visible + 4)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Load More
                    </button>
                </div>
            )}
        </section>
    );
}
