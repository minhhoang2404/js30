const people = [
    { name: 'wes', year: 1988 },
    { name: 'tom', year: 1978 },
    { name: 'ani', year: 1998 },
    { name: 'na', year: 1982 },
    { name: 'ani', year: 1990 },
];

const comment = [
    { text: 'oke men', id: 1 },
    { text: 'oke men vip', id: 3 },
    { text: 'you are good', id: 2 },
    { text: 'you are so beautifull', id: 4 },
];


// people >= 19 age
const isAdul19 = people.some(persion => {
    const getYear = (new Date()).getFullYear;
    return getYear - persion.year >= 19;
});
console.log(isAdul19);


// find cmt id = 2
const cmt = comment.find(cmts => {
    return cmts.id === 2;
})
console.log(cmt);


// find index id = 3
const cmtId = comment.findIndex(ids => {
    return ids.id === 2;
})
console.log(cmtId);
