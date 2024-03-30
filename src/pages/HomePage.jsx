import React from "react";
import Layout from "../components/Layout/Layout";
import ListView from "../components/ListView/ListView";

const HomePage = () => {
  return (
    <Layout>
      <div
        style={{
          padding: "6px 24px",
        }}>
        <ListView />
      </div>
    </Layout>
  );
};

export default HomePage;
