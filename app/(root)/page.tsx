import { SearchForm } from "../components";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch your ideas, <br /> Connect with Entreprenuers!</h1>
        <p className="sub-heading !max-w-3xl">Submit ideas both on pitches and get noticed in virtual competitions</p>

        <SearchForm query={query} />
      </section>
    </>
  );
}
