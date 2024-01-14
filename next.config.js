/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  basePath: "/blog",
  output: "export",
};