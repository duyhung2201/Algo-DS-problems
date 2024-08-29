/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
	let set = new Set();

	for (const email of emails) {
		let [local, domain] = email.split('@');
		let localRefined = local.split('+')[0].replaceAll('.', '');

		set.add(localRefined + '@' + domain);
	}
	return set.size;
};

console.log(
	numUniqueEmails([
		'test.email+alex@leetcode.com',
		'test.email.leet+alex@code.com',
	])
);
console.log(
	numUniqueEmails([
		'test.email+alex@leetcode.com',
		'test.e.mail+bob.cathy@leetcode.com',
		'testemail+david@lee.tcode.com',
	])
);
console.log(
	numUniqueEmails(['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com'])
);
