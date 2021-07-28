# Задание 1.
Имеется ряд из N лампочек, которые пронумерованы от 1 до N. Изначально ни одна из лампочек не горит. Далее происходит K последовательных линейных инверсий этого ряда ламп. Под линейной инверсией понимается инверсия каждой P-й лампочки в ряде. Например, если P=3, то произойдет инверсия 3й, 6й, 9й и т.д. лампочек.

*Требуется определить*: сколько горящих лампочек останется после реализации всех заданных линейных инверсий?

*Требуется* написать 2 способа: оптимальный по времени и оптимальный по памяти. Tакже написать дополнительную функцию ```benchmark```, которая принимает функцию (```bulbs1```/```bulbs2```), вызывает ее и замеряет потраченное время на работу функции, а также память, которую эта функция использовала.
* ### Input
```js
N: number // amount of bulbs
P: number[] // array of P's 
```


* ### Output

```js 
amout: number // amount of burning light bulb 
```


* ### **Example**
```js
// Ex. 1
bulbs(20, [2,3,8]); // returns 8

// Ex. 2
bulbs(172, [19 2 7 13 40 23 16 1 45 9]) // returns 99
```

# Задание 2
В романе N глав. В i-той главе i страниц. Требуется издать роман в K томах так, чтобы объем самого «толстого» тома был минимален. В каждом томе главы располагаются по порядку своих номеров.

*Требуется* написать программу, которая найдет количество страниц в самом «толстом» томе.

* ### Input
```js
pages: number[] // array with amount of pages for any chapter
K: number // amount of tom
```

* ### Output
```js
amountOfPages: number; // amount of pages in the most biggest one
```

* ### **Example**

```jsx
// Ex. 1
generateVolumes([1 2 1], 2) // returns:    3

// Ex. 2
generateVolumes([1 2 1 1], 3) // returns: 2
```

# Задание 3
Нужно сделать N копий одного документа. В нашем распоряжении две копировальные машины, одна из которых копирует лист за х секунд, вторая – за y секунд. (Разрешается использовать как один ксерокс, так и оба одновременно. Можно копировать не только с оригинала, но и с копии.) Помогите ей выяснить, какое минимальное время для этого потребуется.

* ### Input
```js
N: number; // amount of copies
x: number; // coping speed for 1 copier
y: number; // coping speed for 2 copier
```

* ### Output
```js
seconds: number; // amount of seconds needed to do the job
```

* ### **Examples**

```jsx
// Ex. 1
copy(4, 1, 1) // 3

// Ex. 2
copy(5, 1, 2) // 4
```

# Задание 4
Магический квадрат - это квадратная таблица N x N, заполненная N^2 числами от 1 до N^2 таким образом, что сумма чисел в каждой строке, каждом столбце и на обеих диагоналях одинакова. При этом числа в таблице не должны повторяться и каждое из чисел от 1 до N2 должно в ней присутствовать.

*Требуется* написать программу, которая по заданному N строит магический квадрат.

* ### Input
```js
N: number;
```

* ### Output
```js
magicSquare: number[][];
```

* ### **Example**
```jsx
// Ex. 1
genMagicSquare(1); // [1]

// Ex. 2
genMagicSquare(2); // Impossible

// Ex. 3
genMagicSquare(3);
/* [
    [4, 9, 2],
    [3, 5, 7],
  [8, 1, 6]
] */
```

# Задание 5
Компания из N человек собирается пойти в байдарочный поход, i-ый человек характеризуется своей массой Mi кг. На лодочной базе имеется в наличии неограниченное количество одинаковых байдарок. Каждая байдарка может вмещать одного или двух людей. Байдарки имеют грузоподъемность D кг.

Какое наименьшее количество байдарок придется арендовать компании, чтобы всем отправиться в поход?

* ### Input
```js
N: number[]; // array of people weights
D: number; // array of people weights
```

* ### Output
```js
kayakAmount: number;
```

* ### **Example**

```jsx
// Ex. 1
findKayakAmount([50, 74, 60, 82], 135);

// Ex. 2
findKayakAmount([50, 120, 74, 60, 100, 82], 135);
```