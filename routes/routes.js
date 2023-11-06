const routes = [
    {
        path: '/users',
        route: require('./users')
    }
]

module.exports = {
    httpRoutes: () => {
        return routes
    }
}