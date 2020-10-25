//作业2
// 假设有三个数a、b、c，求这三个数的平均值的函数为:
// function mean(a, b,c){
// return (a+b+C)/ 3;
// ·1)如果要求任意个数的数字的平均值，该如何改进这个函数呢?请编写改进的
// mean1()函数,让该函数可以计算任意个数的数字的平均值。
// 提示:使用扩展运算符
// ·2）请编写函数mean2()，使用数组的reduce()函数改写mean1()，让代码更 佳精简。
// .3）请在第二步的基础上编写函数mean3() ，实现只对数组中的偶数求平均值。
//提示:使用回调函数和map()。

//work2
//(1)
function mean1(){
    var sum=0,len=arguments.length;
    for(var i=0;i<len;i++){
    sum=sum+arguments[i];}
    return sum/len;
    }
    var A=mean1(1,2,3,4,5);
    console.log(A);

//(2)
function mean2(nums) {
    return nums.reduce((a, b) => a + b) / nums.length;
}
console.log(mean2([5,5,8,4,5]))
//(3)



