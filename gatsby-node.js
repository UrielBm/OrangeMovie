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
  const response_documental = await graphql(`
    query {
      allDatoCmsDocumental {
        nodes {
          originalId
        }
      }
    }
  `)
  if (response.erros || response_documental.errors) {
    reporter.panic("No hubo resultados")
  }

  //si hay resultados
  const movies = response.data.allDatoCmsMovie.nodes
  const documentales = response_documental.data.allDatoCmsDocumental.nodes
  movies.forEach(movie => {
    actions.createPage({
      path: `movies/movie=${movie.originalId}`,
      component: require.resolve("./src/components/Movie.jsx"),
      context: {
        originalId: movie.originalId,
      },
    })
  })
  //si hay resultados de documentales
  documentales.forEach(documental => {
    actions.createPage({
      path: `movies/documental=${documental.originalId}`,
      component: require.resolve("./src/components/Documental.jsx"),
      content: {
        originalId: documental.originalId,
      },
    })
  })
}
