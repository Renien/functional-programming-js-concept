// specific to our current blog
var validArticles = function(articles) {
  return articles.filter(function(article) {
    return article !== null && article !== undefined;
  });
};

// vastly more relevant for future projects
var compact = function(xs) {
  return xs.filter(function(x) {
    return x !== null && x !== undefined;
  });
};