# PolarCheckoutSchemasCheckoutInput

Checkout session data retrieved using an access token.

## Example Usage

```typescript
import { PolarCheckoutSchemasCheckoutInput } from "@polar-sh/sdk/models/components";

let value: PolarCheckoutSchemasCheckoutInput = {
  createdAt: new Date("2023-02-08T14:10:26.713Z"),
  modifiedAt: new Date("2022-03-03T22:35:13.208Z"),
  id: "<value>",
  status: "succeeded",
  clientSecret: "<value>",
  url: "https://light-haversack.name",
  expiresAt: new Date("2024-10-02T02:04:23.656Z"),
  successUrl: "https://ill-fraudster.biz/",
  embedOrigin: "<value>",
  amount: 832764,
  taxAmount: 230161,
  currency: "Tugrik",
  totalAmount: 781342,
  productId: "<value>",
  productPriceId: "<value>",
  isPaymentRequired: false,
  customerId: "<value>",
  customerName: "<value>",
  customerEmail: "Joanie_Bins@gmail.com",
  customerIpAddress: "<value>",
  customerBillingAddress: {
    country: "Oman",
  },
  customerTaxId: "<id>",
  paymentProcessorMetadata: {},
  metadata: {
    "key": "<value>",
  },
  product: {
    createdAt: new Date("2023-05-02T01:12:09.041Z"),
    modifiedAt: new Date("2023-02-12T19:18:02.060Z"),
    id: "<value>",
    name: "<value>",
    description: "sugary broadcast whether fooey sesame hyena because",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-03-26T05:37:58.180Z"),
        modifiedAt: new Date("2022-07-28T12:33:28.889Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-01-16T03:49:13.516Z"),
        modifiedAt: new Date("2024-10-12T04:07:38.112Z"),
        id: "<value>",
        description: "intend quiet augment",
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
        path: "/usr/libexec",
        mimeType: "<value>",
        size: 980859,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-05-16T15:26:37.196Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-03-13T01:49:16.383Z"),
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-12-22T21:21:58.162Z"),
    modifiedAt: new Date("2023-07-22T04:52:15.720Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 662228,
  },
  subscriptionId: "<value>",
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2022-06-18T23:13:24.033Z"),
        modifiedAt: new Date("2023-04-07T11:06:58.417Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "<value>",
        properties: {},
      },
      order: 477409,
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
| `paymentProcessor`                                                                                                                                           | [components.PolarEnumsPaymentProcessor](../../models/components/polarenumspaymentprocessor.md)                                                               | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
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
| `metadata`                                                                                                                                                   | Record<string, *string*>                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `product`                                                                                                                                                    | [components.CheckoutProductInput](../../models/components/checkoutproductinput.md)                                                                           | :heavy_check_mark:                                                                                                                                           | Product data for a checkout session.                                                                                                                         |
| `productPrice`                                                                                                                                               | *components.ProductPrice*                                                                                                                                    | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `subscriptionId`                                                                                                                                             | *string*                                                                                                                                                     | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `attachedCustomFields`                                                                                                                                       | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]                                                                           | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |