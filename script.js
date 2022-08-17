let discount = prompt('Какая скидка?')

let totalSale = Number

let total = Number

let max = Object

let min = Object

let average = Number

let arr = [

   {

      name: 'Milk',

      price: 3.25

   },

   {

      name: 'Coffee',

      price: 1.5

   },

   {

      name: 'Ice Cream',

      price: 7.85

   },

   {

      name: 'Tomatos',

      price: 4.14

   },

   {

      name: 'Onion',

      price: 2.25

   }

]

let arr_sale = []

const setup = (a) => {

   let temp_num = []

   for (let item of a) {
      temp_num.push(item.price)

      total = 0
      a.forEach((item) => {
         total += item.price
      })
      totalSale = total - (total / 100 * discount)

      arr_sale = arr.map((item) => {
         price_sale = item.price - (item.price / 100 * discount)
         return item = {
            name: item.name,
            sale_price: price_sale
         }
      })

      
      average = total / arr.length 
     
   }

   max = Math.max(...temp_num)
   min = Math.min(...temp_num)
   max = arr.find(item => item.price === max)
   min = arr.find(item => item.price === min)
}

setup(arr)
console.table(max);  /// 1 задание
console.table(min);  /// 2 задание
console.log('Общая цена без скидок ' + total + ' цент');  /// 3 задание
console.log('Общая цена со скидкой ' + totalSale + ' цент'); /// 4 задание
console.table(arr);
console.table(arr_sale); /// 5 задание
console.log('средняя цена всех продуктов ' + average); /// 6 задание

// 1. Сохранить самый дорогой товар в переменную`max`*
// 2. Сохранить самый дешевый товар в переменную`min`*
// 3. Сохранить общую цену без скидок в переменную`total`*
// 4. Сохранить общую цену со скидкой в переменную`totalSale`*
// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную `arr_sale`*
// 6. Сохранить в переменной`average` среднюю цену всех продуктов без скидок*
// * Писать весь код в функции `setup()`*
// ТРИ ОЦЕНКИ. ЧИСТОТА КОДА, ЛОГИКА РАБОТЫ, УНИКАЛЬНОСТЬ КОДА*


