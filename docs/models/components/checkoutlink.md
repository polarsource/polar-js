# CheckoutLink

Checkout link data.

## Example Usage

```typescript
import { CheckoutLink } from "@polar-sh/sdk/models/components/checkoutlink.js";

let value: CheckoutLink = {
  createdAt: new Date("2023-12-02T16:16:28.830Z"),
  modifiedAt: new Date("2023-02-01T12:16:57.588Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  paymentProcessor: "stripe",
  clientSecret: "<value>",
  successUrl: "https://unused-numeracy.org/",
  label: "<value>",
  allowDiscountCodes: false,
  discountId: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [
    {
      createdAt: new Date("2024-10-13T01:17:52.314Z"),
      modifiedAt: new Date("2024-04-30T17:04:34.452Z"),
      id: "<value>",
      name: "<value>",
      description: "obvious but sizzle yippee honestly",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-11-08T09:27:04.733Z"),
          modifiedAt: new Date("2024-12-07T02:08:23.563Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 197633,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-03-11T21:55:16.742Z"),
          modifiedAt: new Date("2023-03-08T19:43:38.812Z"),
          id: "<value>",
          type: "custom",
          description: "odd heavy daddy iterate drat intently huzzah",
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
          path: "/media",
          mimeType: "<value>",
          size: 14614,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-06-14T01:48:27.572Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-11-28T22:17:24.181Z"),
          sizeReadable: "<value>",
          publicUrl: "https://reasonable-starboard.org/",
        },
      ],
    },
  ],
  discount: {
    duration: "repeating",
    type: "fixed",
    amount: 313386,
    currency: "Seychelles Rupee",
    createdAt: new Date("2024-02-08T14:10:26.713Z"),
    modifiedAt: new Date("2023-03-03T22:35:13.208Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2024-09-02T05:10:29.477Z"),
    endsAt: new Date("2024-05-24T22:12:19.386Z"),
    maxRedemptions: 413557,
    redemptionsCount: 628156,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  productId: "<value>",
  productPriceId: "<value>",
  product: {
    createdAt: new Date("2025-10-02T02:04:23.656Z"),
    modifiedAt: new Date("2024-04-05T19:46:16.265Z"),
    id: "<value>",
    name: "<value>",
    description: "oh outside slow mooch woot per",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-07-11T13:38:37.825Z"),
        modifiedAt: new Date("2024-05-09T19:50:13.724Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 61387,
        maximumAmount: 310149,
        presetAmount: 133739,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-05-29T02:01:29.899Z"),
        modifiedAt: new Date("2024-06-08T02:59:50.162Z"),
        id: "<value>",
        type: "custom",
        description: "closed blah crystallize fine",
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
        path: "/usr/X11R6",
        mimeType: "<value>",
        size: 709929,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-07-24T20:12:09.049Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-07-31T00:30:30.990Z"),
        sizeReadable: "<value>",
        publicUrl: "https://magnificent-squid.name",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2025-07-15T18:24:29.781Z"),
    modifiedAt: new Date("2023-02-22T16:35:37.079Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "year",
  },
  url: "https://squeaky-grouper.net",
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                | Example                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Creation timestamp of the object.                                                                                                                                          |                                                                                                                                                                            |
| `modifiedAt`                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Last modification timestamp of the object.                                                                                                                                 |                                                                                                                                                                            |
| `id`                                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The ID of the object.                                                                                                                                                      |                                                                                                                                                                            |
| `metadata`                                                                                                                                                                 | Record<string, *components.CheckoutLinkMetadata*>                                                                                                                          | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |                                                                                                                                                                            |
| `paymentProcessor`                                                                                                                                                         | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |                                                                                                                                                                            |
| `clientSecret`                                                                                                                                                             | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Client secret used to access the checkout link.                                                                                                                            |                                                                                                                                                                            |
| `successUrl`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | URL where the customer will be redirected after a successful payment.                                                                                                      |                                                                                                                                                                            |
| `label`                                                                                                                                                                    | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Optional label to distinguish links internally                                                                                                                             |                                                                                                                                                                            |
| `allowDiscountCodes`                                                                                                                                                       | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. |                                                                                                                                                                            |
| `discountId`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored.                                   |                                                                                                                                                                            |
| `organizationId`                                                                                                                                                           | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The organization ID.                                                                                                                                                       | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                                                                                       |
| `products`                                                                                                                                                                 | [components.CheckoutLinkProduct](../../models/components/checkoutlinkproduct.md)[]                                                                                         | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |                                                                                                                                                                            |
| `discount`                                                                                                                                                                 | *components.CheckoutLinkDiscount*                                                                                                                                          | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |                                                                                                                                                                            |
| ~~`productId`~~                                                                                                                                                            | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                    |                                                                                                                                                                            |
| ~~`productPriceId`~~                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                    |                                                                                                                                                                            |
| `product`                                                                                                                                                                  | [components.CheckoutLinkProduct](../../models/components/checkoutlinkproduct.md)                                                                                           | :heavy_check_mark:                                                                                                                                                         | Product data for a checkout link.                                                                                                                                          |                                                                                                                                                                            |
| ~~`productPrice`~~                                                                                                                                                         | *components.CheckoutLinkProductPrice*                                                                                                                                      | :heavy_check_mark:                                                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                    |                                                                                                                                                                            |
| `url`                                                                                                                                                                      | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |                                                                                                                                                                            |