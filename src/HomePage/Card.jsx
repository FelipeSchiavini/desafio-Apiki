import Nav

function Card (props) {
    const { slug, link, title }  = props

    
    return (
        <div>
            <h2>{title}</h2>
            <img src={link} width = "150px" alt={slug} srcset="" />
            <p>{slug}</p>        
        </div>
    )}

export default Card


