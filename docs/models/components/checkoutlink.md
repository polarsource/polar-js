# CheckoutLink

Checkout link data.

## Example Usage

```typescript
import { CheckoutLink } from "@polar-sh/sdk/models/components/checkoutlink.js";

let value: CheckoutLink = {
  createdAt: new Date("2025-02-06T22:48:59.434Z"),
  modifiedAt: new Date("2024-02-25T00:02:22.663Z"),
  id: "<value>",
  metadata: {
    "key": false,
  },
  paymentProcessor: "stripe",
  clientSecret: "<value>",
  successUrl: "https://lighthearted-juggernaut.name",
  label: "<value>",
  allowDiscountCodes: false,
  discountId: "<value>",
  organizationId: "<value>",
  products: [
    {
      createdAt: new Date("2023-10-20T03:35:56.352Z"),
      modifiedAt: new Date("2023-09-29T19:29:55.645Z"),
      id: "<value>",
      name: "<value>",
      description: "onto scrape beside crafty chasuble via",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-06-13T15:30:19.597Z"),
          modifiedAt: new Date("2024-06-28T00:09:50.341Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-10-21T12:24:46.268Z"),
          modifiedAt: new Date("2025-05-22T22:32:55.689Z"),
          id: "<value>",
          type: "github_repository",
          description: "more duh at pivot powerfully if pike sheathe",
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
          path: "/home",
          mimeType: "<value>",
          size: 371996,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-11-23T07:05:25.095Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-06-14T06:33:23.545Z"),
          sizeReadable: "<value>",
          publicUrl: "https://whispered-premeditation.net/",
        },
      ],
    },
  ],
  discount: {
    duration: "once",
    durationInMonths: 983496,
    type: "fixed",
    amount: 665969,
    currency: "Australian Dollar",
    createdAt: new Date("2023-01-16T16:45:02.911Z"),
    modifiedAt: new Date("2023-01-11T21:25:09.426Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2024-05-21T12:42:34.435Z"),
    endsAt: new Date("2024-10-21T19:47:23.356Z"),
    maxRedemptions: 141320,
    redemptionsCount: 487733,
    organizationId: "<value>",
  },
  productId: "<value>",
  productPriceId: "<value>",
  product: {
    createdAt: new Date("2024-07-22T14:36:15.153Z"),
    modifiedAt: new Date("2023-06-17T07:07:59.245Z"),
    id: "<value>",
    name: "<value>",
    description: "scaffold openly phew chops gurn willfully",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-05-28T06:31:27.160Z"),
        modifiedAt: new Date("2023-04-12T18:14:54.281Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-12-08T19:52:42.080Z"),
        modifiedAt: new Date("2023-03-11T10:13:39.147Z"),
        id: "<value>",
        type: "custom",
        description:
          "outflank versus huzzah ouch bravely bootleg ravioli and sweetly secret",
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
        size: 468227,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-08-18T11:54:29.631Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-11-01T18:46:59.188Z"),
        sizeReadable: "<value>",
        publicUrl: "https://golden-quart.name",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-12-17T10:47:06.589Z"),
    modifiedAt: new Date("2024-02-05T07:00:12.804Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "year",
    priceCurrency: "<value>",
    minimumAmount: 61822,
    maximumAmount: 866115,
    presetAmount: 625300,
  },
  url: "https://failing-cinder.name/",
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