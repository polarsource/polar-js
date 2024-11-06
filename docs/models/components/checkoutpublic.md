# CheckoutPublic

Checkout session data retrieved using the client secret.

## Example Usage

```typescript
import { CheckoutPublic } from "@polar-sh/sdk/models/components";

let value: CheckoutPublic = {
  createdAt: new Date("2022-05-07T01:41:54.981Z"),
  modifiedAt: new Date("2023-02-08T16:54:04.413Z"),
  id: "<value>",
  status: "expired",
  clientSecret: "<value>",
  url: "https://memorable-tomography.info",
  expiresAt: new Date("2022-03-15T09:25:01.845Z"),
  successUrl: "https://inconsequential-marathon.name/",
  embedOrigin: "<value>",
  amount: 58904,
  taxAmount: 617530,
  currency: "Bahamian Dollar",
  totalAmount: 431813,
  productId: "<value>",
  productPriceId: "<value>",
  isPaymentRequired: false,
  customerId: "<value>",
  customerName: "<value>",
  customerEmail: "Brett.Kassulke28@hotmail.com",
  customerIpAddress: "<value>",
  customerBillingAddress: {
    country: "Democratic People's Republic of Korea",
  },
  customerTaxId: "<id>",
  paymentProcessorMetadata: {},
  product: {
    createdAt: new Date("2023-09-21T10:09:14.320Z"),
    modifiedAt: new Date("2024-04-01T05:07:23.085Z"),
    id: "<value>",
    name: "<value>",
    description:
      "ghost round stock brightly yowza while before victoriously mechanically wrongly",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2022-02-12T05:28:18.955Z"),
        modifiedAt: new Date("2022-09-05T04:07:53.610Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        priceAmount: 778856,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-07-08T21:03:19.722Z"),
        modifiedAt: new Date("2024-08-14T06:28:14.989Z"),
        id: "<value>",
        type: "license_keys",
        description: "swanling cauliflower whose insert loose reassuringly",
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
        size: 625403,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-11-28T05:20:13.228Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-07-16T02:59:18.334Z"),
        sizeReadable: "<value>",
        publicUrl: "https://serpentine-fat.info/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2022-04-01T14:34:31.000Z"),
    modifiedAt: new Date("2023-09-12T15:43:53.558Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
  },
  organization: {
    createdAt: new Date("2022-04-06T06:20:48.081Z"),
    modifiedAt: new Date("2023-12-09T10:05:15.071Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://sturdy-scaffold.org/",
    bio: "<value>",
    company: "Daniel - Denesik",
    blog: "<value>",
    location: "<value>",
    email: "Estevan_Block@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 587824,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 530259,
    donationsEnabled: false,
    profileSettings: {},
    featureSettings: {},
  },
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2023-08-22T02:15:34.328Z"),
        modifiedAt: new Date("2024-10-08T00:41:43.929Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "<value>",
        properties: {
          options: [
            {
              value: "<value>",
              label: "<value>",
            },
          ],
        },
      },
      order: 551678,
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
| `customFieldData`                                                                                                                                            | [components.CheckoutPublicCustomFieldData](../../models/components/checkoutpubliccustomfielddata.md)                                                         | :heavy_minus_sign:                                                                                                                                           | Key-value object storing custom field values.                                                                                                                |
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
| `paymentProcessorMetadata`                                                                                                                                   | [components.CheckoutPublicPaymentProcessorMetadata](../../models/components/checkoutpublicpaymentprocessormetadata.md)                                       | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `product`                                                                                                                                                    | [components.CheckoutProduct](../../models/components/checkoutproduct.md)                                                                                     | :heavy_check_mark:                                                                                                                                           | Product data for a checkout session.                                                                                                                         |
| `productPrice`                                                                                                                                               | *components.ProductPrice*                                                                                                                                    | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `organization`                                                                                                                                               | [components.Organization](../../models/components/organization.md)                                                                                           | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `attachedCustomFields`                                                                                                                                       | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]                                                                           | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |