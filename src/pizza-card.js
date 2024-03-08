

export default function Pizza({pizzaObject}) {
 
  return(
    <div className={`pizza-card ${pizzaObject.soldOut && "sold-out"}`}>
      <div className="pizza-img">
        <img src={pizzaObject.photoName} alt="pizza" />
      </div>
      <div className="about-pizza">
        <h5 className="pizza-name">{pizzaObject.name}</h5>
        <p className="ingredients">{pizzaObject.ingredients}</p>
        <span className="price">
          {pizzaObject.soldOut? "SOLD OUT" : pizzaObject.price}
        </span>
      </div>
    </div>
  )
}