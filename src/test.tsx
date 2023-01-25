import apolloClient from '@/utils/apolloClient';
import { gql } from '@/__generated__';

function Detail() {
  return <div />;
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps(context: any) {
  const res = await apolloClient.query({
    query: gql(`
      query GetAd($id: UUID!) {
        ad(id: $id) {
          id
          hi
        }
      }
    `),
    variables: {
      id: context.params.id,
    },
    fetchPolicy: 'network-only',
  });

  return {
    revalidate: 60,
    props: {
      ad: res.data.ad,
    },
  };
}

export default Detail;
