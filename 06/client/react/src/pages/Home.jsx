import routes from '../lib/sanitizedRoutes';

export default function() {
  return (
    <>
        <h1>Welcome to TSR React Learning</h1>
        <ol>
        {routes.map((route, idx) => 
          <li key={idx}>
              <a href={route.path}>{route.label}</a>
          </li>)}
        </ol>
    </>
  );
}