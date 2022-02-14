import s from './DropdownMenu.module.scss';
import DropdownMenuInside from "./DropdownMenuInside/DropdownMenuInside";
import {useState} from "react";

const DropdownMenu = (props) => {

    const [isClicked, useIsClicked] = useState(true);

    return (
        <a className={s.menu}>
            {isClicked? <DropdownMenuInside/> : null}
        </a>
    )
}

export default DropdownMenu;