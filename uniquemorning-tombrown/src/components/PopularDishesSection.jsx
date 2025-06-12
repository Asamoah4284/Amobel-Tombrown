import React from "react";

const dishes = [
  {
    name: "Classic Tom Brown ",
    image: "/images/girl.png", // Placeholder, replace with real image
    
    description: "Made with millet, maize, and groundnuts.",
    rating: 5,
    ratingsCount: 5,
    tag: null,
  },
  {
    name: "Tom Brown with Dates ",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    description: "Enriched with natural date fruit for extra sweetness and fiber.",
    rating: 5,
    ratingsCount: 5,
    tag: null,
  },
  {
    name: "Vegan Energy Mix",
    image: "https://images.unsplash.com/photo-1516685018646-5499d0a7d42f?auto=format&fit=crop&w=400&q=80",
    description: "100% plant-based with no dairy, perfect for clean eating.",
    rating: 5,
    ratingsCount: 5,
    tag: { label: "Vegan", color: "bg-green-200 text-green-800" },
  },
  {
    name: "Kids' Nutri-Brown",
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
    description: "Soft blend for toddlers, fortified with iron and calcium.",
    rating: 5,
    ratingsCount: 5,
    tag: { label: "Hot", color: "bg-red-300 text-red-900", icon: true },
  },
];

const StarRating = ({ count }) => (
  <span className="flex items-center gap-1 text-yellow-400">
    {[...Array(count)].map((_, i) => (
      <svg key={i} width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z"/></svg>
    ))}
  </span>
);

const PopularDishesSection = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#23223a] mb-4" style={{fontFamily: 'Inter, sans-serif'}}>Tom <span className="bg-[#f3f4f8] px-2"> Brown</span> options </h2>
            <p className="text-[#6c6c80] text-lg max-w-xl">Our carefully crafted blends are perfect for kids, students, and busy adults.</p>
          </div>
          <div className="flex items-center gap-4">
         
         
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {dishes.map((dish, idx) => (
            <div key={dish.name} className="bg-white rounded shadow-sm overflow-hidden flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                {dish.tag && (
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded text-xs font-semibold ${dish.tag.color} flex items-center gap-1`}>
                    {dish.tag.icon && (
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"/></svg>
                    )}
                    {dish.tag.label}
                  </span>
                )}
              </div>
              <div className="flex-1 flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-[#23223a] truncate" style={{fontFamily: 'Inter, sans-serif'}}>{dish.name}</h3>
                    <span className="bg-[#FFD233] text-[#23223a] font-bold px-3 py-1 rounded text-lg"></span>
                  </div>
                  <p className="text-[#6c6c80] text-base mb-4">{dish.description}</p>
                </div>
                <div className="flex items-center gap-2 mt-auto">
                  <StarRating count={dish.rating} />
                  <span className="text-[#6c6c80] text-sm">({dish.ratingsCount} ratings)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishesSection; 