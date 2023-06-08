import './styles/App.css';
import Navbar from './components/Navbar';
import SectionView from './components/SectionView';
import { Route, Routes } from 'react-router-dom';
import data from './components/sdata';
import NavbarMob from './components/NavbarMob';
import first from './components/images/1.jpg';
import second from './components/images/2.jpg';
import third from './components/images/3.jpg';
import fourth from './components/images/4.jpg';




function App() {
  
  return (
    <>
    
    <Navbar></Navbar>
    <NavbarMob></NavbarMob>
    <Routes>
    <Route path="/"
    element={<SectionView 
    head1={data[0].head1}
    para1={data[0].para1}
    head2={data[0].head2}
    para2={data[0].para2}
    head3={data[0].head3}
    para3={data[0].para3}
    img1={first}
    img2={second}
    img3={third}
    img4={fourth}>
    </SectionView>}>
    </Route>
    
    <Route path="/Heart"
    element={<SectionView 
    head1={data[1].head1}
    para1={data[1].para1}
    head2={data[1].head2}
    para2={data[1].para2}
    head3={data[1].head3}
    para3={data[1].para3}
    img1={first}
    img2={second}
    img3={third}
    img4={fourth}>
    </SectionView>}>
    </Route>

    <Route path="/Chat"
    element={<SectionView 
    head1={data[2].head1}
    para1={data[2].para1}
    head2={data[2].head2}
    para2={data[2].para2}
    head3={data[2].head3}
    para3={data[2].para3}
    img1={first}
    img2={second}
    img3={third}
    img4={fourth}>
    </SectionView>}>
    </Route>

    <Route path="/Cube"
    element={<SectionView 
    head1={data[3].head1}
    para1={data[3].para1}
    head2={data[3].head2}
    para2={data[3].para2}
    head3={data[3].head3}
    para3={data[3].para3}
    img1={first}
    img2={second}
    img3={third}
    img4={fourth}>
    </SectionView>}>
    </Route>
    </Routes>
    </>
  );
}

export default App;
