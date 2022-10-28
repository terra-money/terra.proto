#!/usr/bin/env node

const { join } = require('path');
const telescope = require('@osmonauts/telescope').default;

telescope({
    protoDirs: [
        '../terrad/proto',
        '../terrad/third_party/proto',
    ],
    outPath: join(__dirname, '/../src'),
    options: {
        logLevel: 0,
        useSDKTypes: false,
        tsDisable: {
            disableAll: false
        },
        eslintDisable: {
            disableAll: true
        },
        bundle: {
            enabled: false
        },
        prototypes: {
            includePackageVar: true,
            methods: {
                fromJSON: true,
                toJSON: true
            },
            typingsFormat: { 
                useDeepPartial: false,
                useExact: false,
                timestamp: 'timestamp',
                duration: 'duration'
            }
        },
        lcdClients: {
            enabled: false
        },
        rpcClients: {
            enabled: true,
            inline: true,
            extensions: false,
            camelCase: false,
            enabledServices: [
                'Msg',
                'Query',
                'Service',
                'ReflectionService',
                'ABCIApplication'
            ]
        },
        aminoEncoding: {
            enabled: false
        }
    }
}).then(() => {
    console.log('✨ All Done!');
}, (e) => {
    console.error(e);
    process.exit(1);
});
