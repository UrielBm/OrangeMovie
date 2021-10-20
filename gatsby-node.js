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
  const response_serie = await graphql(`
    query {
      allDatoCmsSerie {
        nodes {
          originalId
        }
      }
    }
  `)
  if (response.erros || response_documental.errors || response_serie.errors) {
    reporter.panic("No hubo resultados")
  }

  //si hay resultados
  const movies = response.data.allDatoCmsMovie.nodes
  const documentales = response_documental.data.allDatoCmsDocumental.nodes
  const series = response_serie.data.allDatoCmsSerie.nodes
  // si hay resultado de peliculas
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
  // si hay resultados de series
  series.forEach(serie => {
    actions.createPage({
      path: `movies/serie=${serie.originalId}`,
      component: require.resolve("./src/components/Serie.jsx"),
      content: {
        originalId: serie.originalId,
      },
    })
  })
}
