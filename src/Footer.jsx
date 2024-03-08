export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour
  return(
    <footer>
      {isOpen && (
        <div className="order">
          <p className='description'>We are open until {closeHour}:00. Come visit us or order Online</p>
          <button>Order Now</button>
        </div>
      )}
    </footer>
  )
}