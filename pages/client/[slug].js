import ClientComponent from '../../components/ClientComponent';
import database from '../../database/db.json';

 // pages/posts/[id].js

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const data = database;
  return {
    paths: data
      .map((x) => {
        const slug = x.cliente;
        return {
          params: {
            slug,
          },
        };
      })
      .filter(({ params }) => !!params.slug),
    fallback: false,
  };
}
  
// `getStaticPaths` requires using `getStaticProps`
export function getStaticProps(context) {
  const clientes = context.params.slug;
  const data = database;
  const found = data.find((x) => clientes === x.cliente);
  return {
    props: {
      props: found,
    },
  };
}
  
export default function Slug({ props }) {
  return (
    <div className="h-full min-h-screen">
      <ClientComponent data={props} />
    </div>
  );
}








