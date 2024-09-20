function formatCurrency(number) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
}
console.log(formatCurrency(5000))

function transformArrayToObject(array) {
    return Object.fromEntries(array);
}
 
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function convertToCamelCase(word) {
    return word.split(' ').map(function(word,index){
        if(index == 0){
          return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join('');
}

module.exports = { formatCurrency, transformArrayToObject, capitalizeFirstLetter, convertToCamelCase}
