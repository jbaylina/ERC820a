pragma solidity ^0.4.24;

import "./ERC820aImplementerInterface.sol";


contract ExampleImplementer is ERC820aImplementerInterface {
    function canImplementInterfaceForAddress(bytes32 interfaceHash, address addr) external view returns(bytes32) {
        return ERC820a_ACCEPT_MAGIC;
    }
}
