import { CardTitle, CardImg, CardSpace, CardInfo, CardContainer } from './Home.Style'

function Card (props) {
    const { slug, link, title, info }  = props
    
    return (
        <CardContainer>
            <CardTitle>{title}</CardTitle>
            <CardSpace>
                <CardImg src={link} width = "150px" alt={slug} srcset="" />
                <CardInfo>{info}</CardInfo>
            </CardSpace>
        </CardContainer>
    )}

export default Card


