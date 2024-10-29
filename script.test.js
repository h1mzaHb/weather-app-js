import { fireEvent } from '@testing-library/dom';
import '@testing-library/jest-dom';

document.body.innerHTML = `
  <input class="city-input" />
  <button class="search-btn">Search</button>
`;

global.updateWeatherInfo = jest.fn();

describe('City Input Functionality', () => {

});
