import Card from './Card'
function Home (props) {
    
    const {data} = props
    return (
    <div>
        {data.map ( post => {
          return (
            <Card 
              slug  = {post._embedded["wp:featuredmedia"][0].slug} 
              link  = {post._embedded["wp:featuredmedia"][0].source_url}
              title = {post._embedded["wp:featuredmedia"][0].title.rendered}
            /> )}
        )}
    </div>
    )
}

export default Home