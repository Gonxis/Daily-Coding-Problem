/**
This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message,
count the number of ways it can be decoded.

For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

You can assume that the messages are decodable. For example, '001' is not allowed.
*/

/**
 * Decode to the letters of the alphabet a numeric message introduced by input
 * @param {String} message 
 * @param {Array} memo
 * @return {Number} 
 */

let decode = (message, memo = []) => {
    let result;
    if (message[0] === "0") return 0;
    else if (message.length <= 1) return 1;

    if (memo[message.length] != undefined) return memo[message.length];
    result = decode(message.substring(1, ), memo);

    if ((Number(message.substring(0, 2)) <= 26))
        result += decode(message.substring(2, ), memo);

    memo[message.length] = result;
    return result;
};

module.exports = decode;