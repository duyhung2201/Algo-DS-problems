function Interval(start, end) {
	this.start = start;
	this.end = end;
}

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
	let starts = [],
		ends = [];

	intervals.forEach((i) => {
		starts.push(i['start']);
		ends.push(i['end']);
	});

	starts.sort((a, b) => a - b);
	ends.sort((a, b) => a - b);

	let startP = 0,
		endP = 0,
		roomRequired = 0,
		maxRooms = 0;

	while (startP < intervals.length) {
		if (starts[startP] >= ends[endP]) {
			roomRequired--;
			endP++;
		} else {
			roomRequired++;
			startP++;
		}
		maxRooms = Math.max(maxRooms, roomRequired);
	}

	return maxRooms;
};

let intervals = [
	new Interval(0, 30),
	new Interval(5, 10),
	new Interval(15, 20),
];

console.log(minMeetingRooms(intervals)); // Output: 2

intervals = [new Interval(7, 10), new Interval(2, 4)];

console.log(minMeetingRooms(intervals));
