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
    product: {
      createdAt: new Date("2025-10-21T06:03:48.648Z"),
      modifiedAt: new Date("2024-10-21T22:25:27.704Z"),
      id: "<value>",
      name: "<value>",
      description: "readies putrefy hungrily",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2024-09-03T18:24:35.557Z"),
          modifiedAt: new Date("2024-10-18T02:13:21.293Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 359078,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2023-07-11T11:58:21.963Z"),
          modifiedAt: new Date("2024-10-28T18:01:24.729Z"),
          description: "cork vice er gah hepatitis where garage",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          metadata: {
            "key": 575961,
          },
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
          path: "/lost+found",
          mimeType: "<value>",
          size: 337646,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-07-26T05:04:33.718Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-03-15T07:58:32.950Z"),
          sizeReadable: "<value>",
          publicUrl: "https://robust-forager.info/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-07-19T09:46:45.424Z"),
            modifiedAt: new Date("2024-07-08T03:01:31.971Z"),
            id: "<value>",
            metadata: {
              "key": 1589.03,
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
          order: 254427,
          required: false,
        },
      ],
    },
    discount: {
      duration: "once",
      type: "fixed",
      amount: 990521,
      currency: "Pound Sterling",
      createdAt: new Date("2025-09-09T09:02:13.175Z"),
      modifiedAt: new Date("2023-03-06T14:54:44.471Z"),
      id: "<value>",
      metadata: {
        "key": 254060,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-02-06T17:05:21.709Z"),
      endsAt: new Date("2025-03-17T00:27:48.593Z"),
      maxRedemptions: 520978,
      redemptionsCount: 341922,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    prices: [
      {
        createdAt: new Date("2024-04-25T10:25:40.856Z"),
        modifiedAt: new Date("2025-09-08T05:28:12.977Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 537741,
        maximumAmount: 396131,
        presetAmount: 614349,
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