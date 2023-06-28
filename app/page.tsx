import scss from "./page.module.scss";

export default function Home() {
  return (
    <div className={scss.wrapper}>
      <h1 className={scss.title}>Home page</h1>
    </div>
  );
}
