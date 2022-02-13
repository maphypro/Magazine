import s from './DropdownMenu.module.scss';
import {useState} from "react";

const DropdownMenu = (props) => {

    const [isClicked, useIsClicked] = useState(false);

    return (
        <a className={s.menu}>
            {isClicked? <div>a</div> : null}
        </a>
    )
}

export default DropdownMenu;