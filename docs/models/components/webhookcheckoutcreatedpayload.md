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
    requireBillingAddress: false,
    isDiscountApplicable: false,
    isFreeProductPrice: false,
    isPaymentRequired: false,
    isPaymentSetupRequired: false,
    isPaymentFormRequired: false,
    customerId: "<value>",
    isBusinessCustomer: false,
    customerName: "<value>",
    customerEmail: "<value>",
    customerIpAddress: "<value>",
    customerBillingName: "<value>",
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
            minimumAmount: 408625,
            maximumAmount: 646815,
            presetAmount: 566113,
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2023-12-03T20:42:04.997Z"),
            modifiedAt: new Date("2024-01-18T02:09:51.323Z"),
            type: "license_keys",
            description: "aha flickering among",
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
            path: "/rescue",
            mimeType: "<value>",
            size: 169094,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-03-28T13:41:32.264Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-04-30T00:30:08.633Z"),
            sizeReadable: "<value>",
            publicUrl: "https://political-draft.info/",
          },
        ],
      },
    ],
    product: {
      createdAt: new Date("2024-08-11T03:40:48.848Z"),
      modifiedAt: new Date("2025-04-26T09:09:19.861Z"),
      id: "<value>",
      name: "<value>",
      description: "slink carboxyl kinase between phooey whoever contrast",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-06-14T06:37:31.843Z"),
          modifiedAt: new Date("2025-01-13T16:20:06.283Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 498972,
          maximumAmount: 624723,
          presetAmount: 391090,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2023-05-17T16:27:52.733Z"),
          modifiedAt: new Date("2025-04-17T06:47:58.555Z"),
          type: "discord",
          description: "outside unique cautiously solidly",
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
          path: "/var/mail",
          mimeType: "<value>",
          size: 853372,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-09-11T06:19:41.522Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-01-27T16:26:36.069Z"),
          sizeReadable: "<value>",
          publicUrl: "https://smart-jump.info/",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2023-01-27T11:44:01.783Z"),
      modifiedAt: new Date("2024-01-19T05:51:20.048Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
      priceCurrency: "<value>",
      unitAmount: "<value>",
      capAmount: 877867,
      meterId: "<value>",
      meter: {
        id: "<value>",
        name: "<value>",
      },
    },
    discount: {
      duration: "once",
      type: "percentage",
      basisPoints: 48599,
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-08-12T05:28:37.379Z"),
          modifiedAt: new Date("2025-02-23T06:47:52.946Z"),
          id: "<value>",
          metadata: {
            "key": 568997,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {
            options: [
              {
                value: "<value>",
                label: "<value>",
              },
            ],
          },
        },
        order: 361343,
        required: false,
      },
    ],
    customerMetadata: {
      "key": 95337,
    },
    customerBillingAddressFields: {
      country: false,
      state: false,
      city: false,
      postalCode: false,
      line1: false,
      line2: false,
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | checkout.created                                           |
| `data`                                                     | [components.Checkout](../../models/components/checkout.md) | :heavy_check_mark:                                         | Checkout session data retrieved using an access token.     |                                                            |