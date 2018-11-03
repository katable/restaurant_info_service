import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const fetchPolifill = require('whatwg-fetch');
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.fetch = fetchPolifill.fetch
global.Request = fetchPolifill.Request
global.Headers = fetchPolifill.Headers
global.Response = fetchPolifill.Response