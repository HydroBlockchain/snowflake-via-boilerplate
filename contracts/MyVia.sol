pragma solidity ^0.5.0;

import "./SnowflakeVia.sol";
import "./interfaces/IdentityRegistryInterface.sol";
import "./interfaces/HydroInterface.sol";
import "./interfaces/SnowflakeInterface.sol";

contract MyVia is SnowflakeVia {
    constructor (address snowflakeAddress) SnowflakeVia(snowflakeAddress) public {
        // setSnowflakeAddress(snowflakeAddress);
    }

    // optionally, override the setSnowflakeAddress function of SnowflakeVia to...
    // function setSnowflakeAddress(address snowflakeAddress) public onlyOwner() {
    //     super.setSnowflakeAddress(snowflakeAddress);
    //     // ...initialize varaiables based on addresses derived from snowflake
    // }

    // end recipient is an EIN
    function snowflakeCall(
        address /* resolver */,
        uint /* einFrom */,
        uint /* einTo */,
        uint /* amount */,
        bytes memory /* snowflakeCallBytes */
    ) public senderIsSnowflake() {
        revert("Not Implemented.");
    }

    // end recipient is an EIN, no from field
    function snowflakeCall(
        address /* resolver */,
        uint /* einTo */,
        uint /* amount */,
        bytes memory /* snowflakeCallBytes */
    ) public senderIsSnowflake() {
        revert("Not Implemented.");
    }

    // end recipient is an address
    function snowflakeCall(
        address /* resolver */,
        uint /* einFrom */,
        address payable /* to */,
        uint /* amount */,
        bytes memory /* snowflakeCallBytes */
    ) public senderIsSnowflake() {
        revert("Not Implemented.");
    }

    // end recipient is an address, no from field
    function snowflakeCall(
        address /* resolver */,
        address payable /* to */,
        uint /* amount */,
        bytes memory /* snowflakeCallBytes */
    ) public senderIsSnowflake() {
        revert("Not Implemented.");
    }
}
