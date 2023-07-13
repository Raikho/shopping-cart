import { NavLink } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='caption'>
                <div className='caption-text'>For all your aquatic needs</div>
                <NavLink 
                    to='shop/all'
                    className='enter'
                >Visit Shop</NavLink>
            </div>
        </div>
    )
}

export default Homepage;