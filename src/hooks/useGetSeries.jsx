import { graphql, useStaticQuery } from "gatsby"
const useGetSeries = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: allDatoCmsSerie {
        nodes {
          title
          seasons
          description
          id
          originalId
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
  const Series = data.nodes

  return { Series }
}
export default useGetSeries
