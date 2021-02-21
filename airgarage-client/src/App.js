import './App.css';

import React, {useContext} from 'react'

import { CitySearch } from './components/CitySearch'
import { ResultsCards } from './components/ResultsCards'

import { YelpContext } from './data/YelpProvider'

function App() {

  const {searchList} = useContext(YelpContext)

  return (
    <div className="App">
      <CitySearch />
      {searchList ?
      searchList.map(result => {
        return <ResultsCards result={result}  key={result.id}/>
      })
      : null
      }
    </div>
  );
}

export default App;
