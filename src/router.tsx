import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    children: [
      {
        path: '/',
        element: <h1>Formulário de Simulação</h1>,
      },
      {
        path: '/teste',
        element: <h1>Formulário de Teste</h1>,
      },
      { path: '/resultado', element: <h1>Formulário de Resultado</h1> },
      {
        path: '/historico',
        element: <h1>Histórico de Histórico</h1>,
      },
    ],
  },
])
