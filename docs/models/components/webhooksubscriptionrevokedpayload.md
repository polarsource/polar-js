# WebhookSubscriptionRevokedPayload

Sent when a subscription is revoked, the user looses access immediately.
Happens when the subscription is canceled, or payment is past due.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionRevokedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionRevokedPayload = {
  data: {
    createdAt: new Date("2023-09-21T15:17:36.784Z"),
    modifiedAt: new Date("2024-10-13T17:36:45.405Z"),
    id: "<value>",
    amount: 928643,
    currency: "Russian Ruble",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2024-11-25T23:07:54.451Z"),
    currentPeriodEnd: new Date("2024-09-25T04:38:04.858Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-10-21T15:32:06.862Z"),
    startedAt: new Date("2025-08-06T22:08:29.288Z"),
    endsAt: new Date("2024-03-01T08:33:25.279Z"),
    endedAt: new Date("2025-05-21T16:31:26.662Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "too_expensive",
    customerCancellationComment: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      createdAt: new Date("2023-01-16T00:03:35.865Z"),
      modifiedAt: new Date("2023-08-19T01:44:07.509Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      email: "Dorothy.Olson@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Maldives",
      },
      taxId: [
        "eu_oss_vat",
      ],
      organizationId: "<value>",
      avatarUrl: "https://bitter-amnesty.info",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Drew37@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2023-10-13T23:20:42.428Z"),
      modifiedAt: new Date("2023-09-09T21:57:43.124Z"),
      id: "<value>",
      name: "<value>",
      description: "ugh clavicle yawningly dally and whether",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 774567,
      },
      prices: [
        {
          createdAt: new Date("2025-03-17T00:12:28.102Z"),
          modifiedAt: new Date("2025-03-19T17:13:45.452Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 1737,
          maximumAmount: 99908,
          presetAmount: 363660,
          recurringInterval: "month",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-03-02T23:09:58.976Z"),
          modifiedAt: new Date("2025-10-05T13:49:22.673Z"),
          id: "<value>",
          description: "syringe bus fax apud while meh um",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            guildId: "<id>",
            roleId: "<id>",
            guildToken: "<value>",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/usr/obj",
          mimeType: "<value>",
          size: 366410,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-04-15T12:53:05.203Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-11-25T11:36:10.786Z"),
          sizeReadable: "<value>",
          publicUrl: "https://frank-eyeliner.info/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-12-17T08:06:48.746Z"),
            modifiedAt: new Date("2023-11-21T13:19:02.770Z"),
            id: "<value>",
            metadata: {
              "key": 511807,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 8187,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2025-10-22T22:05:47.312Z"),
      modifiedAt: new Date("2023-02-02T06:15:52.112Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      priceAmount: 100976,
      recurringInterval: "month",
    },
    discount: {
      duration: "once",
      type: "fixed",
      basisPoints: 305473,
      createdAt: new Date("2025-08-14T08:55:15.893Z"),
      modifiedAt: new Date("2023-09-05T19:16:17.163Z"),
      id: "<value>",
      metadata: {
        "key": 999932,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-03-09T09:33:22.960Z"),
      endsAt: new Date("2024-01-04T15:22:03.493Z"),
      maxRedemptions: 765459,
      redemptionsCount: 953916,
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