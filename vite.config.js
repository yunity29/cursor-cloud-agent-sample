import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(() => {
  // GitHub Pages (project pages) 向け: https://<user>.github.io/<repo>/
  // Actions では GITHUB_REPOSITORY=owner/repo が入る
  const repoName = process.env.GITHUB_REPOSITORY?.split("/")?.[1];
  const isPages = process.env.GITHUB_PAGES === "true" && !!repoName;

  return {
    plugins: [react()],
    base: isPages ? `/${repoName}/` : "/",
  };
});
