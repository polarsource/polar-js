# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user looses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionRevokedPayload = {
  data: {
    createdAt: new Date("2023-01-27T07:29:07.482Z"),
    modifiedAt: new Date("2023-05-04T23:37:31.406Z"),
    id: "<value>",
    amount: 668199,
    currency: "Yen",
    recurringInterval: "month",
    status: "incomplete",
    currentPeriodStart: new Date("2022-10-30T01:32:14.646Z"),
    currentPeriodEnd: new Date("2024-08-05T03:49:40.522Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2023-10-09T03:14:12.239Z"),
    endedAt: new Date("2022-01-06T02:19:06.964Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": false,
    },
    user: {
      email: "Velda_Upton@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://hairy-chainstay.org/",
    },
    product: {
      createdAt: new Date("2023-09-16T04:12:01.967Z"),
      modifiedAt: new Date("2022-09-30T10:42:40.243Z"),
      id: "<value>",
      name: "<value>",
      description:
        "for furthermore whopping dramatic glum but far abnormally manner",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2022-10-05T01:05:42.886Z"),
          modifiedAt: new Date("2022-05-27T00:07:13.026Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-03-11T02:46:48.262Z"),
          modifiedAt: new Date("2024-05-19T04:21:15.142Z"),
          id: "<value>",
          description:
            "accredit um pro hence happy outside into unless video upwardly",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            archived: {
              "key": false,
            },
            files: [
              "<value>",
            ],
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/var",
          mimeType: "<value>",
          size: 121889,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-06-07T01:46:11.385Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-02-18T10:31:07.486Z"),
          sizeReadable: "<value>",
          publicUrl: "https://grubby-pilot.com/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-09-28T20:12:42.622Z"),
            modifiedAt: new Date("2022-05-02T15:57:51.261Z"),
            id: "<value>",
            metadata: {
              "key": false,
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
          order: 849427,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2023-06-10T19:07:01.719Z"),
      modifiedAt: new Date("2023-10-31T23:25:04.764Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionRevokedPayloadType](../../models/components/webhooksubscriptionrevokedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.Subscription](../../models/components/subscription.md)                                                   | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |