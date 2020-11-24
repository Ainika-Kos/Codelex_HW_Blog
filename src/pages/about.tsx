import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Input } from '../components/Input/Input';
import { Button } from '../components/Button/Button';
import '../App.css';

type Users = {
  id: number,
  name: string
  email: string,
};

toast.configure();

export const About = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [users, setUsers] = useState<Users[]>([]);
  const isEnabled = userName.length > 0 && userEmail.length > 0;

  // const inputEl = useRef(null);

  // useEffect(() => {
  //   // @ts-ignore
  //   inputEl.current.focus();
  // }, []);

  const subscribeHandler = () => {
    if (userName && userEmail) {
      if (users.some(({ email }) => email === userEmail)) {
        toast.warning(`Sorry, ${userName}. It seems Your email ${userEmail} has been registered before! Please enter another email address.`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 4000,
        });
      } else {
        setUsers([
          ...users,
          {
            id: users.length + 1,
            name: userName,
            email: userEmail,
          }
        ]);
        toast.success(`Dear ${userName}, Thank you for subscribing! Your email is registred.`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 4000,
        });
      }
    }
    setUserName('');
    setUserEmail('');
  };

  return (
    <section>
      <div className="card">
        <div className="container">
          <div className="row middle-xs">
            <div className="col-xs-12 col-md-3">
              <img className="card__image" src="https://cdna.artstation.com/p/assets/images/images/003/303/212/large/lena-brunshtein-cupcake02.jpg?1472200751" alt="" width="100%" />
            </div>
            <div className="col-xs-12 col-md-6 col-md-offset-1">
              <h3>Hello everyone!</h3>
              <h3>My name is Bella</h3>
              <p>I am confectioner and I have my own cupcake-shop <b>"Super Cupcake"</b> in London.</p>
              <p>Every week I'll be uploading a new cake-based recipe or how-to video for you to enjoy. Everything from classic bakes, cakes and cupcakes to essential decorating tips and tutorials.</p>
              <p>Don't hesistate to subscribe!</p>
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
              <Button
                label="Subscribe"
                disabled={!isEnabled}
                clickHandler={subscribeHandler}
              />
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};