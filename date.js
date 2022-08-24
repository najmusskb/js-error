const today = new Date();
console.log(today);



const newDate = new Date('1971-03-26');
const newDate2 = new Date('1971-12-16');
if (newDate.getTime() > newDate2.getTime()) {


    console.log('march was before Decembor');

}
else {

    console.log('march wasnt before december ')
}