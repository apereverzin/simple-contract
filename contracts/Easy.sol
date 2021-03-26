pragma solidity ^0.8.0;

contract Easy {
    mapping (uint256 => uint256) public counts;

    function getCount(uint256 key) view public returns (uint256) {
        return counts[key];
    }

    function incrementCount(uint256 key) public {
        counts[key] = counts[key] + 1;
    }
}
