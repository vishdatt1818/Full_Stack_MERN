import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddSong = () => {
  const [title, setSongTitle] = useState("");
  const [song, setSong] = useState("");

  const nav = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if (!song) return;

    // Create a temporary local URL for the file
    const fileUrl = URL.createObjectURL(song);

    // Create a temporary <a> tag to trigger download
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = song.name; // Retain original file name
    document.body.appendChild(link);
    link.click();

    // Clean up memory
    document.body.removeChild(link);
    URL.revokeObjectURL(fileUrl);
  };

  return (
    <>
      <section
        className="contact-section "
        id="contact-section"
        aria-labelledby="contact-heading"
      >
        <div className="container ">
          <div className="section-heading d-flex justify-content-center mt-5">
            {/* <p className="eyebrow">We'd love to hear from you</p> */}
            <h2 className="section-heading__title" id="contact-heading">
              Add Song
            </h2>
          </div>
          <div className="d-flex justify-content-center">
            <div className="col-12 col-lg-7">
              <form
                onSubmit={handleForm}
                className="contact-form-card"
                id="contact-form"
                noValidate=""
              >
                <div className="row g-3">
                  <div className="col-12">
                    <label
                      htmlFor="contact-email"
                      className="form-label radio-form-label"
                    >
                      Add Song Title
                    </label>
                    <input
                      type="text"
                      className="form-control radio-form-control"
                      id="contact-email"
                      name="email"
                      autoComplete="email"
                      required=""
                      onChange={(e) => {
                        setSongTitle(e.target.value);
                      }}
                    />
                    <div className="invalid-feedback" data-error-for="email">
                      Enter a valid email address.
                    </div>
                  </div>

                  <div className="col-12 ">
                    <label
                      htmlFor="contact-name"
                      className="form-label radio-form-label"
                    >
                      Add Song
                    </label>
                    <input
                      type="file"
                      className="form-control radio-form-control"
                      id="contact-name"
                      name="password"
                      autoComplete="password"
                      required=""
                      onChange={(e) => {
                        setSong(e.target.files[0]);
                      }}
                    />
                    <div className="invalid-feedback" data-error-for="name">
                      Please tell us your password.
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn radio-btn radio-btn--primary radio-btn--lg w-100 w-sm-auto"
                    >
                      <i className="bi bi-send-fill" aria-hidden="true" /> Add Song
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddSong;
