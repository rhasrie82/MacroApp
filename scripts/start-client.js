const args = ["start"];
const opts = { stdio: "inherit", cwd: "macrofit", shell: true };
require("child_process").spawn("npm", args, opts);
