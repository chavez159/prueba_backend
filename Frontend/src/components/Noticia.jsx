
import '../assets/noticiaCard.css'
export const Noticias = ({ title, content, imageUrl }) => {
    return (
      <div className="card">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    );
  };