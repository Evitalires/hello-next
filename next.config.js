module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
      '/blogs/hello-nextjs': { page: '/blogs', query: { title: "Hello Next.js" } },
      '/blogs/learn-nextjs': { page: '/blogs', query: { title: "Learn Next.js is awesome" } },
      '/blogs/deploy-nextjs': { page: '/blogs', query: { title: "Deploy apps with Zeit" } },
      '/blogs/exporting-pages': { page: '/blogs', query: { title: "Learn to Export HTML Pages" } }
    }
  }
}
