import './App.css';
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloConfig";
import {UserContextProvider} from 'context/UserContext';
import Layout from 'components/Layout';
import Router from 'router/index';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import store from 'redux/store';

function App() {

  return (
    <>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <UserContextProvider>
            <Layout>
              <Router />
            </Layout>
          </UserContextProvider>
        </Provider>
      </ApolloProvider>
    </>
  );
}

export default App;
