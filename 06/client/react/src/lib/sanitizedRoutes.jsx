import routes from '../routes';

function uc(str) {
    return str?.charAt(0).toUpperCase() + str.slice(1)
}

export default routes.map(r => ({
    ...r,
    path: r.path ?? '/' + r.name,
    name: r.name,
    label: r.label ?? uc(r.name),
    component: r.component ?? uc(r.name),
    exact: r.exact ?? true,
    strict: r.strict ?? true,
    auth: r.auth ?? false,
    layout: r.layout ?? 'Default',
}))