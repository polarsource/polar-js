# CheckoutPublic

Checkout session data retrieved using the client secret.

## Example Usage

```typescript
import { CheckoutPublic } from "@polar-sh/sdk/models/components/checkoutpublic.js";

let value: CheckoutPublic = {
  createdAt: new Date("2024-12-14T20:36:57.037Z"),
  modifiedAt: new Date("2024-03-31T13:03:44.610Z"),
  id: "<value>",
  paymentProcessor: "stripe",
  status: "succeeded",
  clientSecret: "<value>",
  url: "https://annual-begonia.biz/",
  expiresAt: new Date("2023-09-30T09:44:04.147Z"),
  successUrl: "https://simple-castanet.name/",
  embedOrigin: "<value>",
  amount: 57291,
  discountAmount: 326222,
  netAmount: 736132,
  taxAmount: 449851,
  totalAmount: 58955,
  currency: "Yemeni Rial",
  productId: "<value>",
  productPriceId: "<value>",
  discountId: "<value>",
  allowDiscountCodes: false,
  isDiscountApplicable: false,
  isFreeProductPrice: false,
  isPaymentRequired: false,
  isPaymentSetupRequired: false,
  isPaymentFormRequired: false,
  customerId: "<value>",
  customerName: "<value>",
  customerEmail: "<value>",
  customerIpAddress: "<value>",
  customerBillingAddress: {
    country: "US",
  },
  customerTaxId: "<id>",
  paymentProcessorMetadata: {
    "key": "<value>",
  },
  subtotalAmount: 580331,
  products: [
    {
      createdAt: new Date("2024-11-02T12:15:27.373Z"),
      modifiedAt: new Date("2025-01-01T09:53:52.426Z"),
      id: "<value>",
      name: "<value>",
      description: "excepting deliberately omelet verbally",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-09-29T07:51:46.586Z"),
          modifiedAt: new Date("2024-07-11T02:04:41.072Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          unitAmount: "<value>",
          capAmount: 494707,
          meterId: "<value>",
          meter: {
            id: "<value>",
            name: "<value>",
          },
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-01-01T18:22:02.718Z"),
          modifiedAt: new Date("2023-11-21T05:48:17.627Z"),
          id: "<value>",
          type: "downloadables",
          description: "happy elegantly mid",
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
          path: "/private/var",
          mimeType: "<value>",
          size: 380551,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-09-30T08:10:08.066Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-06-02T11:26:30.723Z"),
          sizeReadable: "<value>",
          publicUrl: "https://warm-skeleton.name/",
        },
      ],
    },
  ],
  product: {
    createdAt: new Date("2025-05-30T23:33:44.652Z"),
    modifiedAt: new Date("2023-04-25T19:50:17.833Z"),
    id: "<value>",
    name: "<value>",
    description: "polyester crest if mobility woot whereas importance",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-08-09T02:46:58.719Z"),
        modifiedAt: new Date("2025-05-24T05:54:34.809Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-10-15T18:19:22.469Z"),
        modifiedAt: new Date("2024-02-10T01:45:55.307Z"),
        id: "<value>",
        type: "github_repository",
        description:
          "vaguely perfectly how knowledgeably frightfully extremely",
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
        path: "/lib",
        mimeType: "<value>",
        size: 50202,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-10-22T09:45:06.807Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-07-17T02:16:48.193Z"),
        sizeReadable: "<value>",
        publicUrl: "https://huge-iridescence.name",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2025-02-27T06:17:10.865Z"),
    modifiedAt: new Date("2023-04-18T11:05:48.075Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "month",
  },
  discount: {
    duration: "once",
    durationInMonths: 557429,
    type: "percentage",
    amount: 86815,
    currency: "Kwanza",
    id: "<value>",
    name: "<value>",
    code: "<value>",
  },
  organization: {
    createdAt: new Date("2025-11-17T03:58:10.489Z"),
    modifiedAt: new Date("2024-04-05T23:28:12.484Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://common-spork.name",
    email: "Green63@hotmail.com",
    website: "<value>",
    socials: [
      {
        platform: "other",
        url: "https://substantial-volleyball.biz/",
      },
    ],
    detailsSubmittedAt: new Date("2023-05-13T05:58:18.939Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
    bio: "<value>",
    company: "Wilkinson - Gutmann",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 185628,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 777565,
    profileSettings: {},
  },
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2024-11-23T12:33:00.910Z"),
        modifiedAt: new Date("2023-04-30T11:18:43.390Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        properties: {},
      },
      order: 538382,
      required: false,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Creation timestamp of the object.                                                                                                                                          |
| `modifiedAt`                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Last modification timestamp of the object.                                                                                                                                 |
| `id`                                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The ID of the object.                                                                                                                                                      |
| `customFieldData`                                                                                                                                                          | Record<string, *components.CheckoutPublicCustomFieldData*>                                                                                                                 | :heavy_minus_sign:                                                                                                                                                         | Key-value object storing custom field values.                                                                                                                              |
| `paymentProcessor`                                                                                                                                                         | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `status`                                                                                                                                                                   | [components.CheckoutStatus](../../models/components/checkoutstatus.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `clientSecret`                                                                                                                                                             | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Client secret used to update and complete the checkout session from the client.                                                                                            |
| `url`                                                                                                                                                                      | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | URL where the customer can access the checkout session.                                                                                                                    |
| `expiresAt`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Expiration date and time of the checkout session.                                                                                                                          |
| `successUrl`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | URL where the customer will be redirected after a successful payment.                                                                                                      |
| `embedOrigin`                                                                                                                                                              | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | When checkout is embedded, represents the Origin of the page embedding the checkout. Used as a security measure to send messages only to the embedding page.               |
| `amount`                                                                                                                                                                   | *number*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Amount in cents, before discounts and taxes.                                                                                                                               |
| `discountAmount`                                                                                                                                                           | *number*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Discount amount in cents.                                                                                                                                                  |
| `netAmount`                                                                                                                                                                | *number*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Amount in cents, after discounts but before taxes.                                                                                                                         |
| `taxAmount`                                                                                                                                                                | *number*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Sales tax amount in cents. If `null`, it means there is no enough information yet to calculate it.                                                                         |
| `totalAmount`                                                                                                                                                              | *number*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Amount in cents, after discounts and taxes.                                                                                                                                |
| `currency`                                                                                                                                                                 | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Currency code of the checkout session.                                                                                                                                     |
| `productId`                                                                                                                                                                | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the product to checkout.                                                                                                                                             |
| `productPriceId`                                                                                                                                                           | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the product price to checkout.                                                                                                                                       |
| `discountId`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the discount applied to the checkout.                                                                                                                                |
| `allowDiscountCodes`                                                                                                                                                       | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. |
| `isDiscountApplicable`                                                                                                                                                     | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether the discount is applicable to the checkout. Typically, free and custom prices are not discountable.                                                                |
| `isFreeProductPrice`                                                                                                                                                       | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether the product price is free, regardless of discounts.                                                                                                                |
| `isPaymentRequired`                                                                                                                                                        | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether the checkout requires payment, e.g. in case of free products or discounts that cover the total amount.                                                             |
| `isPaymentSetupRequired`                                                                                                                                                   | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether the checkout requires setting up a payment method, regardless of the amount, e.g. subscriptions that have first free cycles.                                       |
| `isPaymentFormRequired`                                                                                                                                                    | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether the checkout requires a payment form, whether because of a payment or payment method setup.                                                                        |
| `customerId`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `customerName`                                                                                                                                                             | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Name of the customer.                                                                                                                                                      |
| `customerEmail`                                                                                                                                                            | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Email address of the customer.                                                                                                                                             |
| `customerIpAddress`                                                                                                                                                        | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `customerBillingAddress`                                                                                                                                                   | [components.Address](../../models/components/address.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `customerTaxId`                                                                                                                                                            | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `paymentProcessorMetadata`                                                                                                                                                 | Record<string, *string*>                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| ~~`subtotalAmount`~~                                                                                                                                                       | *number*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                    |
| `products`                                                                                                                                                                 | [components.CheckoutProduct](../../models/components/checkoutproduct.md)[]                                                                                                 | :heavy_check_mark:                                                                                                                                                         | List of products available to select.                                                                                                                                      |
| `product`                                                                                                                                                                  | [components.CheckoutProduct](../../models/components/checkoutproduct.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Product data for a checkout session.                                                                                                                                       |
| `productPrice`                                                                                                                                                             | *components.CheckoutPublicProductPrice*                                                                                                                                    | :heavy_check_mark:                                                                                                                                                         | Price of the selected product.                                                                                                                                             |
| `discount`                                                                                                                                                                 | *components.CheckoutPublicDiscount*                                                                                                                                        | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `organization`                                                                                                                                                             | [components.Organization](../../models/components/organization.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `attachedCustomFields`                                                                                                                                                     | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]                                                                                         | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |