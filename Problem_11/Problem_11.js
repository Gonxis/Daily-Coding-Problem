/**
This problem was asked by Twitter.

Implement an autocomplete system. That is, 
given a query string s and a set of all possible query strings, 
return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], 
return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
 */

/**
 * Search for all strings in set where begins with s
 * @param {String} s String
 * @param {String[]} set Array
 * @return {String[]} Array
 */
let autocomplete = (s, set) => {
    return set.filter(x => x.startsWith(s));
}

//console.log(autocomplete("de", ["dog", "deer", "dear", "deal", "dalde"]));
module.exports = autocomplete;