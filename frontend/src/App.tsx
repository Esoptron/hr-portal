import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

function Placeholder({ title }: { title: string }) {
  return <h1>{title}</h1>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="development-plans" element={<Placeholder title="Планы развития" />} />
          <Route path="development-plans/new" element={<Placeholder title="Новый план развития" />} />
          <Route path="development-plans/:id/edit" element={<Placeholder title="Редактирование плана" />} />
          <Route path="competencies" element={<Placeholder title="Компетенции" />} />
          <Route path="competencies/new" element={<Placeholder title="Новая компетенция" />} />
          <Route path="competencies/:id/edit" element={<Placeholder title="Редактирование компетенции" />} />
          <Route path="departments" element={<Placeholder title="Отделы" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
