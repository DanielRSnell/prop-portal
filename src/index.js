// Standard
import React from 'react';
import 'antd/dist/antd.css';
import ReactDOM from 'react-dom';
import App from './App';

// GraphQL
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';

// Test
import gql from "graphql-tag";


const client = new ApolloClient({
    uri: "http://localhost:4000"
});

client.query({query: gql`
    {
        books {
            title
          } 
    }
`}).then(result => console.log(result));



ReactDOM.render(
    <ApolloProvider client={client}>
	<App />
    </ApolloProvider>,
    document.querySelector('#root')
);
