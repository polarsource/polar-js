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
    metadata: {
      "key": false,
    },
    customerExternalId: "<id>",
    products: [
      {
        createdAt: new Date("2023-10-02T22:13:13.009Z"),
        modifiedAt: new Date("2024-05-23T09:50:42.659Z"),
        id: "<value>",
        name: "<value>",
        description: "savour railway tomorrow behest",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-06-08T10:56:27.163Z"),
            modifiedAt: new Date("2023-03-23T07:26:26.518Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 408625,
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2024-12-09T21:48:18.520Z"),
            modifiedAt: new Date("2024-09-12T11:02:22.469Z"),
            type: "discord",
            description: "properly unwieldy stupendous drat gummy",
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
            path: "/usr/local/src",
            mimeType: "<value>",
            size: 52686,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-09-08T17:18:21.648Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-09-27T21:04:47.211Z"),
            sizeReadable: "<value>",
            publicUrl: "https://supportive-rationale.biz/",
          },
        ],
      },
    ],
    product: {
      createdAt: new Date("2024-11-29T22:09:49.609Z"),
      modifiedAt: new Date("2024-08-10T17:25:39.360Z"),
      id: "<value>",
      name: "<value>",
      description: "um yippee afore aboard",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-05-21T23:21:06.675Z"),
          modifiedAt: new Date("2025-09-12T21:51:12.650Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 717174,
          maximumAmount: 171608,
          presetAmount: 6080,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2024-06-16T21:30:45.429Z"),
          modifiedAt: new Date("2023-05-21T12:07:36.569Z"),
          type: "custom",
          description:
            "below blend watery flight fellow solidly regularly where",
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
          path: "/home/user",
          mimeType: "<value>",
          size: 715587,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-02-26T03:31:00.440Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-09-15T14:54:15.011Z"),
          sizeReadable: "<value>",
          publicUrl: "https://gray-bowling.biz/",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2024-11-07T22:24:38.614Z"),
      modifiedAt: new Date("2023-12-07T09:01:09.070Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
      priceCurrency: "<value>",
      unitAmount: "<value>",
      capAmount: 256463,
      meterId: "<value>",
      meter: {
        id: "<value>",
        name: "<value>",
      },
    },
    discount: {
      duration: "repeating",
      durationInMonths: 413658,
      type: "percentage",
      amount: 922916,
      currency: "Kyat",
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-03-22T11:22:24.006Z"),
          modifiedAt: new Date("2023-02-16T00:22:02.887Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 498829,
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