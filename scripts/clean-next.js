const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const nextDir = path.join(process.cwd(), ".next");
const turboDir = path.join(process.cwd(), ".turbo");

function sleepMs(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function rmDirSafe(dir) {
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      fs.rmSync(dir, { recursive: true, force: true });
      return true;
    } catch (error) {
      if (attempt === 4) break;
      sleepMs(200);
    }
  }

  try {
    execSync(`cmd /c rmdir /s /q "${dir}"`, { stdio: "ignore" });
  } catch {
    // ignore
  }

  return !fs.existsSync(dir);
}

try {
  const removedNext = rmDirSafe(nextDir);
  const removedTurbo = rmDirSafe(turboDir);

  // eslint-disable-next-line no-console
  console.log(
    `Removed .next: ${removedNext ? "yes" : "no"}; removed .turbo: ${
      removedTurbo ? "yes" : "no"
    }`
  );

  if (!removedNext) {
    process.exitCode = 1;
  }
} catch (error) {
  // eslint-disable-next-line no-console
  console.error(
    "Failed to remove build cache. Stop `next dev` and try again.",
    error
  );
  process.exitCode = 1;
}
