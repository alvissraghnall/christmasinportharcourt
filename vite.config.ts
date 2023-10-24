import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    // depending on your application, base can also be "/"
    base: '',
    plugins: [react(), ],
    server: {    
        // this ensures that the browser does not open upon server start
        open: false,
        // this sets a default port to 3000  
        port: 3000, 
    },
    // esbuild: {
    //     loader:  { '.js': 'jsx' },
    //     include: [
    //         "src/**/*.jsx",
    //         "src/**/*.js",
    //         "node_modules/**/*.js",
    //     ]
    // }
})