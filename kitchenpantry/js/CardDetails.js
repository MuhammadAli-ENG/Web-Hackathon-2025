


//CardDetails.js


const { motion, useAnimation } = window.framerMotion

const CardDetails = ({ item, onClose }) => {
  const controls = useAnimation()

  const handleDragEnd = (event, info) => {
    if (info.offset.y > 100) {
      onClose()
    } else {
      controls.start({ y: 0 })
    }
  }

  return (
    <motion.div
      className="card-details"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      drag="y"
      dragConstraints={{ top: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
    >
      <div className="card-details-header">
        <div className="card-details-handle"></div>
        <button className="card-details-close" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="card-details-content">
        <img src={item.image || "/placeholder.svg"} alt={item.name} className="card-details-image" />
        <div className="card-details-info">
          <h2 className="card-details-title">{item.name}</h2>
          <span className="card-details-category">{item.category}</span>
          <p className="card-details-description">{item.description}</p>
          <div className="card-details-info">
            <div className="card-details-info-item">
              <h3>Quantity</h3>
              <p>{item.quantity}</p>
            </div>
            <div className="card-details-info-item">
              <h3>Price</h3>
              <p>{item.price}</p>
            </div>
          </div>
          <button className="card-details-button">Add to Cart</button>
        </div>
      </div>
    </motion.div>
  )
}   