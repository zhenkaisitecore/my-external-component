import * as FEAAS from "@sitecore-feaas/clientside/react";

const Hello = () => {
  return (
    <>
      <h1>This is a hello to you!</h1>
    </>
  );
};

export default Hello;

FEAAS.registerComponent(Hello, {
    name: 'Hello'
})