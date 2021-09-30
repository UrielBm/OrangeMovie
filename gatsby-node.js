exports.createPages = async ({ actions, graphql, reporter }) => {
  const response = await graphql(`
    query {
      allDatoCmsMovie {
        nodes {
          originalId
        }
      }
    }
  `)
  if (response.erros) {
    reporter.panic("No hubo resultados")
  }

  //si hay resultados
  const movies = response.data.allDatoCmsMovie.nodes
  movies.forEach(movie => {
    actions.createPage({
      path: `movies/movie=${movie.originalId}`,
      component: require.resolve("./src/components/Movie.jsx"),
      context: {
        originalId: movie.originalId,
      },
    })
  })
}
