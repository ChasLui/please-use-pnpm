#!/usr/bin/env node
if (!/pnpm\.js$|pnpmpkg$/.test(process.env)) {
    console.error(`\x1B[1;31m${"*".repeat(40)}\x1B[0;0m`);
    console.error(`\x1B[1;31m* 请使用 pnpm 安装依赖。\x1B[0;0m`);
    console.error(`\x1B[1;31m${"*".repeat(40)}\x1B[0;0m`);
    console.error(``);
    process.exit(1);
}