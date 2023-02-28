import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default ({ mode }: any) => {
  // Load app-level env vars to node-level env vars.
  // need to pass third parameter with "" for get all of constant in env with prefix you config
  const env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  return defineConfig({
    server: {
      port: Number(env.APP_PORT),
    },
    base: "./",
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./tests/setup.ts",
      include: ["src/*.ts"],
    },
    envPrefix: "APP",
    resolve: {
      alias: {
        "@root": path.resolve(__dirname, "src/"),
        "@components": `${path.resolve(__dirname, "src/components/")}`,
        "@public": `${path.resolve(__dirname, "public/")}`,
        "@pages": path.resolve(__dirname, "src/pages"),
        "@core": `${path.resolve(__dirname, "src/core/")}`,
      },
    },
  });
};
