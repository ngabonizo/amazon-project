import {moneyFormat} from '../data/utils/money.js';

//describe creates a test suit
describe('test suite: formatCurrency', () => {
  //it() creates a test
  it('converts cents into dollars', () => {
    //expect creates if statements used for testing
    expect(moneyFormat(2095)).toEqual('20.95');
  });

  it('works with 0', () => {
    expect(moneyFormat(0)).toEqual('0.00')
  });

  it('rounds up to the nearest cent', () =>{
    expect(moneyFormat(2000.5)).toEqual('20.01')
  })
})