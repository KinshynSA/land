import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import Header from './components/header/View'
import Footer from './components/footer/View'
import Preloader from './components/preloader/View'
import AboutPage from './pages/about'
import ServicesPage from './pages/services'
import NewsPage from './pages/news'
import ArticlePage from './pages/article'
import ContactsPage from './pages/contacts'
import MainPage from './pages/mainpage';

import intersectionObserver from './utils/intersectionObserver'

function PageWrapper(props){
  const location = useLocation();

  useEffect(() => {
    intersectionObserver();
  }, [location]);

  const [preloader, setPreloader] = useState(true);
  useEffect(() => {
    setPreloader(false);
  }, []);

  return (
    <main className="main">
      {props.children}
      <Footer />
      <Header />
      <Preloader preloader={preloader} />
    </main>
  )
}
function App() {

  return (
    <Router>
      <Switch>
        <Route path="/about">
          <PageWrapper>
            <AboutPage />
          </PageWrapper>
        </Route>
        <Route path="/services">
          <PageWrapper>
            <ServicesPage />
          </PageWrapper>
        </Route>
        <Route path="/news">
          <PageWrapper>
            <NewsPage />
          </PageWrapper>
        </Route>
        <Route path="/article:id">
          <PageWrapper>
            <ArticlePage />
          </PageWrapper>
        </Route>
        <Route path="/contacts">
          <PageWrapper>
            <ContactsPage />
          </PageWrapper>
        </Route>
        <Route path="/">
          <PageWrapper>
            <MainPage />
          </PageWrapper>
        </Route>
      </Switch>
    </Router>
  );
} 

export default App;