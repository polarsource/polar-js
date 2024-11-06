# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user looses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionRevokedPayload = {
  data: {
    createdAt: new Date("2024-08-05T00:25:50.473Z"),
    modifiedAt: new Date("2024-03-22T22:29:10.462Z"),
    id: "<value>",
    amount: 166565,
    currency: "Ethiopian Birr",
    recurringInterval: "month",
    status: "canceled",
    currentPeriodStart: new Date("2023-05-28T12:14:22.735Z"),
    currentPeriodEnd: new Date("2022-06-14T21:20:15.821Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-01-12T01:32:36.517Z"),
    endedAt: new Date("2022-11-02T05:56:35.308Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Alexandria_Beer@hotmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://grimy-expansion.net/",
    },
    product: {
      createdAt: new Date("2024-08-12T21:27:15.147Z"),
      modifiedAt: new Date("2023-03-25T14:39:48.268Z"),
      id: "<value>",
      name: "<value>",
      description:
        "scarcely idolized closely uh-huh now whoa mid failing beside",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2022-11-03T19:09:54.192Z"),
          modifiedAt: new Date("2024-06-08T16:42:11.724Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 853221,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2022-11-29T02:24:30.639Z"),
          modifiedAt: new Date("2024-05-05T03:19:00.639Z"),
          id: "<value>",
          description:
            "beside healthily athletic frenetically congregate around elementary unbearably rebel blah",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 67982,
              timeframe: "year",
            },
            activations: {
              limit: 394192,
              enableUserAdmin: false,
            },
            limitUsage: 196814,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/lib",
          mimeType: "<value>",
          size: 183975,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-11-24T09:56:09.198Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-07-08T07:48:14.392Z"),
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-05-18T00:30:59.700Z"),
            modifiedAt: new Date("2022-07-09T01:59:04.501Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 802851,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2024-09-19T18:07:16.947Z"),
      modifiedAt: new Date("2023-04-22T10:31:33.307Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionRevokedPayloadType](../../models/components/webhooksubscriptionrevokedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |