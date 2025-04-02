# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutcreatedpayload.js";

let value: WebhookCheckoutCreatedPayload = {
  data: {
    createdAt: new Date("2024-08-20T04:36:26.084Z"),
    modifiedAt: new Date("2024-04-09T07:48:57.030Z"),
    id: "<value>",
    paymentProcessor: "stripe",
    status: "succeeded",
    clientSecret: "<value>",
    url: "https://unique-veto.info/",
    expiresAt: new Date("2025-05-17T17:32:07.447Z"),
    successUrl: "https://oddball-translation.com",
    embedOrigin: "<value>",
    amount: 87129,
    discountAmount: 20218,
    netAmount: 832620,
    taxAmount: 778157,
    totalAmount: 870013,
    currency: "Lesotho Loti",
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
      country: "FR",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {
      "key": "<value>",
    },
    subtotalAmount: 461479,
    metadata: {
      "key": false,
    },
    customerExternalId: "<id>",
    products: [
      {
        createdAt: new Date("2023-05-10T15:05:25.793Z"),
        modifiedAt: new Date("2024-12-02T08:28:57.162Z"),
        id: "<value>",
        name: "<value>",
        description: "midst furlough continually fooey",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-05-26T01:50:18.849Z"),
            modifiedAt: new Date("2023-09-25T21:22:14.779Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
            priceCurrency: "<value>",
            minimumAmount: 656330,
            maximumAmount: 138183,
            presetAmount: 196582,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-02-09T02:56:48.801Z"),
            modifiedAt: new Date("2025-06-18T19:24:21.305Z"),
            id: "<value>",
            type: "custom",
            description:
              "arraign barracks upon politely oof failing other insignificant woot",
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
            path: "/etc/namedb",
            mimeType: "<value>",
            size: 298282,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-09-16T16:21:25.240Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-10-09T14:19:01.603Z"),
            sizeReadable: "<value>",
            publicUrl: "https://quarrelsome-pecan.info",
          },
        ],
      },
    ],
    product: {
      createdAt: new Date("2025-09-09T14:45:41.967Z"),
      modifiedAt: new Date("2024-02-07T20:20:50.747Z"),
      id: "<value>",
      name: "<value>",
      description: "worth uh-huh substitution psst upon er",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-03-11T05:07:47.512Z"),
          modifiedAt: new Date("2023-12-08T21:24:04.180Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-07-24T01:37:14.976Z"),
          modifiedAt: new Date("2025-11-01T00:46:16.847Z"),
          id: "<value>",
          type: "license_keys",
          description:
            "instead technician inasmuch sympathetically disappointment nor",
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
          path: "/lost+found",
          mimeType: "<value>",
          size: 586784,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-08-04T18:51:28.290Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-05-09T19:33:28.581Z"),
          sizeReadable: "<value>",
          publicUrl: "https://complete-provision.info",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2023-06-08T18:04:31.662Z"),
      modifiedAt: new Date("2024-06-18T21:49:56.662Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 765326,
    },
    discount: {
      duration: "repeating",
      type: "fixed",
      basisPoints: 552193,
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2025-11-20T06:46:28.205Z"),
          modifiedAt: new Date("2023-11-17T04:38:54.761Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 100294,
        required: false,
      },
    ],
    customerMetadata: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | checkout.created                                           |
| `data`                                                     | [components.Checkout](../../models/components/checkout.md) | :heavy_check_mark:                                         | Checkout session data retrieved using an access token.     |                                                            |