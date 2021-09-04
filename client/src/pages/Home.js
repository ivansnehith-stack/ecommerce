import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import BestSellers from "../components/home/BestSellers";
import NewArrivals from "../components/home/NewArrivals";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
const Home = () => {
  return (
    <>
      <div className="container-fluid text-sm-center p-5 bg-secondary text-danger h1 font-weight-bold">
        <Jumbotron
          text={["Latest Products", " New Arrivals", "Best Sellers"]}
        />
      </div>

      <h4 className=" container-fluid text-center bg-secondary p-3 mt-5 mb-5 display-5 ">
        New Arrivals
      </h4>
      <NewArrivals />

      <br />
      <h4 className=" container-fluid text-center bg-secondary p-3 mt-5 mb-5 display-5 ">
        Best Sellers
      </h4>
      <BestSellers />

      <h4 className=" container-fluid text-center bg-secondary p-3 mt-5 mb-5 display-5 ">
        Categories
      </h4>
      <CategoryList />

      <h4 className=" container-fluid text-center bg-secondary p-3 mt-5 mb-5 display-5 ">
        Sub categories
      </h4>
      <SubList />
    </>
  );
};

export default Home;
