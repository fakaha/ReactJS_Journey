import { NavLink } from "react-router-dom";
import "./Navigation.css"

const Navigation = () => {
    const navigation = [
        {name: 'Home', href: '/'},
        {name: 'Usestate', href: '/usestate'},
        {name: 'Life Cycle Effect', href: '/useeffect'},
        {name: 'Conditional Rendering', href: '/conditional-rendering'},
        {name: 'DOM Manipulation Ref', href: '/dom-manipulation-ref'},
        {name: 'React List & Key', href: '/list-key'},
        {name: 'React Form', href: '/react-form'},
        {name: 'Fetch', href: '/fetch'},
    ];

    return(
        <div className="header">
            <ul>
                {navigation.map((item) => (
                    <NavLink
                    key={item.name}
                    to={item.href}
                    className={({isActive}) =>{
                        return( 
                            (!isActive 
                                ? 'notActive' 
                                : 'active')
                        );
                        // console.log(item.href + ' ' + isActive);
                    }}>
                        {item.name}
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}

export default Navigation;