
export default async ({ store }) => {
    await store.dispatch("auth.gql/callApollo")
};
