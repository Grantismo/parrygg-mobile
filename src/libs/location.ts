const BASE_URL = "https://api.countrystatecity.in"

type CountryData = {
    id: string
    name: string
    iso2: string
}

type StateData = {
    id: string
    name: string
    iso2: string
}

type CityData = {
    id: string
    name: string
}
  
  
export class LocationClient {

    // https://countrystatecity.in/docs/api/all-countries/
    getCountries(): Promise<CountryData[]> {
        return this.fetch(`${BASE_URL}/v1/countries`)
    }

    // https://countrystatecity.in/docs/api/states-by-country/
    getStates(countryIso2: string): Promise<StateData[]> {
        return this.fetch(`${BASE_URL}/v1/countries/${countryIso2}/states`)
    }

    // https://countrystatecity.in/docs/api/cities-by-state-country/
    getCities(countryIso2: string, stateIso2: string): Promise<CityData[]> {
        return this.fetch(`${BASE_URL}/v1/countries/${countryIso2}/states/${stateIso2}/cities`)
    }

    private fetch(url: string) {
        const headers = new Headers();
        headers.append("X-CSCAPI-KEY", "ODdzdFBsMVU2Y1hZTTg5b0NwOFpCREh6N0VVdExGMGtwbTNmQzRKbg==");
        return fetch(url, {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        }).then(resp => resp.json())
    }
}