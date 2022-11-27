import { StrToBooleanPipe } from './str-to-boolean.pipe';

describe('StrToBooleanPipe', () => {
  it('create an instance', () => {
    const pipe = new StrToBooleanPipe();
    expect(pipe).toBeTruthy();
  });
});
