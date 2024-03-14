//SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    uint256 constant _initial_supply = 1000000000 * (10 ** 18);

    constructor() ERC20("MyToken", "MT") {
        _mint(msg.sender, _initial_supply);
    }
}
