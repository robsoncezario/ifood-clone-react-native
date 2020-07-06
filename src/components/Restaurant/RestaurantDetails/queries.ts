import {gql} from '@apollo/client';

export const fetchRestaurantDetails = gql`
  query FetchRestaurantDetails($restaurantId: Float!) {
    fetchRestaurantDetails(restaurantId: $restaurantId) {
      id,
      name,
      imageSrc,
      minDeliveryPrice,
      minDeliveryInterval,
      maxDeliveryInterval,
      deliveryCost,

      orders {
        id,
        name,
        description,
        imageSrc,
        price,
        discount,
        createdAt
      }
      
      address {
        latitude,
        longitude
      },

      category {
        name
      },

      rating {
        value
      }
    }
  }`;