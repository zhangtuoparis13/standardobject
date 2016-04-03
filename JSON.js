/**
 * Created by TBtuo on 03/04/16.
 */
//JSON是JavaScript Object Notation的缩写，它是一种数据交换格式
/*
* 在JSON中，一共就这么几种数据类型：

 number：和JavaScript的number完全一致；
 boolean：就是JavaScript的true或false；
 string：就是JavaScript的string；
 null：就是JavaScript的null；
 array：就是JavaScript的Array表示方式——[]；
 object：就是JavaScript的{ ... }表示方式。
 以及上面的任意组合。

 并且，JSON还定死了字符集必须是UTF-8，表示多语言就没有问题了。为了统一解析，JSON的字符串规定必须用双引号""，Object的键也必须用双引号""。

 由于JSON非常简单，很快就风靡Web世界，并且成为ECMA标准。几乎所有编程语言都有解析JSON的库，而在JavaScript中，我们可以直接使用JSON，因为JavaScript内置了JSON的解析。

 把任何JavaScript对象变成JSON，就是把这个对象序列化成一个JSON格式的字符串，这样才能够通过网络传递给其他计算机。

 如果我们收到一个JSON格式的字符串，只需要把它反序列化成一个JavaScript对象，就可以在JavaScript中直接使用这个对象了。

 */

/*序列化 : 让我们先把小明这个对象序列化 JSON 格式的字符串 */

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

var a = JSON.stringify(xiaoming,null,' '); //要输出得好看一些，可以加上参数，按缩进输出：
alert(a);

var b = JSON.stringify(xiaoming,['name','skills',' ']);
alert(b);  //第二个参数用于控制如何筛选对象的键值，如果我们只想输出指定的属性，可以传入Array

//还可以传入一个函数,这样对象的每个键值都会被函数先处理:

function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}

alert(JSON.stringify(xiaoming, convert, '  '));

/*如果我们还想要精确控制如何序列化小明，可以给xiaoming定义一个toJSON()的方法，直接返回JSON应该序列化的数据：

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};

JSON.stringify(xiaoming); // '{"Name":"小明","Age":14}'*/

//反序列化
// 拿到一个 JSON 格式的字符串,  我们直接用 JSON.parse() 把它变成一个 js 对象:

var k = JSON.parse('[1,2,3,true]');
alert(k);

/*
* 反序列化

 拿到一个JSON格式的字符串，我们直接用JSON.parse()把它变成一个JavaScript对象：

 JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]
 JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
 JSON.parse('true'); // true
 JSON.parse('123.45'); // 123.45
 JSON.parse()还可以接收一个函数，用来转换解析出的属性：

 JSON.parse('{"name":"小明","age":14}', function (key, value) {
 // 把number * 2:
 if (key === 'name') {
 return value + '同学';
 }
 return value;
 }); // Object {name: '小明同学', age: 14}
 在JavaScript中使用JSON，就是这么简单！*/