// Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

// For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
// If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

// For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

// For example, "m.y+name@email.com" will be forwarded to "my@email.com".
// It is possible to use both of these rules at the same time.

// Given an array of strings emails where we send one email to each email[i], return the number of different addresses that actually receive mails.

function numUniqueEmails(emails: string[]): number {

    for (let i in emails) {
        let atIndex = emails[i].indexOf('@');
        let firstPart = emails[i].substring(0, atIndex);
  
        if (firstPart.indexOf('+') !== -1) {
            const tailored = emails[i].substring(0, firstPart.indexOf('+'));

            emails[i] = emails[i].replace(firstPart, tailored)
        }
        atIndex = emails[i].indexOf('@');
        firstPart = emails[i].substring(0, atIndex);
        if (firstPart.indexOf('.') !== -1) {
            const fp = firstPart;
            const regex = /./
            firstPart = firstPart.split(".").join(""); // this will remove the '.' from first part
            emails[i] = emails[i].replace(fp, firstPart)
        }

    }

    let s = new Set(emails);
    return s.size;
};

numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"])