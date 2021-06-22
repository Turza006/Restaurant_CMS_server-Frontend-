import gql from "graphql-tag";

export const ALL_SERVICE_BY_CATEGORY = gql`
    query($CategoryId: ID) {
        AllServiceByCategory(CategoryId: $CategoryId) {
            Services {
                id
                serviceName
                servicePrice
                ServiceCategory {
                    Category
                }
                status
                createdAt
                updatedAt
            }
            msg
            code
        }
    }
`
