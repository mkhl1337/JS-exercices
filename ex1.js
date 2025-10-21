function convertKMtoMiles(km) {
  return Number((km * 0.62).toFixed(2));
}
km = Number(prompt("Donner la valeur en KM !"));
let miles = convertKMtoMiles(km);
alert("La valeur converti en miles est egale a " + miles);
