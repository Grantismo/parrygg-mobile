import React, { useEffect, useState } from "react"

import { Control } from "react-hook-form";
import { LocationClient } from "../../../libs/location";
import DropdownInput, { Item } from "../DropdownInput";

const LOCATION_CLIENT = new LocationClient();

interface Props {
    label: string
    required?: boolean

    // For react-hook-form register
    name: string
    control: Control<any>
}

const CountryInput = (props: Props) => {
    const [countries, setCountries] = useState<Item[]>([])

    useEffect(() => {
      if(!countries.length) {
        LOCATION_CLIENT.getCountries().then((data) => {
          const countries = data.map(d => {return {label: d.name, value: d.iso2}})
          countries.unshift({label: "United States", value: "US"}, {label: "Canada", value: "CA"}, {label: "Mexico", value: "MX"})
          setCountries(countries)
        })
      }
    }, [countries])
  
    return <DropdownInput data={countries} placeholder="United States" {...props} />
  }

  export default CountryInput;