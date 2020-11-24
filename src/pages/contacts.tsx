import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '../components/Button/Button';

export const Contacts = () => {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userQuestion, setUserQuestion] = useState('');
  const isEnabled = userName.length > 0 && userEmail.length > 0 && userQuestion.length > 0;

  const submitHandler = () => {
    toast.success(`Dear ${userName}, Thank you for Your question! We will be in touch shortly.`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 7000,
    });
    setUserName('');
    setUserEmail('');
    setUserQuestion('');
  };

  return (
    <section>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12 col-md-6">
            <div className="card">
              <div className="name-email-wrapper">
                <input
                  type="text"
                  className="input"
                  value={userName}
                  placeholder="Enter Your name"
                  required
                  onChange={(e) => setUserName(e.target.value)}
                />
                <input
                  type="email"
                  className="input"
                  value={userEmail}
                  placeholder="Enter Your email"
                  required
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
              <div className="text-wrapper">
                <textarea
                  value={userQuestion}
                  placeholder="Enter Your question"
                  required
                  onChange={(e) => setUserQuestion(e.target.value)}
                />
              </div>
              <Button
                label="Submit question"
                disabled={!isEnabled}
                clickHandler={submitHandler}
              />
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};