# CheckoutLink

Checkout link data.

## Example Usage

```typescript
import { CheckoutLink } from "@polar-sh/sdk/models/components/checkoutlink.js";

let value: CheckoutLink = {
  id: "<value>",
  createdAt: new Date("2025-09-22T20:17:02.127Z"),
  modifiedAt: new Date("2023-01-22T14:32:59.611Z"),
  trialInterval: "year",
  trialIntervalCount: 826,
  metadata: {
    "key": true,
  },
  paymentProcessor: "stripe",
  clientSecret: "<value>",
  successUrl: "https://shallow-icebreaker.net/",
  label: "<value>",
  allowDiscountCodes: true,
  requireBillingAddress: true,
  discountId: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [
    {
      metadata: {
        "key": 286697,
      },
      id: "<value>",
      createdAt: new Date("2024-08-04T15:56:23.244Z"),
      modifiedAt: new Date("2025-07-13T16:36:37.984Z"),
      trialInterval: "week",
      trialIntervalCount: 560922,
      name: "<value>",
      description:
        "roughly lest sternly while metabolise hence who lasting wee spherical",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2023-09-04T12:35:29.724Z"),
          modifiedAt: new Date("2024-05-27T08:53:02.662Z"),
          type: "downloadables",
          description: "cautiously pike true considering superior about",
          selectable: true,
          deletable: false,
          organizationId: "<value>",
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/sbin",
          mimeType: "<value>",
          size: 498972,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-09-13T15:53:42.753Z"),
          version: "<value>",
          service: "product_media",
          isUploaded: false,
          createdAt: new Date("2024-08-06T00:24:30.544Z"),
          sizeReadable: "<value>",
          publicUrl: "https://enchanting-bell.net/",
        },
      ],
    },
  ],
  discount: {
    duration: "repeating",
    type: "fixed",
    basisPoints: 656243,
    createdAt: new Date("2025-07-30T08:08:42.784Z"),
    modifiedAt: new Date("2024-11-03T14:01:12.012Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2023-09-11T21:19:06.321Z"),
    endsAt: new Date("2024-02-22T15:23:18.774Z"),
    maxRedemptions: 850103,
    redemptionsCount: 847946,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  url: "https://proper-fat.info",
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