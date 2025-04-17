import Header from "../Components/Header/Header";

export default function Layout({ children, allPagesContext }) {
  return (
    <div>
      <Header allPagesContext={allPagesContext} />

      <main>
        <div>{children}</div>
      </main>
    </div>
  );
}
