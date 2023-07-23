// SPDX-License-Identifier: GPL-3.0

// Import the ERC20 contract interface
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

pragma solidity 0.8.18;

struct Order {
    address receiver;
    address tokenIn;
    address tokenOut;
    uint256 tokenInAmount;
    uint256 price;
}

contract ODX {

    mapping (uint256 => Order) public orders;
    uint256 nonce;

    function pushOrderLiquidity(address receiver, address tokenIn, address tokenOut, uint256 tokenInAmount, uint256 price) public returns (uint256) {
        orders[++nonce] = Order(receiver, tokenIn, tokenOut, tokenInAmount, price);
        IERC20(tokenIn).transferFrom(msg.sender, receiver, tokenInAmount);
        return nonce;
    }

    function fillOrders(uint256 orderIdA, uint256 orderIdB) public {
        // check conditions of orders here
        require(orders[orderIdA].tokenIn == orders[orderIdB].tokenOut, "tokenIn of order A must be tokenOut of order B");
        require(orders[orderIdA].tokenInAmount * orders[orderIdB].tokenInAmount == orders[orderIdA].price, "price of order A must be price of order B");
        IERC20(orders[orderIdA].tokenIn).transfer(orders[orderIdB].receiver, orders[orderIdA].tokenInAmount);
        IERC20(orders[orderIdB].tokenIn).transfer(orders[orderIdA].receiver, orders[orderIdB].tokenInAmount);
    }

}