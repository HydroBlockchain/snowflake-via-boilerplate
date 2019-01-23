# Snowflake Resolver Boilerplate

This [Truffle box](https://truffleframework.com/boxes) comes with everything you need to deploy your own Snowflake Resolver.

[Snowflake](https://github.com/hydrogen-dev/smart-contracts/tree/master/snowflake) is an on-chain identity framework built on [ERC-1484](https://erc1484.org/) offering powerful tools to developers building dApps on top of it. The docs for Snowflake are [available on GitBook](https://hydro.gitbook.io/docs/).

## FAQs

### What is `SnowflakeResolver`?
`SnowflakeResolver` is [a contract which all Resolvers must inherit from](./contracts/SnowflakeResolver.sol); it ensures that Resolvers are compatible with the Snowflake smart contract. It's essentially a parent class that defines a few helpful variables and functions!

### How do I keep track of addresses and smart contracts derived from `Snowflake`?
The easiest way is to override the `setSnowflakeAddress` function of `SnowflakeResolver`. This allows you to declare variables such as `SnowflakeInterface snowflake;` and initialize them like so `snowflake = SnowflakeInterface(snowflakeAddress);`

### How do I initiate Transfers?
Assuming you have the proper allowance, call `snowflake.transferSnowflakeBalanceFrom(einFrom, einTo, amount)`. To use a via, simply call `snowflake.transferSnowflakeBalanceFromVia(einFrom, via, einTo, amount)`.

### How do I initiate Withdrawals?
Assuming you have the proper allowance, call `snowflake.withdrawSnowflakeBalanceFrom(einFrom, to, amount)`. To use a via, simply call `snowflake.withdrawSnowflakeBalanceFromVia(einFrom, via, einTo, amount)`.

### How do I initiate Escrowed Transfers?
First, ensure that you have properly escrowed funds using `withdrawSnowflakeBalanceFrom`. Then, call `snowflake.transferHydroBalanceTo(to, amount)` or `snowflake.transferHydroBalanceToVia(to, via, amount, _bytes)`.

### How do I initiate Escrowed Withdrawals Via?
First, ensure that you have properly escrowed funds using `withdrawSnowflakeBalanceFrom`. Then, call `snowflake.withdrawHydroBalanceTo(to, amount)` or `snowflake.withdrawHydroBalanceToVia(to, via, amount, _bytes)`.

### What if I don't want to pass any bytes in my Via calls?
Simply use `hex""` to pass an empty argument.
