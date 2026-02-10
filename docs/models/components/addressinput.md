# AddressInput

## Example Usage

```typescript
import { AddressInput } from "@polar-sh/sdk/models/components/addressinput.js";

let value: AddressInput = {
  country: "US",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `line1`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `line2`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `postalCode`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `city`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `state`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |
| `country`                                                                      | [components.CountryAlpha2Input](../../models/components/countryalpha2input.md) | :heavy_check_mark:                                                             | N/A                                                                            | **Example 1:** US<br/>**Example 2:** SE<br/>**Example 3:** FR                  |