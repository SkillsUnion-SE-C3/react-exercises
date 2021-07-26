import './App.css';
import RenderComponent from './exercises/1-render-component/RenderComponent';
import EmbeddingJavascript from './exercises/2-embedding-javascript/EmbeddingJavaScript';
import PassAProp from './exercises/3-pass-a-prop/PassAProp';
import UseProps from './exercises/4-use-props/4-UseProps';
import ConditionalRendering from './exercises/5-conditional-rendering/ConditionalRendering';
import RenderAList from './exercises/6-render-a-list/RenderAList';

function App() {
  return (
    <div className="App">
      <RenderComponent/>
      <EmbeddingJavascript/>
      <PassAProp/>
      <UseProps/>
      <ConditionalRendering/>
      <RenderAList/>
    </div>
  );
}

export default App;
