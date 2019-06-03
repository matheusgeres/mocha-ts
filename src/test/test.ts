import hello from './hello';
import { expect } from 'chai';
import 'mocha';
// Reference: https://journal.artfuldev.com/write-tests-for-typescript-projects-with-mocha-and-chai-in-typescript-86e053bdb2b6

describe('Hello function', () => {
  it('should return hello world', () => {
    let name = "Birl";
    const result = hello(name);
    expect(result).to.equal(`Hello World, ${name}!`);
  });
});