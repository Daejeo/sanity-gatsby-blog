export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "616a8d99b14617da4e80ed67",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-dsvzwfyw",
                  apiId: "6c9b7b05-e447-4e45-a8d4-217b9720c7db",
                },
                {
                  buildHookId: "616a8d9944705cfc47deee53",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-w6tkatys",
                  apiId: "a47c3db1-3e63-4444-9627-2b95fa5140ec",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Daejeo/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-w6tkatys.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
