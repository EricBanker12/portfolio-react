exports.createPages = async ({ graphql, actions: { createPage }, reporter }) => {

    const query = await graphql(`
      query {
        allProjectsJson {
          nodes {
            id
            title
            image
            color
            background
            video
            website
            paragraphs
            bullets
            links {
              link
              text
            }
          }
        }
      }
    `)

    if (query.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const template = `${__dirname}/src/templates/Project.js`

    query.data.allProjectsJson.nodes.forEach(p => {
        createPage({
            path: `/projects/${p.id}`,
            component: template,
            context: {
                ...p,
            },
        })
    })

}