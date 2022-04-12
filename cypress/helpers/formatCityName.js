export function formatCityName(cityName) {
    if (cityName.includes(",")) {
        return cityName.split(", ")[0];
    } else {
        return cityName;
    }
}