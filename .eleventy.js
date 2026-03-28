module.exports = function(eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Set path prefix for GitHub Pages subpath deployment
  // e.g. getsheetytools-glitch.github.io/paws-over-odds/
  // Set ELEVENTY_PATH_PREFIX env var to override (use "/" for custom domain)
  const pathPrefix = process.env.ELEVENTY_PATH_PREFIX || "/paws-over-odds/";

  // Add a readable date filter
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-CA", {
      year: "numeric", month: "long", day: "numeric"
    });
  });

  // Add a slug filter for condition pages
  eleventyConfig.addFilter("slug", (str) => {
    return str.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    pathPrefix: pathPrefix,
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};
