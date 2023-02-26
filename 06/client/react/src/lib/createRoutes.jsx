import { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import sanitizedRoutes from './sanitizedRoutes';

export default () => sanitizedRoutes.map(route => {
    const Layout = lazy(() => import(`../layouts/${route.layout}`))
    const Component = lazy(() => import(`../pages/${route.component}`));
    return <Route 
        exact={route.exact}
        strict={route.strict}
        key={route.name} 
        path={route.path}  
        element={<Suspense 
            fallback={<div>Loading...</div>}>
            <Layout>
                <Component />
            </Layout>
        </Suspense>} />
});
