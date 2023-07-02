import 'react'
import HeroStatement from '../../components/ui-components/hero/Hero'
import Blog from '../blog/Blog'
const Home = () => {
  return (
    <>
      <HeroStatement
        hello='Hi, my name is'
        title='Alec Davidson.'
        heroLine='The tower of power, too sweet to be sour!'
        subtitle="I'm a Software Engineer based in Indianapolis. I specialize in creating
        websites and app solutions in the cloud to transform your business."
      />
      <Blog />
    </>
  )
}

export default Home
