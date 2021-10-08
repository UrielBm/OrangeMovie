import { graphql, useStaticQuery } from "gatsby"
const useGetDocumental = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: allDatoCmsDocumental {
        nodes {
          autor
          id
          originalId
          time
          titulo
          poster {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  `)
  const Documentales = data.nodes
  return { Documentales }
}
export default useGetDocumental
