import s from './MenuItem.module.scss'
import DropdownMenu from './DropdownMenu/DropdownMenu'

const MenuItem = (props) => {


    return (
        <div className={s.item}>
            {props.text}
            {props.isDropsown? <DropdownMenu/> : null}
        </div>
    )
}

export default MenuItem;