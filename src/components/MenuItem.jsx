import { useState } from "react";
import PropTypes from "prop-types";


function MenuItem({ item }) {
    //create a state isFavorite that has the inital value of isFavorite that comes from the props
    const [fav, setFav] = useState(item.isFavorite);

    const handleClickFavorite = () => {
        fav === true ? setFav(false) : setFav(true)
    }

    return (
        <div className="itemContainer">
            <div className="leftContainer">
                <div className="imgContainer">
                    <img src={item.foodImage} alt={item.itemName} />
                </div>
                <div className="itemDescription">
                    {/* the h3 will receive the item name from the props */}
                    <h3>{item.itemName}</h3>
                    {/* the p will receive the item description from the props */}
                    <p>{item.description}</p>
                </div>
            </div>
            <div className="rightContainer">
                {/* the div will receive the item price from the props */}
                <div>{item.price} EUR</div>

                {/* the div with id favorite will have 2 attributes:
                - onClick, will call the method handleClickFavorite,
                - classname, that will be conditionally rendered, depending on the value of isFavorite from the component's state
            */}
                {fav ? (<div id="favorite" className="isFavorite" onClick={() => handleClickFavorite(item.isFavorite)} />) :
                    (<div id="favorite" className="notFavorite" onClick={handleClickFavorite} />)}
            </div>
        </div>
    );
}

MenuItem.propTypes = {
    item: PropTypes.shape({
        itemName: PropTypes.string.isRequired,
        description: PropTypes.string,
        foodImage: PropTypes.string,
        price: PropTypes.number.isRequired,
        isFavorite: PropTypes.bool.isRequired,
    }).isRequired,
}

export default MenuItem;
