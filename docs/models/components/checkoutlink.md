# CheckoutLink

Checkout link data.

## Example Usage

```typescript
import { CheckoutLink } from "@polar-sh/sdk/models/components/checkoutlink.js";

let value: CheckoutLink = {
  createdAt: new Date("2023-03-31T12:19:36.052Z"),
  modifiedAt: new Date("2024-08-12T15:17:55.507Z"),
  id: "<value>",
  metadata: {
    "key": false,
  },
  paymentProcessor: "stripe",
  clientSecret: "<value>",
  successUrl: "https://different-oil.com/",
  label: "<value>",
  allowDiscountCodes: false,
  discountId: "<value>",
  organizationId: "<value>",
  products: [
    {
      createdAt: new Date("2025-10-12T04:07:38.112Z"),
      modifiedAt: new Date("2023-04-28T16:01:19.072Z"),
      id: "<value>",
      name: "<value>",
      description: "provided magnificent stealthily",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-02-25T15:09:11.481Z"),
          modifiedAt: new Date("2023-11-17T05:21:02.494Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 662228,
          maximumAmount: 413836,
          presetAmount: 154167,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-04-06T11:06:58.417Z"),
          modifiedAt: new Date("2024-06-07T05:46:10.028Z"),
          id: "<value>",
          type: "downloadables",
          description: "brandish mmm aha hmph whether",
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
          path: "/opt/lib",
          mimeType: "<value>",
          size: 700014,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-11-27T16:44:57.724Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-07-22T16:30:04.938Z"),
          sizeReadable: "<value>",
          publicUrl: "https://austere-flame.com",
        },
      ],
    },
  ],
  discount: {
    duration: "forever",
    type: "percentage",
    basisPoints: 966803,
    createdAt: new Date("2025-08-25T09:31:26.060Z"),
    modifiedAt: new Date("2024-09-13T23:01:39.762Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2024-01-24T23:45:29.745Z"),
    endsAt: new Date("2023-08-09T05:17:44.333Z"),
    maxRedemptions: 526045,
    redemptionsCount: 531209,
    organizationId: "<value>",
  },
  productId: "<value>",
  productPriceId: "<value>",
  product: {
    createdAt: new Date("2025-09-24T10:31:27.817Z"),
    modifiedAt: new Date("2023-01-07T06:53:10.517Z"),
    id: "<value>",
    name: "<value>",
    description: "who pillbox than duh implode quirkily including amidst fuss",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-07-12T07:15:18.514Z"),
        modifiedAt: new Date("2025-01-12T08:47:31.957Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-05-06T06:29:10.335Z"),
        modifiedAt: new Date("2025-03-24T10:54:04.717Z"),
        id: "<value>",
        type: "github_repository",
        description: "cross-contamination knife below lest lovable wriggler",
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
        path: "/tmp",
        mimeType: "<value>",
        size: 809794,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-03-01T08:59:39.201Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-01-17T14:16:00.694Z"),
        sizeReadable: "<value>",
        publicUrl: "https://confused-swordfish.com/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2025-02-25T19:59:04.406Z"),
    modifiedAt: new Date("2023-06-08T06:32:28.475Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    type: "recurring",
    recurringInterval: "month",
  },
  url: "https://quarterly-galoshes.name/",
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
| `discountId`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored.                                   |
| `organizationId`                                                                                                                                                           | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The organization ID.                                                                                                                                                       |
| `products`                                                                                                                                                                 | [components.CheckoutLinkProduct](../../models/components/checkoutlinkproduct.md)[]                                                                                         | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `discount`                                                                                                                                                                 | *components.CheckoutLinkDiscount*                                                                                                                                          | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| ~~`productId`~~                                                                                                                                                            | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                    |
| ~~`productPriceId`~~                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                    |
| `product`                                                                                                                                                                  | [components.CheckoutLinkProduct](../../models/components/checkoutlinkproduct.md)                                                                                           | :heavy_check_mark:                                                                                                                                                         | Product data for a checkout link.                                                                                                                                          |
| ~~`productPrice`~~                                                                                                                                                         | *components.CheckoutLinkProductPrice*                                                                                                                                      | :heavy_check_mark:                                                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                    |
| `url`                                                                                                                                                                      | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |