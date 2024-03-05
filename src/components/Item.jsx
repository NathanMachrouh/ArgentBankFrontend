import '../sass/components/_Item.scss';

/* Renvoie les éléments de la page d'accueil */
// eslint-disable-next-line react/prop-types
function Item ({ image, descriptionImage, title, description }) {
    return (
            <div className="feature-item">
                <img src={image} alt={descriptionImage} className="feature-item-icon"/>
                <h3 className="feature-item-title">{title}</h3>
                <p>{description}</p>
            </div>
    )
}

export default Item