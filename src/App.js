import React from 'react';

import Accordion from './components/searching/Accordion';
import Search from './components/searching/Search';

const items = [
  {
    title: 'What is React?',
    content: 'React is front end js framework'
  },
  {
    title: 'Why use React',
    content: 'React is favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'We use components'
  }
];

function App() {
  return (
    <div>
      <Search/>
      {/* <Accordion items={items}/> */}
    </div>
  );
}

export default App;


//Wiki API:
//en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=SEARCHTERM