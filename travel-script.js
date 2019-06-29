var countriesArray = [
    {countryName: 'Egypt', price: 10},
    {countryName: 'Turkey', price: 13},
    {countryName: 'Bulgaria', price: 11},
    {countryName: 'Greece', price: 9}
];


function calculatePrice(country, countOfPeople, numberOfDays) {
    var tax = 0;
    var priceWithoutTax = country.price * countOfPeople * numberOfDays;

    if (numberOfDays > 10) {
        tax = (priceWithoutTax * 10) / 100;
    }

    return  priceWithoutTax - tax;
}

document.getElementById('travelSubmitButton').addEventListener('click', function () {
    var countryName = document.querySelector('input[name="country"]:checked').value;
    var countOfPeople = parseInt(document.querySelector('input[name="numberOfPeople"]:checked').value);
    var numberOfDays = parseInt(document.getElementById('selectNumberOfDays').value);
    var country = countriesArray.find(element => element.countryName === countryName);
    var price = calculatePrice(country, countOfPeople, numberOfDays);

    document.getElementById('total').innerHTML = 'Total price:' + price;
});