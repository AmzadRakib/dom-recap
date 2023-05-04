const toDay = Date();
console.log(toDay);

const date1 = new Date('1971-03-26');
const date2 = new Date('1971-12-16');
if (date1.getTime() < date2.getTime()) {
    console.log('March before december');
}
else {
    console.log('March after December');
}