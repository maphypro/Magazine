import './NavigationButton.scss'
import prev_btn from '../../../../../../assets/icons/slider_arrow_prev.svg'
import next_btn from '../../../../../../assets/icons/slider_arrow_next.svg'

const NavigationButton = (props) => {
    return (
        <button className={props.direction}>
            { props.direction === 'prev'? <img src={prev_btn} /> : <img src={next_btn} /> }
        </button>
    )
}

export default NavigationButton;