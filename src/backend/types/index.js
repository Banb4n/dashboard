/* @flow */

type AppType = Object;

type DatabaseType = Object;

type BackendType = {
    database: DatabaseType,
    app: AppType
};

type DatabaseRefType = string;

export type { AppType, DatabaseType, BackendType, DatabaseRefType };
