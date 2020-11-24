import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import { ScrollUp } from '../components/ScrollUp/ScrollUp';

type Articles = {
  id: number,
  title: string,
};

export const Home = () => {

  const [articles, setArticles] = useState<Articles[]>([]);
  const history = useHistory();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <section>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <h2>My recent blog posts</h2>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12">
            <div className="home__article-wrapper">
              { articles.map(({ id, title }) => {
                return (
                  <h3
                    className="home__article"
                    key={id}
                    onClick={() => history.push(`/articles/${String(id)}`)}
                    role="presentation"
                  >
                    {id} {title}
                  </h3>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <ScrollUp />
    </section>
  );
};
