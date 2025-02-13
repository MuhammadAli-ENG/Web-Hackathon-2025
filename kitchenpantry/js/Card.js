

// Card.js



const Card = ({ item, onClick }) => {
    return (
      <div className="card" onClick={onClick}>
        <img src={item.image || "/placeholder.svg"} alt={item.name} className="card-image" />
        <div className="card-category">{item.category}</div>
        <div className="card-content">
          <h2 className="card-title">{item.name}</h2>
          <p className="card-description">{item.description}</p>
          <div className="card-price">{item.price}</div>
        </div>
      </div>
    )
  }  