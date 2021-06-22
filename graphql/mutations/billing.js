import gql from "graphql-tag";

export const BILLING_REQUEST = gql`
    mutation BillingRequest($payload: BillingInfoInput) {
        BillingRequest(payload: $payload) {
            msg
            code
            jwt
        }
    }
`

export const BUY_PACKAGE = gql`
    mutation BuyPackage($payload: OwnedPackageInput) {
        BuyPackage(payload: $payload) {
            ownedPackageID
            msg
            code
        }
    }
`
