import { graphql, useStaticQuery } from "gatsby"

const useGetRandomMovie = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: allDatoCmsMovie {
        nodes {
          originalId
          id
          description
          category
          movieTime
          title
          poster {
            gatsbyImageData(
              placeholder: BLURRED
              forceBlurhash: true
              layout: FIXED
            )
          }
        }
      }
    }
  `)

  const randomNumber = Math.floor(Math.random() * (data.nodes.length - 0)) + 0
  const movie = data.nodes[randomNumber]
  return { movie }
}

export default useGetRandomMovie
