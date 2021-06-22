export const getDataWithCustomHeader = async function ($apollo, query, args, header) {
  const { data } = await $apollo.query({
    query,
    variables: args,
    context: {
      headers: {
        Authorization: `${header.jwt}`
      }
    },
    fetchPolicy: 'network-only'
  })
  // console.log(data)
  return data
}

export const getMutationDataWithCustomHeader = async function (
  $apollo,
  query,
  args,
  header
) {

  return await $apollo.mutate({
    mutation: query,
    variables: args,
    context: {
      headers: {
        Authorization: `${header.jwt}`
      }
    }
  })
}
