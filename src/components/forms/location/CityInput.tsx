import React, { useEffect, useState } from "react"

import { Control } from "react-hook-form";
import { LocationClient } from "../../../libs/location";
import DropdownInput, { Item } from "../DropdownInput";

const LOCATION_CLIENT = new LocationClient();

interface Props {
    label: string
    countryIso?: string
    stateIso?: string
    required?: boolean

    // For react-hook-form register
    name: string
    control: Control<any>
}

const CityInput = ({countryIso, stateIso, ...props}: Props) => {
    const [cities, setCities] = useState<Item[]>([])

    useEffect(() => {
      if(!countryIso || !stateIso) {
        return
      }
      
      if(!cities.length) {
        LOCATION_CLIENT.getCities(countryIso, stateIso).then((data) => {
          const cities = data.map(d => {return {label: d.name, value: d.name}})
          setCities(cities)
        })
      }
    }, [cities, countryIso, stateIso])
  
    return <DropdownInput data={cities} placeholder="Denver" {...props} />
  }

  export default CityInput;