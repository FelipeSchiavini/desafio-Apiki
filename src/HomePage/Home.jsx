import Card from './Card'
import { HomeContainer } from './Home.Style'

function Home (props) {
    
    const {data} = props
    return (
      <HomeContainer>
          {data.map ( post => {
            return (
              <Card 
                info  = {post.yoast_head_json.description} 
                slug  = {post._embedded["wp:featuredmedia"][0].slug} 
                link  = {post._embedded["wp:featuredmedia"][0].source_url}
                title = {post._embedded["wp:featuredmedia"][0].title.rendered}
              /> )}
          )}
      </HomeContainer>
    )
}

export default Home