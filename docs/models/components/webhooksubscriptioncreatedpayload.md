# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2023-05-08T17:57:27.868Z"),
    modifiedAt: new Date("2024-01-27T23:20:13.821Z"),
    id: "<value>",
    amount: 4654,
    currency: "Yen",
    recurringInterval: "year",
    status: "trialing",
    currentPeriodStart: new Date("2023-04-05T00:44:28.219Z"),
    currentPeriodEnd: new Date("2023-03-10T16:58:04.176Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-11-01T19:34:36.306Z"),
    startedAt: new Date("2023-07-05T13:36:03.643Z"),
    endsAt: new Date("2025-11-23T17:51:29.432Z"),
    endedAt: new Date("2023-06-15T17:57:35.415Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "unused",
    customerCancellationComment: "<value>",
    metadata: {
      "key": 569287,
    },
    customer: {
      createdAt: new Date("2024-07-15T05:46:16.146Z"),
      modifiedAt: new Date("2025-12-01T01:15:21.435Z"),
      id: "<value>",
      metadata: {
        "key": 787916,
      },
      email: "Gonzalo78@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Turkmenistan",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://lawful-millet.org",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Sadye_Torphy42@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-04-24T01:27:00.644Z"),
      modifiedAt: new Date("2024-07-04T07:23:06.703Z"),
      id: "<value>",
      name: "<value>",
      description: "till atrium smuggle less phew pish hungrily if moral",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2024-08-06T10:09:14.092Z"),
          modifiedAt: new Date("2025-02-09T16:41:01.958Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 949280,
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-07-05T03:25:57.186Z"),
          modifiedAt: new Date("2024-02-14T23:20:35.837Z"),
          id: "<value>",
          description: "blue enfold though because intermarry colonialism",
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
          path: "/sbin",
          mimeType: "<value>",
          size: 318028,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-11-16T00:59:56.580Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-11-24T10:40:28.013Z"),
          sizeReadable: "<value>",
          publicUrl: "https://pointless-widow.org",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-12-10T16:41:14.824Z"),
            modifiedAt: new Date("2024-02-05T15:08:18.944Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
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
          order: 487148,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2025-09-26T17:13:07.205Z"),
      modifiedAt: new Date("2023-05-10T17:03:48.644Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
    },
    discount: {
      duration: "forever",
      durationInMonths: 200190,
      type: "percentage",
      basisPoints: 644223,
      createdAt: new Date("2023-05-14T19:20:23.288Z"),
      modifiedAt: new Date("2023-10-12T12:31:28.351Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-08-19T00:10:11.657Z"),
      endsAt: new Date("2023-05-26T00:10:06.496Z"),
      maxRedemptions: 193236,
      redemptionsCount: 685467,
      organizationId: "<value>",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |