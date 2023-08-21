import { Layout } from "./Layout/Layout"
import { Profile } from "./Profile/Profile"

import { GlobalStyle } from './GlobalStyle';


import user from 'data/user.json'
import data from '../data/data.json'
// import friends from '../data/friends.json'
// import transactions from '../data/transactions.json'



export const App = () => {
  return (
    <Layout>
      <Profile items={user} />
      <Statistics stats={data} />
      </Layout>
  );
};
