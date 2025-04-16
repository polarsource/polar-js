# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components/webhooksubscriptionactivepayload.js";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2023-01-04T02:09:35.584Z"),
    modifiedAt: new Date("2024-02-17T07:58:05.914Z"),
    id: "<value>",
    amount: 468834,
    currency: "Tunisian Dinar",
    recurringInterval: "year",
    status: "past_due",
    currentPeriodStart: new Date("2024-04-02T21:35:12.738Z"),
    currentPeriodEnd: new Date("2023-01-14T19:06:02.832Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-08-16T23:25:09.940Z"),
    startedAt: new Date("2024-10-26T01:10:41.598Z"),
    endsAt: new Date("2024-02-09T01:46:30.865Z"),
    endedAt: new Date("2025-04-09T09:40:32.922Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "other",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-04-05T07:42:47.950Z"),
      modifiedAt: new Date("2023-08-07T20:37:12.416Z"),
      metadata: {
        "key": 512800,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2023-12-12T05:57:43.171Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Leanne_Marquardt@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-11-30T01:35:31.732Z"),
      modifiedAt: new Date("2025-12-18T19:10:27.977Z"),
      id: "<value>",
      name: "<value>",
      description: "putrefy hungrily grimy of lightly skeleton baggy but",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 649913,
      },
      prices: [
        {
          createdAt: new Date("2023-02-22T22:06:38.953Z"),
          modifiedAt: new Date("2024-10-07T06:42:15.192Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 605686,
          maximumAmount: 399056,
          presetAmount: 799355,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2025-01-24T17:45:12.264Z"),
          modifiedAt: new Date("2025-11-24T09:34:30.898Z"),
          metadata: {
            "key": "<value>",
          },
          description:
            "coordination to concerning about teammate hoof quarterly fiercely or rust",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            repositoryOwner: "polarsource",
            repositoryName: "private_repo",
            permission: "pull",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/proc",
          mimeType: "<value>",
          size: 429582,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-09-30T14:15:13.952Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-09-12T23:20:12.858Z"),
          sizeReadable: "<value>",
          publicUrl: "https://married-giggle.name",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-09-15T05:27:52.930Z"),
            modifiedAt: new Date("2025-01-30T07:12:20.357Z"),
            id: "<value>",
            metadata: {
              "key": false,
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
          order: 305788,
          required: false,
        },
      ],
    },
    discount: {
      duration: "once",
      durationInMonths: 47096,
      type: "percentage",
      amount: 696420,
      currency: "Colombian Peso",
      createdAt: new Date("2025-07-11T15:18:05.937Z"),
      modifiedAt: new Date("2023-08-26T11:21:18.248Z"),
      id: "<value>",
      metadata: {
        "key": 50113,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-06-15T16:00:57.620Z"),
      endsAt: new Date("2023-06-12T18:10:13.468Z"),
      maxRedemptions: 292834,
      redemptionsCount: 206541,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2023-02-10T23:15:04.160Z"),
      modifiedAt: new Date("2024-12-06T22:59:49.079Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      minimumAmount: 204039,
      maximumAmount: 501370,
      presetAmount: 452873,
    },
    prices: [
      {
        createdAt: new Date("2025-12-09T01:40:50.268Z"),
        modifiedAt: new Date("2024-03-04T13:12:46.886Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
    ],
    meters: [],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.active                                                |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |