# CheckoutLink

Checkout link data.

## Example Usage

```typescript
import { CheckoutLink } from "@polar-sh/sdk/models/components/checkoutlink.js";

let value: CheckoutLink = {
  id: "<value>",
  createdAt: new Date("2026-09-22T20:17:02.127Z"),
  modifiedAt: new Date("2024-01-22T14:32:59.611Z"),
  trialInterval: "year",
  trialIntervalCount: 826,
  metadata: {
    "key": true,
  },
  paymentProcessor: "stripe",
  clientSecret: "<value>",
  successUrl: "https://shallow-icebreaker.net/",
  returnUrl: "https://educated-newsprint.name/",
  label: "<value>",
  allowDiscountCodes: false,
  requireBillingAddress: false,
  discountId: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [
    {
      metadata: {
        "key": 613672,
      },
      id: "<value>",
      createdAt: new Date("2026-10-06T03:53:52.482Z"),
      modifiedAt: new Date("2026-07-25T10:57:55.124Z"),
      trialInterval: "month",
      trialIntervalCount: 395496,
      name: "<value>",
      description: "knottily diligent where whoa",
      visibility: "draft",
      recurringInterval: "day",
      recurringIntervalCount: 375186,
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [],
      benefits: [],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/private/tmp",
          mimeType: "<value>",
          size: 16733,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2026-12-06T15:49:55.309Z"),
          version: "<value>",
          service: "product_media",
          isUploaded: true,
          createdAt: new Date("2025-07-11T05:48:37.631Z"),
          sizeReadable: "<value>",
          publicUrl: "https://impressionable-viability.com/",
        },
      ],
    },
  ],
  discount: {
    duration: "repeating",
    durationInMonths: 586438,
    type: "percentage",
    basisPoints: 1000,
    createdAt: new Date("2025-03-07T01:08:45.474Z"),
    modifiedAt: new Date("2024-05-04T13:13:36.441Z"),
    id: "<value>",
    metadata: {
      "key": 3184.07,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2025-01-05T00:06:56.743Z"),
    endsAt: new Date("2026-03-09T00:52:07.052Z"),
    maxRedemptions: null,
    redemptionsCount: 608405,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  url: "https://whispered-experience.com",
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          | Example                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                                                                                                 | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | The ID of the object.                                                                                                                                                                                |                                                                                                                                                                                                      |
| `createdAt`                                                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | Creation timestamp of the object.                                                                                                                                                                    |                                                                                                                                                                                                      |
| `modifiedAt`                                                                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | Last modification timestamp of the object.                                                                                                                                                           |                                                                                                                                                                                                      |
| `trialInterval`                                                                                                                                                                                      | [components.TrialInterval](../../models/components/trialinterval.md)                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                   | The interval unit for the trial period.                                                                                                                                                              |                                                                                                                                                                                                      |
| `trialIntervalCount`                                                                                                                                                                                 | *number*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | The number of interval units for the trial period.                                                                                                                                                   |                                                                                                                                                                                                      |
| `metadata`                                                                                                                                                                                           | Record<string, *components.MetadataOutputType*>                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |                                                                                                                                                                                                      |
| `paymentProcessor`                                                                                                                                                                                   | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |                                                                                                                                                                                                      |
| `clientSecret`                                                                                                                                                                                       | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Client secret used to access the checkout link.                                                                                                                                                      |                                                                                                                                                                                                      |
| `successUrl`                                                                                                                                                                                         | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | URL where the customer will be redirected after a successful payment.                                                                                                                                |                                                                                                                                                                                                      |
| `returnUrl`                                                                                                                                                                                          | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | When set, a back button will be shown in the checkout to return to this URL.                                                                                                                         |                                                                                                                                                                                                      |
| `label`                                                                                                                                                                                              | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Optional label to distinguish links internally                                                                                                                                                       |                                                                                                                                                                                                      |
| `allowDiscountCodes`                                                                                                                                                                                 | *boolean*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                   | Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.                           |                                                                                                                                                                                                      |
| `requireBillingAddress`                                                                                                                                                                              | *boolean*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                   | Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting. |                                                                                                                                                                                                      |
| `discountId`                                                                                                                                                                                         | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored.                                                             |                                                                                                                                                                                                      |
| `organizationId`                                                                                                                                                                                     | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | The organization ID.                                                                                                                                                                                 | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                                                                                                                 |
| `products`                                                                                                                                                                                           | [components.CheckoutLinkProduct](../../models/components/checkoutlinkproduct.md)[]                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |                                                                                                                                                                                                      |
| `discount`                                                                                                                                                                                           | *components.CheckoutLinkDiscount*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |                                                                                                                                                                                                      |
| `url`                                                                                                                                                                                                | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |                                                                                                                                                                                                      |