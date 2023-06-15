import './Banner.css';
import PropTypes from 'prop-types'


function Banner (props)  {
    return (
            <div className="banner container">
            <p>{props.info_01}</p>
            <p>{props.info_02}</p>
            <p><strong>estão aqui.</strong></p>
        </div>
    )
}

Banner.propTypes = {
    info_01: PropTypes.string.isRequired,
    info_02: PropTypes.string.isRequired,


}

export default Banner;