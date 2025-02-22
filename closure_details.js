// 🔍 JavaScript Closure – A to Z বাংলা ব্যাখ্যা
// Closure হলো JavaScript-এর অন্যতম গুরুত্বপূর্ণ একটি কনসেপ্ট, যা অনেক সময় বুঝতে কঠিন মনে হয়। কিন্তু যদি বুঝতে পারো, তাহলে JavaScript-এর স্কোপ (Scope) এবং ফাংশনের পাওয়ার বুঝতে পারবে। 🚀

// 📌 Closure কী?
// Closure হল এমন একটি ফাংশন, যেটি তার প্যারেন্ট ফাংশনের ভেরিয়েবল ও স্কোপ অ্যাক্সেস করতে পারে, এমনকি প্যারেন্ট ফাংশন এক্সিকিউশন শেষ হয়ে গেলেও!

// 📌 সহজ ভাষায় Closure:
// ✅ একটি ফাংশন তার বাইরে থাকা ভেরিয়েবল অ্যাক্সেস করতে পারলে সেটাকে Closure বলে।
// ✅ যদি কোনো ফাংশন অন্য একটি ফাংশনের ভেতরে থাকে, তাহলে ইননার ফাংশন আউটার ফাংশনের ভেরিয়েবল ব্যবহার করতে পারে।

// 🎯 Closure-এর সহজ উদাহরণ:

function outerFunction() {
    let outerVariable = "আমি বাইরে আছি!"; // আউটার ফাংশনের ভেরিয়েবল

    function innerFunction() {
        console.log(outerVariable); // ইননার ফাংশন আউটার ফাংশনের ভেরিয়েবল ব্যবহার করছে
    }

    return innerFunction;
}

const myClosure = outerFunction(); // outerFunction রান হলেও তার ভেতরের ডাটা মেমোরিতে থাকে
myClosure(); // Output: "আমি বাইরে আছি!"
// 👉 এখানে innerFunction() আউটার ফাংশনের outerVariable ব্যবহার করছে, যদিও outerFunction() এক্সিকিউশন শেষ হয়ে গেছে!
// 👉 এটাই Closure! 😲

// 📌 কেন Closure দরকার হয়?
// 🔹 ডাটা প্রাইভেট রাখতে: কিছু ভ্যালু private রেখে সেটাকে protect করা যায়।
// 🔹 State Maintain করতে: যখন চাই যে একটি ভ্যারিয়েবল মুছে না যাক, তখন ব্যবহার করা হয়।
// 🔹 JavaScript-এর Callbacks, Event Listeners, SetTimeout এ ব্যবহৃত হয়।

// 🎯 Real-Life Example (Closure দিয়ে Counter বানানো)

function counter() {
    let count = 0; // Private variable

    return function () {
        count++;
        console.log(`Current Count: ${count}`);
    };
}

const increment = counter();
increment(); // Output: Current Count: 1
increment(); // Output: Current Count: 2
increment(); // Output: Current Count: 3
// 👉 এখানে count ভেরিয়েবল বাইরে থেকে এক্সেস করা যাচ্ছে না, কিন্তু increment() কল করলে তা আপডেট হচ্ছে!
// 👉 এটিই Closure-এর পাওয়ার! 🚀

// 🔍 Closure-এর ব্যবহার কোথায় হয়?
// ✅ Module Pattern (Private Data Store করার জন্য)
// ✅ Event Listeners (ডাটা ধরে রাখার জন্য)
// ✅ setTimeout & setInterval-এর মধ্যে
// ✅ Factory Functions

// 📌 Closure + setTimeout() Example:

function delayedMessage(message, delay) {
    return function () {
        setTimeout(() => {
            console.log(message);
        }, delay);
    };
}

const showMessage = delayedMessage("Hello, Closure!", 2000);
showMessage(); // 2 সেকেন্ড পরে দেখাবে: "Hello, Closure!"
// 👉 এখানে Closure message কে ধরে রেখেছে, যদিও delayedMessage() এক্সিকিউশন শেষ হয়ে গেছে!

// 🎯 Closure নিয়ে কিছু Interview Questions:
// 1️⃣ Closure কী? এবং এটি কীভাবে কাজ করে?
// 2️⃣ Closure-এর মাধ্যমে কীভাবে ডাটা প্রাইভেট রাখা যায়?
// 3️⃣ Closure কোথায় ব্যবহার করা হয়?
// 4️⃣ Closure কীভাবে Memory Leak-এর কারণ হতে পারে?

// 🔥 শেষ কথা (সংক্ষেপে)
// ✅ Closure হলো ইননার ফাংশন, যা তার প্যারেন্ট ফাংশনের ভেরিয়েবল এক্সেস করতে পারে, এমনকি প্যারেন্ট ফাংশন শেষ হলেও!
// ✅ এটি ডাটা প্রাইভেট রাখতে, State Maintain করতে এবং অনেক জটিল সমস্যার সমাধান করতে সাহায্য করে।
// ✅ JavaScript-এর Advanced Concepts বোঝার জন্য এটি খুবই গুরুত্বপূর্ণ!

// 👉 Closure বুঝতে পারলে JavaScript-এর Functional Programming অনেক ভালোভাবে বুঝতে পারবে!