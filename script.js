//create element

var head = document.createElement('h1')
head.innerHTML='Hello B39!!!'
document.body.append(head)

var head1 = document.createElement('h2')
head1.innerText='Hello Guvians!!!'
document.body.append(head1)

//setattributes

var division = document.createElement('div')
division.innerHTML='Hello good morning!!!'
division.setAttribute('class','bar1')
document.body.append(division)

var para = document.createElement('p')
para.innerHTML='Hi welcome!!!'
para.setAttribute('class','bar')
document.body.append(para)

//classlist

var span = document.createElement('span')
span.innerHTML='today is DOM day1!!!'
span.classList.add('main','main1','main2')
document.body.append(span)

