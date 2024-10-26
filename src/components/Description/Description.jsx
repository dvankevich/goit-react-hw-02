import c from "./Description.module.css"

export default function Description() {
  console.log("Description");
  
  return (
    <header className={c.header}>
      <h1 className={c.caption}>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.
</p>
    </header>
  );
}