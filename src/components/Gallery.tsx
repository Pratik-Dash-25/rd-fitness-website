import { useState } from 'react';
import { GALLERY_IMAGES } from '../data/gymData';
import { GalleryItem } from '../types';
import { Sparkles, X, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'equipment' | 'training' | 'facilities'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = [
    { label: 'All Photos', value: 'all' },
    { label: 'Equipment & Weights', value: 'equipment' },
    { label: 'AC Floor & Facility', value: 'facilities' },
    { label: 'Training Sessions', value: 'training' },
  ] as const;

  const filteredImages =
    activeCategory === 'all'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-10 sm:py-20 lg:py-28 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Facility Atmosphere</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white mb-4">
            Look Inside RD FITNESS
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Tour our modern strength arena, dumbbell section, climate-controlled cardio deck, and active training environment at SR Market Complex.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              id={`gallery-filter-${cat.value}`}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat.value
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-950/50'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              id={`gallery-item-${img.id}`}
              onClick={() => setSelectedImage(img)}
              className="group relative h-56 sm:h-72 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer"
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Overlay Content */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-end justify-between">
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold uppercase text-white tracking-wide mb-0.5 sm:mb-1">
                    {img.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-neutral-300 leading-tight line-clamp-1">
                    {img.caption}
                  </p>
                </div>
                <div className="p-1.5 sm:p-2 rounded-lg bg-neutral-900/80 backdrop-blur-sm text-neutral-300 group-hover:text-rose-400 transition-colors shrink-0 ml-2">
                  <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              id="close-lightbox-btn"
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-900/80 text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[70vh] object-cover"
            />

            <div className="p-6 bg-neutral-950">
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-neutral-300">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
