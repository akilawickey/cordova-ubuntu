#!/usr/bin/env node

/*
 *
 * Copyright 2014 Canonical Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var shellCfg = require('shelljs').config;

/**
 * The configuration is used by other tasks to access shared properties, such as if the tasks are
 * running in debug mode (verbose).
 */
function Config() {
    this._debug = false;
    shellCfg.silent = true;
}

Config.prototype = {
    debugMode: function () {
        this._debug = true;
        shellCfg.silent = false;
    },

    inDebugMode: function () {
        return this._debug;
    }
};

module.exports = new Config();
