import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 5174,
		proxy: {
			"/v1": {
				target: "https://web3.luniverse.io/",
				changeOrigin: true,
			},
		},
	},
	envPrefix: ["VITE_", "LUNIVERSE_"],
});
