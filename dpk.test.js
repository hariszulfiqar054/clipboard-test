const { deterministicPartitionKey } = require('./dpk');

describe('deterministicPartitionKey', () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe('0');
  });

  it('Returns the same partitionKey value if the object with partitionKey property is the input', () => {
    const trivialKey = deterministicPartitionKey({
      partitionKey: 'hello world',
    });
    expect(trivialKey).toBe('hello world');
  });

  it('Returns the hashed value of the input', () => {
    const trivialKey = deterministicPartitionKey('hello');
    const trivialKey2 = deterministicPartitionKey(2);
    expect(trivialKey).toBe(
      'ea80224d30664a6d5d6ed2460016177b429fdce58b820ecf490d470718e28886291085ef696f338781821c81cdeff08577a0acec0ff1906e05505d17a1d129a0'
    );
    expect(trivialKey2).toBe(
      '564e1971233e098c26d412f2d4e652742355e616fed8ba88fc9750f869aac1c29cb944175c374a7b6769989aa7a4216198ee12f53bf7827850dfe28540587a97'
    );
  });
});
