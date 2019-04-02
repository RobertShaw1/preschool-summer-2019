"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "SummerSchedule",
    embedded: false
  },
  {
    name: "Student",
    embedded: false
  },
  {
    name: "StudentSchedule",
    embedded: false
  },
  {
    name: "Week",
    embedded: false
  },
  {
    name: "AMActivity",
    embedded: false
  },
  {
    name: "FieldTrip",
    embedded: false
  },
  {
    name: "ActivityType",
    embedded: false
  },
  {
    name: "Level",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
