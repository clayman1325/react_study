import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';


function App() {
  const isAuth = useSelector(state => state.auth.isAuth)

  return (
    <Fragment>
      <Header />
      { !isAuth &&<Auth /> }
      <Counter />
    </Fragment>
  );
}

export default App;
