var fs = require("fs"); //require module ชื่อ fs
fs.appendFile('myfile1.txt', 'Create or update by fs.appendfile', function (err) { 
    if (err) throw err;
    console.log('saved');
}) //สร้างไฟล์ชื่อ myfile1.txt พร้อมเขียนข้อความ Create or update by fs.appendfile และมี callback function มี parameter ชื่อ err 
//ถ้าเกิด error ให้ โยนไปที่ runtime
//ถ้ามีไฟล์ชื่อนั้นอยู่แล้วมันจะทำการต่อท้ายไฟล์นั้นด้วย text ที่กำหนด

// fs.writeFile('myfile1.txt', 'Create or update by fs.appendfile', function (err) { 
//     if (err) throw err;
//     console.log('saved');
// }) //เขียนทับเลยไม่ใช่การต่อท้าย ถ้าไม่มีไฟล์ชื่อนั้นอยู่มันจะสร้างก่อนและเขียน text 


// fs.unlink('myfile2.txt', function (err) { 
//     if (err) throw err;
//     console.log('saved');
// }) //ลบไฟล์ออก

// fs.rename('myfile1.txt','myfile.txt', function (err) { 
//     if (err) throw err;
//     console.log('saved');
// }) เปลี่ยนชื่อ

// console.log("-------------------");
// var data = fs.readFileSync("myfile.txt"); //อ่านไฟล์
// console.log(data.toString()); //แปลงเป็น string เพราะค่าที่ไได้ออกมามันเป็น object
// console.log("-------------------");

console.log("-------------------");
fs.readFile("myfile.txt", (err, data) => { 
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("----------------------");
//เป็นการ readFile อีกแบบ เป็น non-blocking io คือ ตัวข้างล่างมันจะไม่รอให้ readFile เสร็จ มันจะทำก่อนเลย ไม่ได้ประมวลผลแบบเรียงบรรทัด ถ้าคำสั่งไหนช้ากว่าก็จะแสดงผลทีหลัง
