import './App.css';
import KomponenKewajiban from './components/KomponenKewajiban';
import KomponenLarangan from './components/KomponenLarangan';
import { Routes, Route, useParams } from 'react-router-dom'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import ScrollToTop from './mode/ScrollToTop';
import Hukuman from './components/Hukuman';
import Bahasan from './pages/Bahasan';
import PeraturanTerkait from './pages/PeraturanTerkait';
import Artikel from './pages/Artikel'
import Pejabat from './pages/Pejabat';
import Pemeriksaan from './pages/Pemeriksaan'
import BerlakuHukuman from './pages/BerlakuHukuman';
import Kuis from './pages/Kuis';
import Artikel2MatriksPerbedaan from './pages/Artikel/Artikel2MatriksPerbedaan';
import Artikel3TataCaraPemeriksaan from './pages/Artikel/Artikel3TataCaraPemeriksaan';
import Templat from './pages/Templat';
import Artikel1MasukKerja from './pages/Artikel/Artikel1MasukKerja';
import Artikel4PedomanPelaksanaan from './pages/Artikel/Artikel4PedomanPelaksanaan';
import Survei from './pages/Survei';
import Artikel5ContohKasus from './pages/Artikel/Artikel5ContohKasus';
import Artikel5Detail from './pages/Artikel/Artikel5Detail';

function App() {
  return (
    <div className="App dark:bg-[#0f172a]">
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='kewajiban' element={<KomponenKewajiban />} />
        <Route path='larangan' element={<KomponenLarangan />} />
        <Route path='hukuman' element={<Hukuman />} />
        <Route path="bahasan" element={<Bahasan />} />
        <Route path='peraturan' element={<PeraturanTerkait />} />
        <Route path="artikel" element={<Artikel />} />
        <Route path="pejabat" element={<Pejabat />} />
        <Route path="pemeriksaan" element={<Pemeriksaan />} />
        <Route path="berlaku" element={<BerlakuHukuman />} />
        <Route path="kuis" element={<Kuis />} />
        <Route path="templat" element={<Templat />} />
        <Route path="artikel1" element={<Artikel1MasukKerja />} />
        <Route path="artikel2" element={<Artikel2MatriksPerbedaan />} />
        <Route path="artikel3" element={<Artikel3TataCaraPemeriksaan />} />
        <Route path="artikel4" element={<Artikel4PedomanPelaksanaan />} />
        <Route path="artikel5" element={<Artikel5ContohKasus />} />
        <Route path="artikel5/:id" element={<Artikel5Detail />} />
        <Route path="survei" element={<Survei />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
