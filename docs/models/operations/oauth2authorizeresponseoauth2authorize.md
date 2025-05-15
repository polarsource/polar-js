# Oauth2AuthorizeResponseOauth2Authorize

Successful Response


## Supported Types

### `components.AuthorizeResponseUser`

```typescript
const value: components.AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2025-11-06T09:00:45.294Z"),
    modifiedAt: new Date("2024-02-13T01:48:54.322Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://awful-synergy.name",
    logoUri: "https://hard-to-find-chapel.com/",
    tosUri: "https://experienced-address.biz",
    policyUri: "https://tiny-glider.name",
  },
  sub: {
    id: "<value>",
    email: "Beau67@gmail.com",
    avatarUrl: "https://forceful-fledgling.com/",
  },
  scopes: [
    "customers:read",
  ],
};
```

### `components.AuthorizeResponseOrganization`

```typescript
const value: components.AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2024-05-19T17:17:33.198Z"),
    modifiedAt: new Date("2023-03-20T13:31:10.189Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://limping-cafe.info/",
    logoUri: "https://parallel-vibraphone.com/",
    tosUri: "https://querulous-elevator.com/",
    policyUri: "https://puzzled-equal.com/",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://usable-premise.org",
  },
  scopes: [
    "events:read",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://innocent-league.com",
    },
  ],
};
```

