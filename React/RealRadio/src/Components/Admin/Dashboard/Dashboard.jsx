import React, { useContext } from "react";
import { AuthContext } from "../../User/Pages/AuthProvider";

const Dashboard = () => {
  const { userId } = useContext(AuthContext);
  console.log(userId);
  

  return (
    <>
    <div style={{ height: "500px" }} className="m-5">
      <h1>Dashboard`</h1>
      sdfsdfsdfdsf asdsad asdsadasd sadasd Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Saepe laborum sapiente voluptatum at!
      Dolorem culpa sequi aperiam ipsam illum facere odio iure quasi. Nostrum,
      impedit facere? Dicta nam hic rerum. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Doloribus, iure? Cumque doloremque adipisci
      facere ipsa voluptate cum, porro voluptatem nulla dicta quisquam
      voluptatibus quam nam cupiditate ex amet odit voluptates aspernatur omnis
      fugiat saepe suscipit atque harum deserunt neque? Praesentium tenetur
      expedita eligendi. Voluptas, quis libero natus sint dignissimos vero
      numquam quasi animi accusamus quisquam aspernatur minima repellat,
      voluptates ducimus. Dicta sunt quaerat aliquid autem incidunt unde, at
      doloremque nam ipsum error totam necessitatibus ea quibusdam modi nemo
     
    </div>
    <h1>
            User ID: {userId}
        </h1>
        </>
  );
};

export default Dashboard;
