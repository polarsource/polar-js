# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookCheckoutUpdatedPayload = {
  data: {
    createdAt: new Date("2022-08-07T22:36:11.072Z"),
    modifiedAt: new Date("2024-08-17T23:34:09.972Z"),
    id: "<value>",
    status: "expired",
    clientSecret: "<value>",
    url: "https://prickly-lieu.biz/",
    expiresAt: new Date("2023-11-20T11:24:09.591Z"),
    successUrl: "https://first-caption.name",
    embedOrigin: "<value>",
    amount: 282979,
    taxAmount: 325225,
    currency: "Lebanese Pound",
    totalAmount: 731201,
    productId: "<value>",
    productPriceId: "<value>",
    isPaymentRequired: false,
    customerId: "<value>",
    customerName: "<value>",
    customerEmail: "Javier.Stehr40@gmail.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "Cambodia",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {},
    metadata: {
      "key": "<value>",
    },
    product: {
      createdAt: new Date("2022-01-02T23:04:43.120Z"),
      modifiedAt: new Date("2023-01-30T14:22:07.592Z"),
      id: "<value>",
      name: "<value>",
      description:
        "closely republican yahoo digestive crazy plus eyeliner rewarding mmm",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2022-05-16T08:11:45.795Z"),
          modifiedAt: new Date("2023-05-22T14:57:08.680Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 654833,
          maximumAmount: 371870,
          presetAmount: 517246,
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-07-11T19:27:37.850Z"),
          modifiedAt: new Date("2024-09-21T16:35:34.104Z"),
          id: "<value>",
          type: "discord",
          description: "considering although foretell upbeat gift wherever",
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
          size: 333131,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-09-13T07:17:27.740Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-08-09T01:53:56.642Z"),
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2023-11-03T19:31:40.966Z"),
      modifiedAt: new Date("2024-08-03T13:01:33.319Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-07-02T16:51:39.984Z"),
          modifiedAt: new Date("2023-11-01T05:10:14.364Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "<value>",
          properties: {},
        },
        order: 12254,
        required: false,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [components.WebhookCheckoutUpdatedPayloadType](../../models/components/webhookcheckoutupdatedpayloadtype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `data`                                                                                                       | [components.PolarCheckoutSchemasCheckoutInput](../../models/components/polarcheckoutschemascheckoutinput.md) | :heavy_check_mark:                                                                                           | Checkout session data retrieved using an access token.                                                       |