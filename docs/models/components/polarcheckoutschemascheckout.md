# PolarCheckoutSchemasCheckout

Checkout session data retrieved using an access token.

## Example Usage

```typescript
import { PolarCheckoutSchemasCheckout } from "@polar-sh/sdk/models/components";

let value: PolarCheckoutSchemasCheckout = {
  createdAt: new Date("2023-08-24T23:11:15.301Z"),
  modifiedAt: new Date("2023-04-04T00:47:20.992Z"),
  id: "<value>",
  status: "open",
  clientSecret: "<value>",
  url: "https://spiffy-litter.biz/",
  expiresAt: new Date("2023-05-04T04:09:06.657Z"),
  successUrl: "https://realistic-calculus.name",
  embedOrigin: "<value>",
  amount: 198695,
  taxAmount: 978408,
  currency: "Solomon Islands Dollar",
  totalAmount: 81000,
  productId: "<value>",
  productPriceId: "<value>",
  isPaymentRequired: false,
  customerId: "<value>",
  customerName: "<value>",
  customerEmail: "Arianna.Senger16@gmail.com",
  customerIpAddress: "<value>",
  customerBillingAddress: {
    country: "Nepal",
  },
  customerTaxId: "<id>",
  paymentProcessorMetadata: {},
  metadata: {
    "key": false,
  },
  product: {
    createdAt: new Date("2024-06-20T17:08:39.320Z"),
    modifiedAt: new Date("2022-08-09T05:10:15.962Z"),
    id: "<value>",
    name: "<value>",
    description: "verbally merrily legend punctually amid joyously gee hateful",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-01-18T18:59:13.114Z"),
        modifiedAt: new Date("2024-10-05T21:58:09.997Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-08-14T05:05:54.788Z"),
        modifiedAt: new Date("2023-03-26T01:06:23.500Z"),
        id: "<value>",
        description: "bulky inwardly importance",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          paidArticles: false,
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/opt/lib",
        mimeType: "<value>",
        size: 549457,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-12-03T06:03:57.837Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-03-06T13:25:23.485Z"),
        sizeReadable: "<value>",
        publicUrl: "https://complete-hose.org",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-04-09T15:05:07.991Z"),
    modifiedAt: new Date("2022-03-08T04:36:01.401Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 286276,
    recurringInterval: "month",
  },
  subscriptionId: "<value>",
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2023-09-21T10:09:14.320Z"),
        modifiedAt: new Date("2024-04-01T05:07:23.085Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "<value>",
        properties: {},
      },
      order: 437621,
      required: false,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                | :heavy_check_mark:                                                                                                                                           | Creation timestamp of the object.                                                                                                                            |
| `modifiedAt`                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                | :heavy_check_mark:                                                                                                                                           | Last modification timestamp of the object.                                                                                                                   |
| `id`                                                                                                                                                         | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | The ID of the object.                                                                                                                                        |
| `customFieldData`                                                                                                                                            | [components.PolarCheckoutSchemasCheckoutCustomFieldData](../../models/components/polarcheckoutschemascheckoutcustomfielddata.md)                             | :heavy_minus_sign:                                                                                                                                           | Key-value object storing custom field values.                                                                                                                |
| `paymentProcessor`                                                                                                                                           | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                                                                                   | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `status`                                                                                                                                                     | [components.CheckoutStatus](../../models/components/checkoutstatus.md)                                                                                       | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `clientSecret`                                                                                                                                               | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | Client secret used to update and complete the checkout session from the client.                                                                              |
| `url`                                                                                                                                                        | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | URL where the customer can access the checkout session.                                                                                                      |
| `expiresAt`                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                | :heavy_check_mark:                                                                                                                                           | Expiration date and time of the checkout session.                                                                                                            |
| `successUrl`                                                                                                                                                 | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | URL where the customer will be redirected after a successful payment.                                                                                        |
| `embedOrigin`                                                                                                                                                | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | When checkout is embedded, represents the Origin of the page embedding the checkout. Used as a security measure to send messages only to the embedding page. |
| `amount`                                                                                                                                                     | *number*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `taxAmount`                                                                                                                                                  | *number*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | Computed tax amount to pay in cents.                                                                                                                         |
| `currency`                                                                                                                                                   | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | Currency code of the checkout session.                                                                                                                       |
| `totalAmount`                                                                                                                                                | *number*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | Total amount to pay in cents.                                                                                                                                |
| `productId`                                                                                                                                                  | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | ID of the product to checkout.                                                                                                                               |
| `productPriceId`                                                                                                                                             | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | ID of the product price to checkout.                                                                                                                         |
| `isPaymentRequired`                                                                                                                                          | *boolean*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                           | Whether the checkout requires payment. Useful to detect free products.                                                                                       |
| `customerId`                                                                                                                                                 | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `customerName`                                                                                                                                               | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `customerEmail`                                                                                                                                              | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `customerIpAddress`                                                                                                                                          | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `customerBillingAddress`                                                                                                                                     | [components.Address](../../models/components/address.md)                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `customerTaxId`                                                                                                                                              | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `paymentProcessorMetadata`                                                                                                                                   | [components.PaymentProcessorMetadata](../../models/components/paymentprocessormetadata.md)                                                                   | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `metadata`                                                                                                                                                   | Record<string, *components.PolarCheckoutSchemasCheckoutMetadata*>                                                                                            | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `product`                                                                                                                                                    | [components.CheckoutProduct](../../models/components/checkoutproduct.md)                                                                                     | :heavy_check_mark:                                                                                                                                           | Product data for a checkout session.                                                                                                                         |
| `productPrice`                                                                                                                                               | *components.ProductPrice*                                                                                                                                    | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `subscriptionId`                                                                                                                                             | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `attachedCustomFields`                                                                                                                                       | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]                                                                           | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |