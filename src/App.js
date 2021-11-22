import './App.css';
import RenderComponent from './exercises/1-render-component/RenderComponent';
import StateToProps from './exercises/10-state-to-props/StateToProps';
import EmbeddingJavascript from './exercises/2-embedding-javascript/EmbeddingJavaScript';
import PassAProp from './exercises/3-pass-a-prop/PassAProp';
import UseProps from './exercises/4-use-props/4-UseProps';
import ConditionalRendering from './exercises/5-conditional-rendering/ConditionalRendering';
import RenderAList from './exercises/6-render-a-list/RenderAList';
import ListenEvents from './exercises/7-listen-events/ListenEvents';
import StateOfComponent from './exercises/8-state-of-component.js/StateOfComponent';
import Form from './exercises/9-form/Form';
import UseEffectWithFetch from './exercises/11-useEffect-with-fetch/UseEffectWithFetch';
import RenderTwoLists from './exercises/12-render-two-lists/RenderTwoLists';
import ModifyArrayState from './exercises/13-modify-array-state.js/ModifyArrayState';

function App() {
  return (
    <div className="App">
      <RenderComponent />
      <EmbeddingJavascript />
      <PassAProp />
      <UseProps />
      <ConditionalRendering />
      <RenderAList />
      <ListenEvents />
      <StateOfComponent />
      <Form />
      <StateToProps />
      <UseEffectWithFetch />
      <RenderTwoLists />
      <ModifyArrayState />
    </div>
  );
}

export default App;
