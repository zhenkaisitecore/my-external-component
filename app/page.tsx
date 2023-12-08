import * as FEAAS from "@sitecore-feaas/clientside/react";
import style from "./page.module.css";

export default async function ExternalComponents() {
  return (
    <div className={style.page}>
      <h1>Rendering BYOC components</h1>
      <p>External components can be rendered directly in react tree</p>
      <section>
        <FEAAS.ExternalComponent componentName="Hello" />
      </section>
    </div>
  );
}
