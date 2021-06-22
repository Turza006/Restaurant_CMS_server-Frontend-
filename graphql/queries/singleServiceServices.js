import gql from 'graphql-tag'

export const SINGLE_SERVICE_SERVICES = gql`
    query SingleServiceServices ($parentType: String) {
        SingleServiceServices(parentType: $parentType){
            serviceName
            servicePrice
        }
    }

`