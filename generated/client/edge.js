
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.16.2
 * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
 */
Prisma.prismaVersion = {
  client: "4.16.2",
  engine: "4bc8b6e1b66cb932731fb1bdbbc550d1e010de81"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  User: 'User'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/jona/prog/deno-dev/api-deno-bench/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "rhel-openssl-1.1.x",
        "native": true
      }
    ],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.16.2",
  "engineVersion": "4bc8b6e1b66cb932731fb1bdbbc550d1e010de81",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": true,
  "postinstall": false
}
config.dirname = '/'

const compressedDMMF = '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'
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)
config.document = dmmf


config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBwcmV2aWV3RmVhdHVyZXMgPSBbImRlbm8iXQogIG91dHB1dCA9ICIuLi9nZW5lcmF0ZWQvY2xpZW50Igp9CgpkYXRhc291cmNlIGRiIHsKICBwcm92aWRlciA9ICJwb3N0Z3Jlc3FsIgogIHVybCAgICAgID0gZW52KCJEQVRBQkFTRV9VUkwiKQp9CgoKbW9kZWwgVXNlciB7CglpZCAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQoJbmFtZSBTdHJpbmcKfQo='
config.inlineSchemaHash = '34e75ee1dc3bbecf6e03707e1cd03140e7ff8ba60caa3d006ae0b7a29b41fa6d'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}

config.injectableEdgeEnv = {
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
}

config.edgeClientProtocol = "graphql";
if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

