import './App.css';
import { ApolloProvider } from "@apollo/client";
import client from "./ApolloConfig";
import {UserContextProvider} from 'context/UserContext';
import Header from 'components/Header';
import Router from 'router/index';
import 'antd/dist/antd.css';

function App() {

  return (
    <>
      <ApolloProvider client={client}>
          <UserContextProvider>
            <Header />
            <Router />
          </UserContextProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
