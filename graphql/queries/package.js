import gql from 'graphql-tag'

export const SHOW_ALL_PACKAGE_BY_CATEGORY_ID = gql`
    query ShowAllPackageByCategoryId($CategoryId: ID) {
        ShowAllPackageByCategoryId(CategoryId: $CategoryId, status: "ACTIVE") {
            Packages {
                id
                packageName
                packagePrice
                serviceCategory{
                    Category
                }
                serviceCovered {
                    serviceName
                    servicePrice
                }
                status
            }
            msg
            code
        }
    }
`

export const SHOW_ALL_OWNED_PACKAGE = gql`
    query {
        ShowAllOwnedPackage {
            OwnedPackages {
                _id
                package {
                    _id
                    serviceCategory {
                        Category
                    }
                    packageName
                    packagePrice
                }
                restaurant{
                    id
                    uniqueName
                    name
                }
                status
                startedFrom
                createdAt
                updatedAt
            }
            msg
            code
        }
    }
`
