import '../Parts/homepage/Home.css';

// import Home from './components/pages/home';
import One from '../Parts/homepage/part1';
import Two from '../Parts/homepage/part2';
import Three from '../Parts/homepage/part3';
import Footer from '../Parts/homepage/footer';



function Home() {
  return (
     
      <div className="App">
        <One />
        <Two />
        <Three />
        <Footer />

      </div>
  );
}

export default Home;