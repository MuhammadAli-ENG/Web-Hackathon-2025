


// CardSlider.js





"use client"

import React from "react"
const { useState, useRef } = React
const { motion, AnimatePresence } = window.framerMotion

const pantryItems = [
  {
    id: 1,
    name: "Organic Quinoa",
    description: "Nutrient-rich whole grain",
    image: "/placeholder.svg?height=200&width=200",
    quantity: "500g",
    price: "$5.99",
    category: "Grains",
  },
  {
    id: 2,
    name: "Extra Virgin Olive Oil",
    description: "Cold-pressed, high-quality olive oil",
    image: "/placeholder.svg?height=200&width=200",
    quantity: "750ml",
    price: "$12.99",
    category: "Oils",
  },
  {
    id: 3,
    name: "Organic Chickpeas",
    description: "Versatile legume for various dishes",
    image: "/placeholder.svg?height=200&width=200",
    quantity: "400g",
    price: "$2.49",
    category: "Legumes",
  },
  {
    id: 4,
    name: "Himalayan Pink Salt",
    description: "Mineral-rich, unprocessed salt",
    image: "/placeholder.svg?height=200&width=200",
    quantity: "250g",
    price: "$4.99",
    category: "Spices",
  },
  {
    id: 5,
    name: "Organic Coconut Flour",
    description: "Gluten-free alternative flour",
    image: "/placeholder.svg?height=200&width=200",
    quantity: "450g",
    price: "$6.99",
    category: "Baking",
  },
  {
    id: 6,
    name: "Raw Honey",
    description: "Unprocessed, natural sweetener",
    image: "/placeholder.svg?height=200&width=200",
    quantity: "500g",
    price: "$8.99",
    category: "Sweeteners",
  },
  {
    id: 7,
    name: "Dried Shiitake Mushrooms",
    description: "Umami-rich dried mushrooms",
    image: "/placeholder.svg?height=200&width=200",
    quantity: "100g",
    price: "$7.99",
    category: "Dried Goods",
  },
]

const CARDS_TO_SHOW = 4
const CARD_WIDTH = 280

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedItem, setSelectedItem] = useState(null)
  const [direction, setDirection] = useState(0)
  const sliderRef = useRef(null)

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pantryItems.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pantryItems.length) % pantryItems.length)
  }

  const handleCardClick = (id) => {
    setSelectedItem(id)
  }

  const closeDetails = () => {
    setSelectedItem(null)
  }

  const getVisibleItems = () => {
    const visibleItems = []
    for (let i = 0; i < CARDS_TO_SHOW; i++) {
      const index = (currentIndex + i) % pantryItems.length
      visibleItems.push(pantryItems[index])
    }
    return visibleItems
  }

  return (
    <div className="card-slider">
      <motion.div
        ref={sliderRef}
        className="slider-container"
        style={{
          width: `${CARDS_TO_SHOW * CARD_WIDTH}px`,
        }}
        initial={false}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <AnimatePresence initial={false} custom={direction}>
          {getVisibleItems().map((item, index) => (
            <motion.div
              key={`${item.id}-${index}`}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 200 : -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -200 : 200 }}
              transition={{ duration: 0.3 }}
              style={{ width: `${CARD_WIDTH}px` }}
            >
              <Card item={item} onClick={() => handleCardClick(item.id)} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <button className="slider-button prev" onClick={prevSlide}>
        &#8249;
      </button>
      <button className="slider-button next" onClick={nextSlide}>
        &#8250;
      </button>
      <AnimatePresence>
        {selectedItem !== null && (
          <CardDetails item={pantryItems.find((item) => item.id === selectedItem)} onClose={closeDetails} />
        )}
      </AnimatePresence>
    </div>
  )
}

