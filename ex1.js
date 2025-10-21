function convertKMtoMiles(km) {
  return (km * 0.62);
}
km = Number(prompt("Donner la valeur en KM !"));
let miles = convertKMtoMiles(km);
alert("La valeur converti en miles est egale a " + miles.toFixed(2));
