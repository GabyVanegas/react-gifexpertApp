import PropTypes from 'prop-types';

export const GifItem = ({title, url}) => {
  return (
    <div className="card">
        <img src={url} alt={title}></img>
        <p> {title} </p>

    </div>
  )
}

//Sirven para definir los tipos de las propertys   
GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequireds,
}

GifItem.defaultProps = {
  title: 'No hay titulo',
  
}