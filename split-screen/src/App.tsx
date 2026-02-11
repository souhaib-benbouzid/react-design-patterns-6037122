import SplitScreen from './SplitScreen';

const LeftHandComponent = ({ text }: { text: string }) => {
  return (
    <div style={{ backgroundColor: 'lightblue', height: '80%' }}>{text}</div>
  );
};

const RightHandComponent = ({ text }: { text: string }) => {
  return (
    <div style={{ backgroundColor: 'lightcoral', height: '80%' }}>{text}</div>
  );
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent text="Left Hand Component" />
      <RightHandComponent text="Right Hand Component" />
    </SplitScreen>
  );
}

export default App;
