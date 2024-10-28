# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookCheckoutCreatedPayload = {
  data: {
    createdAt: new Date("2023-06-22T12:17:16.742Z"),
    modifiedAt: new Date("2024-06-13T22:38:03.801Z"),
    id: "<value>",
    status: "expired",
    clientSecret: "<value>",
    url: "https://unhappy-pillbox.biz/",
    expiresAt: new Date("2022-08-14T10:50:31.804Z"),
    successUrl: "https://live-final.name/",
    embedOrigin: "<value>",
    amount: 892451,
    taxAmount: 629961,
    currency: "Rupiah",
    totalAmount: 860443,
    productId: "<value>",
    productPriceId: "<value>",
    isPaymentRequired: false,
    customerId: "<value>",
    customerName: "<value>",
    customerEmail: "Lauren_Bogisich@hotmail.com",
    customerIpAddress: "<value>",
    customerBillingAddress: {
      country: "Bouvet Island",
    },
    customerTaxId: "<id>",
    paymentProcessorMetadata: {},
    metadata: {
      "key": "<value>",
    },
    product: {
      createdAt: new Date("2024-05-11T15:36:51.992Z"),
      modifiedAt: new Date("2023-07-16T02:29:30.643Z"),
      id: "<value>",
      name: "<value>",
      description:
        "obedience meh among scaffold league bravely wilderness pivot proud",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-10-13T14:08:51.106Z"),
          modifiedAt: new Date("2023-03-02T17:40:21.311Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-10-31T19:49:06.620Z"),
          modifiedAt: new Date("2024-05-07T17:42:22.245Z"),
          id: "<value>",
          type: "ads",
          description:
            "sleet scary jubilantly courteous excluding before bashfully able whenever since",
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
          path: "/Network",
          mimeType: "<value>",
          size: 709870,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-02-01T07:14:52.690Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-07-20T17:13:35.220Z"),
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2022-06-05T03:18:14.991Z"),
      modifiedAt: new Date("2024-04-15T20:33:21.883Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                       | [components.WebhookCheckoutCreatedPayloadType](../../models/components/webhookcheckoutcreatedpayloadtype.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `data`                                                                                                       | [components.PolarCheckoutSchemasCheckoutInput](../../models/components/polarcheckoutschemascheckoutinput.md) | :heavy_check_mark:                                                                                           | Checkout session data retrieved using an access token.                                                       |