import React from 'react';
import { Header, Main, DropDown, Poop } from './components';
import Android from './components/Poop/images/android.svg';
import Bowl from './components/Poop/images/bowl.svg';
import './index.scss';

const LANGUAGES = [{ name: 'English', code: 'en' }, { name: 'Lithuanian', code: 'lt' }];

class App extends React.Component {
  state = {
    language: LANGUAGES[0].code,
    poopArray: [],
  };

  onClick = () => {
    this.setState({
      poopArray: [...this.state.poopArray, '💩'],
    });
  };

  onChange = e => {
    this.setState({ language: e.target.value });
  };

  render() {
    const { language, poopArray } = this.state;
    const items = LANGUAGES.map(({ name, code }) => ({ children: name, value: code }));
    const poopItems = { Android, Bowl, poopArray };

    return (
      <div className="App">
        <Poop items={poopItems} onClick={this.onClick} />
        <Header />
        <DropDown items={items} onChange={this.onChange} />
        <Main language={language} />
      </div>
    );
  }
}

// function App() {
//   const [language, setLanguage] = React.useState(LANGUAGES[0].code);
//   const items = LANGUAGES.map(({ name, code }) => ({ children: name, value: code }));
//   const onChange = e => {
//     setLanguage(e.target.value);
//   };
//   return (
//     <div className="App">
//       <Header />
//       <DropDown items={items} onChange={onChange} />
//       <Main language={language} />
//     </div>
//   );
// }

export default App;
