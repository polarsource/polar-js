# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutcreatedpayload.js";

let value: WebhookCheckoutCreatedPayload = {
  data: {
    createdAt: new Date("2024-06-17T23:01:40.328Z"),
    modifiedAt: new Date("2023-08-20T15:49:44.498Z"),
    id: "<value>",
    paymentProcessor: "stripe",
    status: "failed",
    clientSecret: "<value>",
    url: "https://unhealthy-noon.info/",
    expiresAt: new Date("2025-11-23T17:32:24.813Z"),
    successUrl: "https://sophisticated-slipper.info",
    embedOrigin: "<value>",
    amount: 968219,
    discountAmount: 557270,
    netAmount: 112135,
    taxAmount: 449681,
    totalAmount: 564684,
    currency: "Egyptian Pound",
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
    subtotalAmount: 750787,
    metadata: {
      "key": "<value>",
    },
    customerExternalId: "<id>",
    products: [
      {
        createdAt: new Date("2024-05-23T09:50:42.659Z"),
        modifiedAt: new Date("2023-08-14T22:17:13.209Z"),
        id: "<value>",
        name: "<value>",
        description: "brr until wedding as kindheartedly under nucleotidase",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-09-27T04:49:04.694Z"),
            modifiedAt: new Date("2024-12-27T10:51:10.821Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "year",
            priceCurrency: "<value>",
            unitAmount: 301829,
            capAmount: 693495,
            meterId: "<value>",
            meter: {
              id: "<value>",
              name: "<value>",
            },
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-10-18T19:17:56.937Z"),
            modifiedAt: new Date("2025-06-07T23:13:57.547Z"),
            id: "<value>",
            type: "custom",
            description: "filthy aware quizzically safely",
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
            path: "/home/user/dir",
            mimeType: "<value>",
            size: 990002,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-02-28T01:09:21.212Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-06-28T08:53:26.675Z"),
            sizeReadable: "<value>",
            publicUrl: "https://obedient-legislature.com/",
          },
        ],
      },
    ],
    product: {
      createdAt: new Date("2024-09-16T18:15:48.057Z"),
      modifiedAt: new Date("2025-02-05T19:40:37.393Z"),
      id: "<value>",
      name: "<value>",
      description: "phooey whoever contrast meh youthfully",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-09-08T10:45:40.024Z"),
          modifiedAt: new Date("2023-03-21T07:44:01.177Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 778114,
          maximumAmount: 400327,
          presetAmount: 655577,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-07-21T22:16:04.637Z"),
          modifiedAt: new Date("2025-10-30T04:02:45.122Z"),
          id: "<value>",
          type: "meter_credit",
          description: "consequently whose hydrocarbon stuff selfishly unlike",
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
          path: "/var/tmp",
          mimeType: "<value>",
          size: 617640,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-12-07T09:01:09.070Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-08-30T16:26:00.743Z"),
          sizeReadable: "<value>",
          publicUrl: "https://fantastic-flood.org",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2025-10-08T12:22:57.723Z"),
      modifiedAt: new Date("2024-08-22T13:16:32.292Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
    discount: {
      duration: "once",
      durationInMonths: 40783,
      type: "fixed",
      amount: 26350,
      currency: "Nuevo Sol",
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-04-28T02:08:29.290Z"),
          modifiedAt: new Date("2025-01-28T09:31:45.252Z"),
          id: "<value>",
          metadata: {
            "key": 519265,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 966482,
        required: false,
      },
    ],
    customerMetadata: {
      "key": 958265,
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | checkout.created                                           |
| `data`                                                     | [components.Checkout](../../models/components/checkout.md) | :heavy_check_mark:                                         | Checkout session data retrieved using an access token.     |                                                            |