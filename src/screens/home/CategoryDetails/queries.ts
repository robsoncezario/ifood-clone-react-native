import {gql} from '@apollo/client';

export const fetchCategoriesById = gql`
  query FetchAllRestaurantsByCategory($categoryId: Float!) {
    fetchAllRestaurantsByCategory(categoryId: $categoryId) {
      id,
      name,
      imageSrc,
      minDeliveryPrice,
      minDeliveryInterval,
      maxDeliveryInterval,
      deliveryCost,
      
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