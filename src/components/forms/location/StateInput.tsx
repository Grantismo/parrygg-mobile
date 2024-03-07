import React, { forwardRef, useEffect, useState } from "react"

import { Control } from "react-hook-form";
import { LocationClient } from "../../../libs/location";
import DropdownInput, { Item } from "../DropdownInput";

const LOCATION_CLIENT = new LocationClient();

interface Props {
    label: string
    countryIso?: string
    required?: boolean
    onChange?: (value: any) => void

    // For react-hook-form register
    name: string
    control: Control<any>
}

const StateInput = forwardRef<any, Props>(({countryIso, ...props}: Props, ref) => {

    const [states, setStates] = useState<Item[]>([])

    if(countryIso && !states.length) {
      LOCATION_CLIENT.getStates(countryIso).then((data) => {
        setStates(data.map(d => {return {label: d.name, value: d.iso2}}))
      })
    }

    return <DropdownInput ref={ref} data={states} placeholder="Colorado" {...props} />
  })

  export default StateInput;