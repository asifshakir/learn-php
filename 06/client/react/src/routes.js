export default [
 {
    path: '/',
    name: 'home',
    label: 'Home',
    component: 'Home',
    exact: true,
    'auth': true,
    layout: 'Blank',
 },
 {
   name: 'hello',
 },
 {
    name: 'todos'
 },
 {
    name: 'quiz',
    layout: 'QuizLayout',
 }
]