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
          minimumAmount: 802874,
          maximumAmount: 267046,
          presetAmount: 363199,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2025-10-25T13:23:48.159Z"),
          modifiedAt: new Date("2023-07-31T19:33:10.922Z"),
          type: "downloadables",
          description:
            "repossess uselessly beneath immaculate bah verve boo atop sway lazy",
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
          path: "/etc/ppp",
          mimeType: "<value>",
          size: 415391,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-02-20T13:49:01.260Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-09-10T22:54:43.877Z"),
          sizeReadable: "<value>",
          publicUrl: "https://remorseful-disk.com",
        },
      ],
    },
  ],
  discount: {
    duration: "repeating",
    type: "fixed",
    amount: 762875,
    currency: "Zambian Kwacha",
    createdAt: new Date("2023-09-29T07:09:12.270Z"),
    modifiedAt: new Date("2025-07-21T01:26:11.210Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2025-08-28T21:24:01.892Z"),
    endsAt: new Date("2025-10-05T13:26:22.129Z"),
    maxRedemptions: 173452,
    redemptionsCount: 933673,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  url: "https://everlasting-teammate.info",
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