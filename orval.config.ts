import {defineConfig} from 'orval';

module.exports = defineConfig({
  base: {
    input: './openapi.json',
    output: {
      target: './src/api/ps_api.ts',
      client: 'react-query',
      mode: 'tags-split',
      schemas: 'src/api/model',
      mock: true,
    },
  },
});
