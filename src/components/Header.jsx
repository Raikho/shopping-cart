export default function Header({ total }) {
    return (
        <div className="header">
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