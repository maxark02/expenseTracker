class Router {
    constructor(routes) {
        this.routes = routes;
    }

    init() {
        document.addEventListener('click', (e) => {
            const button = e.target.closest('[data-route]');
            if (button) {
                e.preventDefault();
                const route = button.getAttribute('data-route');
                this.navigate(route);
            }
        });

        window.addEventListener('popstate', () => {
            this.loadRoute();
        });

        this.loadRoute();
    }

    navigate(path) {
        window.history.pushState({}, '', path);
        this.loadRoute();
    }

    loadRoute() {
        const path = window.location.pathname;

        const page = this.routes[path] || this.routes['/'];

        const app = document.getElementById('app');
        if (app && page) {
            app.innerHTML = page();
        }
    }
}

export default Router;