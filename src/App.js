import ClockList from './Components/ClockList';
import Form from './Components/Form';
import Calculator from './Components/Calculator';
import Text from './Components/Composition/Text';
import Emoji from './Components/Composition/Emoji';


function App() {
    
    const quantities = [1, 2, 3];

    return <div>
        <ClockList quantities={quantities} />
        <Form />
        <Calculator />

        <Emoji>
            {({ addEmoji }) => <Text addEmoji={addEmoji} />}
        </Emoji>
    
    </div>;
}

export default App;
