# Oauth2AuthorizeResponseOauth2Authorize

Successful Response


## Supported Types

### `components.AuthorizeResponseUser`

```typescript
const value: components.AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2026-11-06T09:00:45.294Z"),
    modifiedAt: new Date("2026-02-22T00:03:05.093Z"),
    clientId: "<id>",
    clientName: null,
    clientUri: "https://bossy-formamide.com",
    logoUri: null,
    tosUri: "https://advanced-ferret.org/",
    policyUri: "https://pleasant-event.com/",
  },
  subType: "user",
  sub: {
    id: "<value>",
    email: "Molly.Quitzon@gmail.com",
    avatarUrl: null,
  },
  scopes: [
    "organizations:write",
  ],
};
```

### `components.AuthorizeResponseOrganization`

```typescript
const value: components.AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2026-11-06T09:00:45.294Z"),
    modifiedAt: new Date("2026-02-22T00:03:05.093Z"),
    clientId: "<id>",
    clientName: null,
    clientUri: "https://bossy-formamide.com",
    logoUri: null,
    tosUri: "https://advanced-ferret.org/",
    policyUri: "https://pleasant-event.com/",
  },
  subType: "organization",
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: null,
  },
  scopes: [],
  organizations: [],
};
```

