// তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে 
// Formula = (°C × 9/5) + 32

function celciusToFar(input) {
    let cel = (input * 9 / 5) + 32;
    return cel;
}
let celcius = 30;
let farenheit = celciusToFar(celcius);
console.log('Farenheit is:', farenheit);