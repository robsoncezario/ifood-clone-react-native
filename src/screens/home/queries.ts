import { gql } from 'apollo-boost';

export const homeQuery = gql`{
  fetchAllCategories {
    id,
    name,
    imageSrc
  }
}`;