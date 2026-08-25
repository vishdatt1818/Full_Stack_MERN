import React, { useContext } from "react";
import { AuthContext } from "../../User/Pages/AuthProvider";

const Dashboard = ({value }) => {
  const { userId } = useContext(AuthContext);
  console.log(userId);
  console.log("appiddd", value);
  
  

  return (
    <>
    <div style={{ height: "500px" }} className="m-5">
      <h1>Dashboard`</h1>
      sdfsdfsdfdsf asdsad asdsadasd sadasd Lorem ipsum, dolor sit amet
      consectetur adipisicing elit. Saepe laborum sapiente voluptatum at!
      Dolorem culpa sequi aperiam ipsam illum facere odio iure quasi. Nostrum,
      impedit facere? Dicta nam hic rerum. Lorem ipsum dolor sit amet
      tam necessitatibus ea quibusdam modi nemo
     
    </div>
    <h1>
            User ID: {userId}
        </h1>
        </>
  );
};

export default Dashboard;
