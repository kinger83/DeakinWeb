import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom"
import LoginBar from './LoginBar';
import HomePage from "./routes/homePage";
import AboutPage from "./routes/AboutPage";
import LoginPage from "./routes/login";
import SignupPage from "./routes/signup";
import ProfilePage from "./profile";

function App() {
  return (
      <Routes>
          <Route path="/" element={<LoginBar/>}>
          <Route index element ={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
              <Route path="/signup" element={<SignupPage/>}/>    
          <Route path="profile" element={<ProfilePage/>}/>    
         
         
         
          </Route>
      </Routes>
      
      
    /*<div className="App">
      <Header text = "Jason Kingsbury Home Page." />
      <br/>
      <LoginBar/>
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="profile" element={<ProfilePage/>}/>
        </Routes>
      <br/>
      <HeadImage/>
      <br/>
      <h1>Featured Articles</h1>
      <ArticleList/>
      <Button text="See all articles"></Button> <br/> <br/>
      <h1>Featured Turorials</h1>
      <TutorialList/>
      <Button text="See all tutorials"></Button> <br/> <br/>
      <SignUp/> <br/>
        <Routes>
            <Route path="/" element={<Footer/>} >
            <Route path="/about" element={<AboutPage/>}/>
            </Route>
        </Routes>
      

    </div>*/
  );
}

export default App;
