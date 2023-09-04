import { CarProps } from "@/types";

export async function fetchCars() {   
    const headers = {
		'X-RapidAPI-Key': '14fe1dcd2fmsh1fdcd5bcabb2646p1110f3jsn1108cf87a4fd',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	} 

    const response = await fetch(
        'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', 
        {
            headers: headers,
        }
    );

    const results = await response.json();

    return results;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const milieageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * milieageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}

export const generateCarUrlImageUrl = (car: CarProps, angle?: string) =>{}