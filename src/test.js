import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET__BOOKS = gql`{
GetProperty {
            id
            slug
            prop_photos {
            ID
            guid
            }
        }
    }
    `

const TestStuff = () => (
       <Query query={GET__BOOKS}>
         
         {({ loading, error, data }) => {
            {console.log(data)}
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            
            return data.GetProperty.map( item => {
                console.log(item.prop_photos);  
                return item.prop_photos.map( image => {
                    console.log(image);
                    return <img src={image.guid} key={image.ID} />;
                })
         });
            }}
       </Query>
    );

export default TestStuff;