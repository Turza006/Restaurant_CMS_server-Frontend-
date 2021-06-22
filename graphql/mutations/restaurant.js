import gql from "graphql-tag";

export const CREATE_RESTAURANT = gql`
    mutation CreateRestaurant($payload: RestaurantInput) {
        CreateRestaurant(payload: $payload) {
            msg
            code
            restaurantId
        }
    }`
