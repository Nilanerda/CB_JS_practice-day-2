var countriesArray = [
    {countryName: 'Egypt', price: 10},
    {countryName: 'Turkey', price: 13},
    {countryName: 'Bulgaria', price: 11},
    {countryName: 'Greece', price: 9}
];



document.getElementById('travelSubmitButton').addEventListener('submit', function () {
    var selectCountry = document.getElementsByName('country');
    var selectCountOfPeople = document.getElementsByName('numberOfPeople');
    var selectNumberOfDays = document.getElementById('selectNumberOfDays');
    var selectValuesNumberOfDays = selectNumberOfDays.options[selectNumberOfDays.selectedIndex].value;
});