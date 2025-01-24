exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
      query {
          dataJson {
              portfolio {
                  id
              }
              article {
                  id
              }
              blogItem {
                  id
              }
          }
      }
  `);

  if (result.errors) {
    throw result.errors;
  }

  result.data.dataJson.portfolio.forEach(({ id }) => {
    createPage({
      path: `/portfolio/${id}`,
      component: require.resolve('./src/templates/portfolio-item.jsx'),
      context: {
        id: id,
      },
    });
  });

  result.data.dataJson.article.forEach(({ id }) => {
    createPage({
      path: `/article/${id}`,
      component: require.resolve('./src/templates/article-item.jsx'),
      context: {
        id: id,
      },
    });
  });

  result.data.dataJson.blogItem.forEach(({ id }) => {
    createPage({
      path: `/blog/${id}`,
      component: require.resolve('./src/templates/blog-item.jsx'),
      context: {
        id
      },
    });
  });
};
