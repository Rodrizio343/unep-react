import './App.css';
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloConfig";
import {UserContextProvider} from 'context/UserContext';
import Layout from 'components/Layout';
import Router from 'router/index';
import 'antd/dist/antd.css';

function App() {

  return (
    <>
      <ApolloProvider client={client}>
          <UserContextProvider>
            <Layout>
              <Router />
            </Layout>
          </UserContextProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
