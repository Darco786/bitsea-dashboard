import React from "react";

import "./Modal.css";

// import { FaTelegram } from "react-icons/fa";

function Model({ setIsModal }) {
  





  return (
    <div className="modalBackground">
      <div className="modalContainer" >
 
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setIsModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="">
          <section className="section-box">
            <div className="formWrapper">
              <header className="pop-head">
                <h2 className="text-center   mb-10px lh-1">Join us!</h2>
                <h1 className="fs-55px weight-7 text-center  lh-1">
                  We are still in beta.Get
                  <span className="red"> Early Access</span> by joining on our
                  waitlist.
                </h1>
              </header>
              <form >
                {/*  */}
                <input
                  type="text"
                  className="fs-26px  weight-3"
                  placeholder="Full Name :"
                  name="full_name"
                  required
                />
                <input
                  type="email"
                  className="fs-26px  weight-3"
                  placeholder="Email :"
                  name="email"
                  required
                />

                <label for="signup" className="white">
                  Choose a option:
                </label>
                <select id="option">
                  <option value="freelancer">
                    {" "}
                    <input
                      type="text"
                      className="fs-26px  weight-3"
                      placeholder="Freelance :"
                      name="free_l"
                      value="Freelance"
                    />
                    Freelance
                  </option>
                  <option value="employer" id="employer" name="employer">
                    <input
                      type="text"
                      className="fs-26px  weight-3"
                      placeholder="Employer"
                      name="emp"
                      value="Employer"
                    />
                    Employer
                  </option>
                  <option value="Jobseeker" name="Jobseeker">
                    <input
                      type="text"
                      className="fs-26px  weight-3"
                      placeholder="Jobseeker"
                      name="job_s"
                      value="Jobseeker"
                    />
                    Jobseeker
                  </option>
                </select>

                <div className="btn-modal">
                  <button type="submit" className="fs-26px  weight-5 pointer">
                    Request early access
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Model;
