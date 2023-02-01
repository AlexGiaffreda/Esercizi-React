import ReactDOM  from 'react-dom';
import { Hello } from './Hello';

const HelloElement = <Hello />
const root = document.querySelector('#root')

ReactDOM.render(HelloElement, root)

