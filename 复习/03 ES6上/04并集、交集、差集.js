// let arr1=[1,2,3,4]
// let arr2=[2,3,4,5]
// 并集:[1,2,3,4,5] 交集[2,3,4]  差集：A-B=[1] B-A=[5] 


// 并集
// let arr1=[1,2,3,4]
// let arr2=[2,3,4,5]
// function unino(arr1,arr2){
//     let s1=new Set(arr1)
//     let s2=new Set(arr2)
//     let s=new Set([...s1,...s2])
//     return [...s]
// }
// console.log(unino(arr1,arr2))//[ 1, 2, 3, 4, 5 ]

// ------------------交集 
// let arr1=[1,2,3,4]
// let arr2=[2,3,4,5]
// function intersection(arr1,arr2){
//     let s1=new Set(arr1)
//     let s2=new Set(arr2)
//    return [...s1].filter(item=>{
//       return s2.has(item)
//    })
// }
// console.log(intersection(arr1,arr2))//[ 2, 3, 4 ]

// --------------------差集
// let arr1=[1,2,3,4]
// let arr2=[2,3,4,5]
// function difference(arr1,arr2){
//     let s1=new Set(arr1)
//     let s2=new Set(arr2)
//     return [...s1].filter(item=>{
//         return !s2.has(item)
//     })
// }
// console.log(difference(arr1,arr2))//[ 1 ]

// let arr1=[1,2,3,4];
// let arr2=[3,5,6,7];
// function union(arr1,arr2){
//     let s1=new Set(arr1);
//     let s2=new Set(arr2);
//     let s=new Set([...s1,...s2])
//     return [...s]
// }
// console.log(union(arr1,arr2))//[ 1, 2, 3, 4, 5, 6, 7 ]

// let arr1=[1,2,3,4];
// let arr2=[3,5,6,7,8];
// function intersection(arr1,arr2){
//     let s1=new Set(arr1);
//     let s2=new Set(arr2);
//     return [...s1].filter(item=>{
//         return s2.has(item)
//     })
// }
// console.log(intersection(arr1,arr2))//[ 3 ]
