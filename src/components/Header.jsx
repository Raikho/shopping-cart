export default function Header({ title, total }) {
    return (
        <div className="header">
            <div className="store-title">{title}</div>
            <div className="nav-container">
                <a href="">Home</a>
                <a href="">Shop</a>
                <a href="">Contact</a>
            </div>
            <a href="" data-testid='cart-link'>
                Cart: (${total}.00)
            </a>
        </div>
    );
}