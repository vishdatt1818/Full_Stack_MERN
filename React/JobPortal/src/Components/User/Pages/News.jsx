// import axios from "axios";
// import React, { useState } from "react";

// const News = () => {
//   const [News, setNews] = useState("");
//   const [ShowNews, setShowNews] = useState([]);

//   const handle = () => {
//     axios
//       .get(
//         `https://gnews.io/api/v4/search?q=${News}&lang=en&country=us&max=10&apikey=f8f8ae94d102be36afa5821d878e9f2e`,
//       )
//       .then((res) => {
//         console.log(res.data.articles);
//         setShowNews(res.data.articles);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   return (
//     <>
//       <div className="container">
//         <input
//           className="w-50  m-5"
//           onChange={(e) => {
//             setNews(e.target.value);
//           }}
//           type="text"
//         />
//         <button onClick={handle} className="btn btn-success mx-5 px-5">
//           Submit
//         </button>
//       </div>
//       <div className="container row g-5 d-flex justify-content-between mb-5">
//         {ShowNews.map((news) => (
//           <div className="card" style={{ width: "18rem" }}>
//             <img src={news.image} className="card-img-top" alt="..." />
//             <div className="card-body">
//               <h5 className="card-title">{news.title}</h5>
//               <p  className="card-text">
//                 {news.description}
//               </p>
//               <a href="#" className="btn btn-success">
//                 Read More
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default News;




import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const News = () => {
  const [News, setNews] = useState("");
  const [ShowNews, setShowNews] = useState([]);

  const handle = () => {
    axios
      .get(
        `https://gnews.io/api/v4/search?q=${News}&lang=en&country=us&max=10&apikey=f8f8ae94d102be36afa5821d878e9f2e`
      )
      .then((res) => {
        setShowNews(res.data.articles);

          toast(res.data.message, {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });


      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
    {/* <h1>News</h1> */}
        <input
          className="w-50 m-5"
          onChange={(e) => {
            setNews(e.target.value);
          }}
          type="text"
        />
        <button onClick={handle} className="btn btn-success mx-5 px-5">
          Submit
        </button>
      </div>

      <div className="container">
        {/* Updated grid container */}
        <div className="row g-4 mb-5">
          {ShowNews.map((news, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
              {/* Added h-100 and flexbox classes to card */}
              <div className="card w-100 h-100 shadow-sm">
                <img
                  src={news.image}
                  className="card-img-top"
                  alt={news.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{news.title}</h5>
                  <p className="card-text">{news.description}</p>
                  {/* mt-auto pushes the button to the bottom of equal-height cards */}
                  <a
                    href={news.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-success mt-auto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;