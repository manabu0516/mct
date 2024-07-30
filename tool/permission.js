const { program } = require("commander");
const pathModule = require("path");

const common = require("../module/common");
const rootDir = pathModule.resolve(__dirname+"/../");

const action_dump = async (source, destination) => {
    const config = await common.readJson(rootDir + "/config.json");
    const entries = await common.readJson(config.root + "/permissions.json");
    console.log(JSON.stringify(entries, null , "\t"));
};

program
    .command("dump")
    .description('dump permission.js entries')
    .action(action_dump);

program
    .command("remove")
    .description('remove permission entry')
    .requiredOption("-x, --xuid <id>", "input minecraft user id");
 
program
    .command("add")
    .description('add permission entry')
    .requiredOption("-x, --xuid <id>", "input minecraft user id")
    .requiredOption("-p, --permission <type>", "input permission type [visitor,member,operator]");

program
    .command("update")
    .description('remove permission entry')
    .requiredOption("-x, --xuid <id>", "input minecraft user id")
    .requiredOption("-p, --permission <type>", "input permission type [visitor,member,operator]");

program.parse();