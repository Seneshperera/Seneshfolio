import esbuild from 'esbuild';
import path from 'path';

import fs from 'fs';

const aliasPlugin = {
  name: 'alias',
  setup(build) {
    build.onResolve({ filter: /^@\/.*/ }, args => {
      const rel = args.path.replace(/^@\//, '');
      const basePath = path.resolve(process.cwd(), 'src', rel);
      const extensions = ['.js', '.jsx', '.ts', '.tsx', ''];
      for (const ext of extensions) {
        const fullPath = basePath + ext;
        if (fs.existsSync(fullPath)) {
          return { path: fullPath };
        }
      }
      // fallback
      return { path: basePath };
    });
  }
};

esbuild.build({
  entryPoints: ['src/main.jsx'],
  bundle: true,
  outdir: 'dist',
  entryNames: 'main',
  format: 'esm',
  minify: true,
  loader: {
    '.png': 'file',
    '.jpg': 'file',
    '.jpeg': 'file',
    '.svg': 'file'
  },
  plugins: [aliasPlugin],
  assetNames: 'assets/[name]-[hash]',
  sourcemap: false,
  resolveExtensions: ['.js', '.jsx', '.ts', '.tsx']
}).catch(() => process.exit(1));
