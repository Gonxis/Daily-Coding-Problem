/**
This problem was asked by Twitter.

You run an e-commerce website and want to record the last N order ids in a log.
Implement a data structure to accomplish this, with the following API:

record(order_id): adds the order_id to the log
get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.

You should be as efficient with time and space as possible.
 */


class DataStructure {

    constructor(numOfRecords) {
        this.numOfRecords = numOfRecords;
        this.ids = [];
        this.fillAutomaticallyIds(this.numOfRecords);
    }

    fillAutomaticallyIds(numOfRecords) {
        for (let i = 0; i < numOfRecords; i++) {
            this.ids.push(Math.floor(Math.random() * 42 + 1));
        }
    }

    record(order_id) {
        if (this.ids.length < this.numOfRecords)
            this.ids.push(order_id);

        return this.ids;
    }

    get_last(i) {
        if (i > this.numOfRecords) {
            return "i has to be lower or equal to the num of records"
        }
        return this.ids[i];
    }
}

let ds = new DataStructure(10);
console.log(ds.record(4));
console.log(ds.get_last(4));