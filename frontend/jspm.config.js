SystemJS.config({
  devConfig: {
    'map': {
      'angular-mocks': 'npm:angular-mocks@1.6.3',
      'plugin-babel': 'npm:systemjs-plugin-babel@0.0.21'
    }
  },
  packages: {
    'src': {
      'defaultExtension': 'js'
    }
  },
  transpiler: 'plugin-babel'
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    'angular': 'npm:angular@1.6.3',
    'angular-ui-router': 'npm:angular-ui-router@1.0.0-beta.3',
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'babel': 'npm:babel-core@6.24.0',
    'bootstrap': 'github:twbs/bootstrap@3.3.6',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'css': 'github:systemjs/plugin-css@0.1.33',
    'events': 'github:jspm/nodelibs-events@0.2.2',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'jquery': 'npm:jquery@2.2.4',
    'module': 'github:jspm/nodelibs-module@0.2.0-alpha',
    'os': 'github:jspm/nodelibs-os@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.3',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
    'todomvc-app-css': 'npm:todomvc-app-css@2.1.0',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha'
  },
  packages: {
    'npm:babel-core@6.24.0': {
      'map': {
        'babel-code-frame': 'npm:babel-code-frame@6.22.0',
        'babel-messages': 'npm:babel-messages@6.23.0',
        'babel-helpers': 'npm:babel-helpers@6.23.0',
        'babel-register': 'npm:babel-register@6.24.0',
        'babel-template': 'npm:babel-template@6.23.0',
        'path-is-absolute': 'npm:path-is-absolute@1.0.1',
        'babel-generator': 'npm:babel-generator@6.24.0',
        'slash': 'npm:slash@1.0.0',
        'babel-traverse': 'npm:babel-traverse@6.23.1',
        'private': 'npm:private@0.1.7',
        'convert-source-map': 'npm:convert-source-map@1.5.0',
        'json5': 'npm:json5@0.5.1',
        'babel-types': 'npm:babel-types@6.23.0',
        'minimatch': 'npm:minimatch@3.0.3',
        'debug': 'npm:debug@2.6.3',
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'source-map': 'npm:source-map@0.5.6',
        'lodash': 'npm:lodash@4.17.4',
        'babylon': 'npm:babylon@6.16.1'
      }
    },
    'npm:babel-helpers@6.23.0': {
      'map': {
        'babel-template': 'npm:babel-template@6.23.0',
        'babel-runtime': 'npm:babel-runtime@6.23.0'
      }
    },
    'npm:babel-register@6.24.0': {
      'map': {
        'babel-core': 'npm:babel-core@6.24.0',
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'lodash': 'npm:lodash@4.17.4',
        'home-or-tmp': 'npm:home-or-tmp@2.0.0',
        'mkdirp': 'npm:mkdirp@0.5.1',
        'source-map-support': 'npm:source-map-support@0.4.14',
        'core-js': 'npm:core-js@2.4.1'
      }
    },
    'npm:babel-template@6.23.0': {
      'map': {
        'babel-traverse': 'npm:babel-traverse@6.23.1',
        'babel-types': 'npm:babel-types@6.23.0',
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'lodash': 'npm:lodash@4.17.4',
        'babylon': 'npm:babylon@6.16.1'
      }
    },
    'npm:babel-generator@6.24.0': {
      'map': {
        'babel-messages': 'npm:babel-messages@6.23.0',
        'babel-types': 'npm:babel-types@6.23.0',
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'source-map': 'npm:source-map@0.5.6',
        'lodash': 'npm:lodash@4.17.4',
        'trim-right': 'npm:trim-right@1.0.1',
        'detect-indent': 'npm:detect-indent@4.0.0',
        'jsesc': 'npm:jsesc@1.3.0'
      }
    },
    'npm:babel-traverse@6.23.1': {
      'map': {
        'babel-code-frame': 'npm:babel-code-frame@6.22.0',
        'babel-messages': 'npm:babel-messages@6.23.0',
        'babel-types': 'npm:babel-types@6.23.0',
        'debug': 'npm:debug@2.6.3',
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'lodash': 'npm:lodash@4.17.4',
        'babylon': 'npm:babylon@6.16.1',
        'invariant': 'npm:invariant@2.2.2',
        'globals': 'npm:globals@9.17.0'
      }
    },
    'npm:babel-messages@6.23.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.23.0'
      }
    },
    'npm:babel-types@6.23.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.23.0',
        'lodash': 'npm:lodash@4.17.4',
        'esutils': 'npm:esutils@2.0.2',
        'to-fast-properties': 'npm:to-fast-properties@1.0.2'
      }
    },
    'npm:babel-code-frame@6.22.0': {
      'map': {
        'js-tokens': 'npm:js-tokens@3.0.1',
        'esutils': 'npm:esutils@2.0.2',
        'chalk': 'npm:chalk@1.1.3'
      }
    },
    'npm:source-map-support@0.4.14': {
      'map': {
        'source-map': 'npm:source-map@0.5.6'
      }
    },
    'npm:babel-runtime@6.23.0': {
      'map': {
        'regenerator-runtime': 'npm:regenerator-runtime@0.10.3',
        'core-js': 'npm:core-js@2.4.1'
      }
    },
    'npm:debug@2.6.3': {
      'map': {
        'ms': 'npm:ms@0.7.2'
      }
    },
    'npm:minimatch@3.0.3': {
      'map': {
        'brace-expansion': 'npm:brace-expansion@1.1.6'
      }
    },
    'npm:chalk@1.1.3': {
      'map': {
        'has-ansi': 'npm:has-ansi@2.0.0',
        'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'ansi-styles': 'npm:ansi-styles@2.2.1',
        'supports-color': 'npm:supports-color@2.0.0'
      }
    },
    'npm:home-or-tmp@2.0.0': {
      'map': {
        'os-homedir': 'npm:os-homedir@1.0.2',
        'os-tmpdir': 'npm:os-tmpdir@1.0.2'
      }
    },
    'npm:detect-indent@4.0.0': {
      'map': {
        'repeating': 'npm:repeating@2.0.1'
      }
    },
    'npm:invariant@2.2.2': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.3.1'
      }
    },
    'npm:mkdirp@0.5.1': {
      'map': {
        'minimist': 'npm:minimist@0.0.8'
      }
    },
    'npm:loose-envify@1.3.1': {
      'map': {
        'js-tokens': 'npm:js-tokens@3.0.1'
      }
    },
    'npm:brace-expansion@1.1.6': {
      'map': {
        'concat-map': 'npm:concat-map@0.0.1',
        'balanced-match': 'npm:balanced-match@0.4.2'
      }
    },
    'npm:has-ansi@2.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.1.1'
      }
    },
    'npm:strip-ansi@3.0.1': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.1.1'
      }
    },
    'npm:repeating@2.0.1': {
      'map': {
        'is-finite': 'npm:is-finite@1.0.2'
      }
    },
    'npm:is-finite@1.0.2': {
      'map': {
        'number-is-nan': 'npm:number-is-nan@1.0.1'
      }
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.9.1'
      }
    },
    'github:jspm/nodelibs-os@0.2.0-alpha': {
      'map': {
        'os-browserify': 'npm:os-browserify@0.2.1'
      }
    },
    'npm:buffer@4.9.1': {
      'map': {
        'ieee754': 'npm:ieee754@1.1.8',
        'isarray': 'npm:isarray@1.0.0',
        'base64-js': 'npm:base64-js@1.2.0'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'readable-stream': 'npm:readable-stream@2.2.6'
      }
    },
    'npm:readable-stream@2.2.6': {
      'map': {
        'isarray': 'npm:isarray@1.0.0',
        'inherits': 'npm:inherits@2.0.3',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'core-util-is': 'npm:core-util-is@1.0.2',
        'util-deprecate': 'npm:util-deprecate@1.0.2',
        'string_decoder': 'npm:string_decoder@0.10.31'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'create-hash': 'npm:create-hash@1.1.2',
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'browserify-sign': 'npm:browserify-sign@4.0.4',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'randombytes': 'npm:randombytes@2.0.3',
        'pbkdf2': 'npm:pbkdf2@3.0.9'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'sha.js': 'npm:sha.js@2.4.8'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:browserify-sign@4.0.4': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.1.0',
        'elliptic': 'npm:elliptic@6.4.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'randombytes': 'npm:randombytes@2.0.3',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'parse-asn1': 'npm:parse-asn1@5.1.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'miller-rabin': 'npm:miller-rabin@4.0.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:pbkdf2@3.0.9': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4'
      }
    },
    'npm:cipher-base@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:sha.js@2.4.8': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'browserify-des': 'npm:browserify-des@1.0.0',
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'des.js': 'npm:des.js@1.0.0'
      }
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'cipher-base': 'npm:cipher-base@1.0.3',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'buffer-xor': 'npm:buffer-xor@1.0.3'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'randombytes': 'npm:randombytes@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:parse-asn1@5.1.0': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.9',
        'asn1.js': 'npm:asn1.js@4.9.1'
      }
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'elliptic': 'npm:elliptic@6.4.0',
        'bn.js': 'npm:bn.js@4.11.6'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.1.0'
      }
    },
    'npm:elliptic@6.4.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'brorand': 'npm:brorand@1.1.0',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
        'hmac-drbg': 'npm:hmac-drbg@1.0.0',
        'hash.js': 'npm:hash.js@1.0.3',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:asn1.js@4.9.1': {
      'map': {
        'inherits': 'npm:inherits@2.0.3',
        'bn.js': 'npm:bn.js@4.11.6',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:hmac-drbg@1.0.0': {
      'map': {
        'hash.js': 'npm:hash.js@1.0.3',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0',
        'minimalistic-crypto-utils': 'npm:minimalistic-crypto-utils@1.0.1'
      }
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.3'
      }
    },
    'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'github:twbs/bootstrap@3.3.6': {
      'map': {
        'jquery': 'npm:jquery@2.2.4'
      }
    }
  }
});
