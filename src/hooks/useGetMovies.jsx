import { graphql, useStaticQuery } from "gatsby"
const useGetMovies = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: allDatoCmsMovie(sort: { order: ASC, fields: title }) {
        nodes {
          originalId
          id
          description
          category
          movieTime
          title
          poster {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        totalCount
      }
    }
  `)
  const Movies = {
    movies: data.nodes,
    total: data.totalCount,
  }
  return { Movies }
}
export default useGetMovies
