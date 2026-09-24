import { HashRouter, Routes, Route } from 'react-router-dom'

<HashRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/guides" element={<Guides />} />
    <Route path="/order" element={<Order />} />
  </Routes>
</HashRouter>