import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
    return (
        <div>
            {foodItems.map((item, key) => (
                <MenuItem key={key} item={item} />
            ))}
        </div>
    );
}

export default MenuList;
