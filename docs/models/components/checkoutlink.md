# CheckoutLink

Checkout link data.

## Example Usage

```typescript
import { CheckoutLink } from "@polar-sh/sdk/models/components/checkoutlink.js";

let value: CheckoutLink = {
  createdAt: new Date("2025-09-22T20:17:02.127Z"),
  modifiedAt: new Date("2025-06-15T14:45:41.089Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  paymentProcessor: "stripe",
  clientSecret: "<value>",
  successUrl: "https://tight-flint.com",
  label: "<value>",
  allowDiscountCodes: false,
  requireBillingAddress: false,
  discountId: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [
    {
      metadata: {
        "key": false,
      },
      createdAt: new Date("2025-07-28T12:33:37.944Z"),
      modifiedAt: new Date("2023-01-31T11:26:23.487Z"),
      id: "<value>",
      name: "<value>",
      description: "delight quaff rich whether",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-05-05T19:13:16.573Z"),
          modifiedAt: new Date("2024-04-04T07:11:33.399Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 802874,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2023-10-20T16:22:52.380Z"),
          modifiedAt: new Date("2024-02-03T01:35:38.188Z"),
          type: "meter_credit",
          description: "where whoa typewriter overspend",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/usr/bin",
          mimeType: "<value>",
          size: 393292,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-12-13T07:30:36.181Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-05-05T13:13:36.441Z"),
          sizeReadable: "<value>",
          publicUrl: "https://right-farmer.name",
        },
      ],
    },
  ],
  discount: {
    duration: "forever",
    type: "fixed",
    basisPoints: 728135,
    createdAt: new Date("2023-02-11T03:58:30.027Z"),
    modifiedAt: new Date("2024-10-28T19:28:35.798Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2025-11-19T13:04:03.324Z"),
    endsAt: new Date("2023-12-07T08:30:49.932Z"),
    maxRedemptions: 28503,
    redemptionsCount: 186745,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  url: "https://beneficial-slipper.com",
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          | Example                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | Creation timestamp of the object.                                                                                                                                                                    |                                                                                                                                                                                                      |
| `modifiedAt`                                                                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | Last modification timestamp of the object.                                                                                                                                                           |                                                                                                                                                                                                      |
| `id`                                                                                                                                                                                                 | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | The ID of the object.                                                                                                                                                                                |                                                                                                                                                                                                      |
| `metadata`                                                                                                                                                                                           | Record<string, *components.CheckoutLinkMetadata*>                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |                                                                                                                                                                                                      |
| `paymentProcessor`                                                                                                                                                                                   | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |                                                                                                                                                                                                      |
| `clientSecret`                                                                                                                                                                                       | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Client secret used to access the checkout link.                                                                                                                                                      |                                                                                                                                                                                                      |
| `successUrl`                                                                                                                                                                                         | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | URL where the customer will be redirected after a successful payment.                                                                                                                                |                                                                                                                                                                                                      |
| `label`                                                                                                                                                                                              | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Optional label to distinguish links internally                                                                                                                                                       |                                                                                                                                                                                                      |
| `allowDiscountCodes`                                                                                                                                                                                 | *boolean*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                   | Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.                           |                                                                                                                                                                                                      |
| `requireBillingAddress`                                                                                                                                                                              | *boolean*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                   | Whether to require the customer to fill their full billing address, instead of just the country. Customers in the US will always be required to fill their full address, regardless of this setting. |                                                                                                                                                                                                      |
| `discountId`                                                                                                                                                                                         | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored.                                                             |                                                                                                                                                                                                      |
| `organizationId`                                                                                                                                                                                     | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | The organization ID.                                                                                                                                                                                 | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                                                                                                                 |
| `products`                                                                                                                                                                                           | [components.CheckoutLinkProduct](../../models/components/checkoutlinkproduct.md)[]                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |                                                                                                                                                                                                      |
| `discount`                                                                                                                                                                                           | *components.CheckoutLinkDiscount*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |                                                                                                                                                                                                      |
| `url`                                                                                                                                                                                                | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |                                                                                                                                                                                                      |