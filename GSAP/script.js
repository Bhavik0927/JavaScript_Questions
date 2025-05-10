// gsap.to("#box",{
//     x:100,
//     rotate:360,
//     backgroundColor:"blue",
//     duration:2,
//     delay:1
// })

// gsap.from("#box",{
//     x:100,
//     rotate:360,
//     backgroundColor:"blue",
//     duration:2,
//     delay:1
// }) 

var t1 = gsap.timeline();

t1.to("#box1",{
    x:"450",
    rotate:360,
    scale:0.5,
    duration:2,
    delay:1
}) 
t1.to("#box2",{
    x:"450",
    rotate:360,
    scale:0.5,
    duration:2,
    delay:1
}) 
t1.to("#box3",{
    x:"450",
    rotate:360,
    scale:0.5,
    duration:2,
    delay:1
}) 