import React, { forwardRef, useEffect, useState } from "react";
import { Control } from "react-hook-form";

import { LocationClient } from "../../../libs/location";
import DropdownInput, { Item } from "../DropdownInput";

const LOCATION_CLIENT = new LocationClient();

interface Props {
  label: string;
  countryIso?: string;
  stateIso?: string;
  required?: boolean;
  onChange?: (value: any) => void;

  // For react-hook-form register
  name: string;
  control: Control<any>;
}

const CityInput = forwardRef<any, Props>(
  ({ countryIso, stateIso, ...props }: Props, ref) => {
    const [cities, setCities] = useState<Item[]>([]);

    useEffect(() => {
      if (!countryIso || !stateIso) {
        return;
      }

      if (!cities.length) {
        LOCATION_CLIENT.getCities(countryIso, stateIso).then((data) => {
          setCities(
            data.map((d) => {
              return { label: d.name, value: d.name };
            }),
          );
        });
      }
    }, [cities, countryIso, stateIso]);

    return (
      <DropdownInput ref={ref} data={cities} placeholder="Denver" {...props} />
    );
  },
);

export default CityInput;
