# js执行栈与执行上下文理解

首先将全局代码引入封装为执行上下文并放入执行栈底部，当遇到函数被调用时开始将函数代码封装为执行上下文放入执行栈，调用结束以后根据后进先出的规则一次释放。 举个例子``

 

```
let a = 'Hello World!';



function first() {



  console.log('Inside first function');



  second();



  console.log('Again inside first function');



}



function second() {



  console.log('Inside second function');



}



first();



console.log('Inside Global Execution Context');
```

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZS5kYW1vbmFyZS5jbi9zdGFjay5wbmc?x-oss-process=image/format,png)

代码解析：

```
let a = 20;



const b = 30;



var c ;



function multiply(e,f){



 var g = 20;



 return e * f * g;



}



c = multiply(20,30);
```

 

1、代码开始运行，创建一个全局执行上下文来执行全局代码
![在这里插入图片描述](https://img-blog.csdnimg.cn/20201101185228142.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hvbmd6eGg=,size_16,color_FFFFFF,t_70#pic_center)

2、执行阶段，变量赋值完成


![在这里插入图片描述](https://img-blog.csdnimg.cn/20201101185250131.png#pic_center)

3、创建一个新的函数执行上下文来执行该函数代码

 

![在这里插入图片描述](https://img-blog.csdnimg.cn/20201101185300424.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hvbmd6eGg=,size_16,color_FFFFFF,t_70#pic_center)

4、函数变量赋值完成，执行上下文进入执行阶段


![在这里插入图片描述](https://img-blog.csdnimg.cn/20201101185313291.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2hvbmd6eGg=,size_16,color_FFFFFF,t_70#pic_center)

5、该函数执行完后，返回值被储存在c中。全局词法环境更新，全局代码执行结束，程序结束

 