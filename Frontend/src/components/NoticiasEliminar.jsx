
import '../assets/noticiaCard.css'
export const NoticiasEliminar = ({ title, content, imageUrl, id, handleEliminar }) => {
    return (
      <div className="card">
        <img src={imageUrl} alt={title} className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p>{content}</p>
        </div>
        <button style={{backgroundColor:"red", margin:"10px"}} onClick={() => {handleEliminar(id)}}>Eliminar</button>
      </div>
    );
  };