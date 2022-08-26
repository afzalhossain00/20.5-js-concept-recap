// ৩. কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে। 
function checkGrade(inputMark) {
    if (inputMark >= 80 && inputMark <= 100) {
        console.log('A+')
    }
    else {
        console.log('other grade');
    }
}

var mark = 90;
checkGrade(mark);
