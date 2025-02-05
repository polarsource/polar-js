# CheckoutLink

Checkout link data.

## Example Usage

```typescript
import { CheckoutLink } from "@polar-sh/sdk/models/components/checkoutlink.js";

let value: CheckoutLink = {
  createdAt: new Date("2024-05-08T19:34:14.084Z"),
  modifiedAt: new Date("2024-05-18T15:37:41.330Z"),
  id: "<value>",
  metadata: {
    "key": 29923,
  },
  paymentProcessor: "stripe",
  clientSecret: "<value>",
  successUrl: "https://confused-adrenalin.name/",
  label: "<value>",
  allowDiscountCodes: false,
  productId: "<value>",
  productPriceId: "<value>",
  discountId: "<value>",
  product: {
    createdAt: new Date("2023-04-19T10:40:28.754Z"),
    modifiedAt: new Date("2023-06-12T15:14:18.032Z"),
    id: "<value>",
    name: "<value>",
    description: "eek swiftly seldom",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-08-29T03:30:52.625Z"),
        modifiedAt: new Date("2025-06-09T05:53:11.314Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 446595,
        maximumAmount: 5486,
        presetAmount: 218782,
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-12-11T02:58:19.413Z"),
        modifiedAt: new Date("2024-11-30T17:03:39.942Z"),
        id: "<value>",
        type: "custom",
        description: "intent swanling cauliflower",
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
        path: "/var",
        mimeType: "<value>",
        size: 5116,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-04-11T14:30:53.873Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-01-10T03:18:49.542Z"),
        sizeReadable: "<value>",
        publicUrl: "https://drab-utilization.info/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-12-13T23:25:27.070Z"),
    modifiedAt: new Date("2024-12-01T20:18:43.840Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "month",
  },
  discount: {
    duration: "once",
    durationInMonths: 788333,
    type: "fixed",
    amount: 39617,
    currency: "East Caribbean Dollar",
    createdAt: new Date("2024-06-28T15:00:15.453Z"),
    modifiedAt: new Date("2024-06-16T15:00:21.981Z"),
    id: "<value>",
    metadata: {
      "key": 635148,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2024-03-16T02:10:36.135Z"),
    endsAt: new Date("2025-04-01T10:18:17.294Z"),
    maxRedemptions: 876583,
    redemptionsCount: 489731,
    organizationId: "<value>",
  },
  url: "https://french-optimal.name",
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Creation timestamp of the object.                                                                                                                                          |
| `modifiedAt`                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Last modification timestamp of the object.                                                                                                                                 |
| `id`                                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The ID of the object.                                                                                                                                                      |
| `metadata`                                                                                                                                                                 | Record<string, *components.CheckoutLinkMetadata*>                                                                                                                          | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `paymentProcessor`                                                                                                                                                         | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `clientSecret`                                                                                                                                                             | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Client secret used to access the checkout link.                                                                                                                            |
| `successUrl`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | URL where the customer will be redirected after a successful payment.                                                                                                      |
| `label`                                                                                                                                                                    | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Optional label to distinguish links internally                                                                                                                             |
| `allowDiscountCodes`                                                                                                                                                       | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. |
| `productId`                                                                                                                                                                | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the product to checkout.                                                                                                                                             |
| `productPriceId`                                                                                                                                                           | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the product price to checkout. First available price will be selected unless an explicit price ID is set.                                                            |
| `discountId`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored.                                   |
| `product`                                                                                                                                                                  | [components.CheckoutLinkProduct](../../models/components/checkoutlinkproduct.md)                                                                                           | :heavy_check_mark:                                                                                                                                                         | Product data for a checkout link.                                                                                                                                          |
| `productPrice`                                                                                                                                                             | *components.ProductPrice*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `discount`                                                                                                                                                                 | *components.CheckoutLinkDiscount*                                                                                                                                          | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `url`                                                                                                                                                                      | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |