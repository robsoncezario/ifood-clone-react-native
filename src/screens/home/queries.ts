import {gql} from '@apollo/client';

export const homeQuery = gql`{
  fetchAllCategories {
    id,
    name,
    imageSrc
  }

  fetchAllRestaurants {
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