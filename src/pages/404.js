import * as React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";

// markup
const NotFoundPage = () => {
  return (
    <Layout seo={{ title: "404 not found" }}>
      <Header
        settings={{
          text1: "Not found",
          text2: "Page not found",
        }}
      />
    </Layout>
  );
};

export default NotFoundPage;
