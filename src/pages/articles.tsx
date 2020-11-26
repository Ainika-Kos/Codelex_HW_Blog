import React, { useEffect, useState } from 'react';
import {
  useParams,
  useHistory
} from 'react-router-dom';
import axios from 'axios';
import { Button } from '../components/Button/Button';
import { Input } from '../components/Input/Input';
import { Textarea } from '../components/Textarea/Textarea';

// type Comments = {
//   postId: number,
//   commentId: number,
//   name: string,
//   email: string,
//   body: string
// };

type Article = {
  id: number,
  userId: number,
  title: string,
  body: string,
  comments: [],
};

export const Articles = () => {

  const [article, setArticle] = useState<Article>();
 
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userComment, setUserComment] = useState('');

  const [loading, setLoading] = useState(true);

  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        const newArticle = { ...res.data, comments: [] };
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
          .then((res2) => {
            newArticle.comments.push(...res2.data);
            setArticle(newArticle);
            setLoading(false);
          });
      })
      .catch((error) => {
        if (error.response.status === 404) {
          history.push('/notFound');
        }
      });
  }, [id]);

  

  useEffect(() => {
    const newArticle = JSON.parse(localStorage.getItem('article') || '{}');
    if (article) {
      setArticle(newArticle);
    }
  }, []);


  const prevPostHandler = () => {
    history.push(`/articles/${+id - 1}`);
  };

  const nextPostHandler = () => {
    history.push(`/articles/${+id + 1}`);
  };

  const addCommentHandler = () => {
    if (userName && userComment) {
      const newComment = {
        postId: article?.id || 0 + 1,
        id: article?.comments.length || 0 + 1,
        name: userName,
        email: userEmail,
        body: userComment,
      };
      // @ts-ignore
      const newArticle: Article = { ...article };
      // @ts-ignore
      newArticle?.comments.push(newComment);
      setArticle(newArticle);
      localStorage.setItem('article', JSON.stringify(newArticle));
    }
    setUserName('');
    setUserEmail('');
    setUserComment('');
  };

  if (loading) return <div>Loading...</div>;

  return (
    <section>
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-1">
            <Button
              label="Prev"
              disabled={+id <= 1}
              clickHandler={prevPostHandler}
            />
          </div>
          <div className="col-xs-10">
            <div className="card">
              <div className="container">
                <div className="row middle-xs">
                  <div className="col-xs-12 col-md-3">
                    <img className="card__image" src="https://picsum.photos/600" alt="" width="100%" />
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <div className="card__text-wrapper">
                      {article &&
                        <div>
                          <h3>Post #{article?.id}</h3>
                          <h2>{article?.title}</h2>
                          <p>{article?.body}{article?.body}{article?.body}</p>
                        </div>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-1">
            <Button
              label="Next"
              disabled={+id >= 100}
              clickHandler={nextPostHandler}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <h3 className="comments__heading">This post {article && article.comments.length ? `has ${article.comments.length}` : ' hasn\'t any'} comments</h3>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12">
            <div className="comments-wrapper">
              {article && article.comments.map(({ name, email, body }) => {
                return (
                  <div key={name}>
                    <p className="comments__name"><b>Name: </b>{name}</p>
                    <p className="comments__name"><b>Email: </b>{email}</p>
                    <p className="comments__text"><b>Comment: </b>{body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="comment-input-wrapper">
              <Input
                type="text"
                value={userName}
                placeholder="Enter your name"
                onChange={(name: string) => setUserName(name)}
              />
              <Input
                type="email"
                value={userEmail}
                placeholder="Enter your email"
                onChange={(email: string) => setUserEmail(email)}
              />
              <Textarea
                value={userComment}
                placeholder="Join the discussion"
                onChange={(comment: string) => setUserComment(comment)}
              />
              <Button
                label="Add"
                clickHandler={addCommentHandler}
                disabled={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


