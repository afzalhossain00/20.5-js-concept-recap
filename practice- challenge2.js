// একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে। 

function fahrenheitToCel(input) {
    let faren = (input - 32) * 5 / 9;
    return faren;
}
let farenheit = 86;
let celcius = fahrenheitToCel(farenheit);
console.log('Celcius is:', celcius, 'degree');