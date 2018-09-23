// import assert from 'assert'
import path from 'path'
import { assert } from 'chai'
import filesystem from 'fs'
import configuration from '../setup/configuration'
import { usingGenericInstance, usingThis } from './entrypoint.js'

describe('function usingGenericInstance: ', function() {

    describe('Add properties to target object', function() {
        let object = {},
            keyValuePairObject = { a: 1, b: 2}
        usingGenericInstance({ object, jsonData: keyValuePairObject })
        it('Should create properties corresponding to the passed json data', async function() {
            assert.include(object, keyValuePairObject)
        })
        it('Should add property `jsonData`', async function() {
            assert.deepEqual(object.jsonData, keyValuePairObject)
        })
    })

    describe('Add properties to this object', function() {
        let object = {},
            keyValuePairObject = { a: 1, b: 2}
        usingThis.bind(object)({ jsonData: keyValuePairObject })
        it('Should create properties corresponding to the passed json data', async function() {
            assert.include(object, keyValuePairObject)
        })
        it('Should add property `jsonData`', async function() {
            assert.deepEqual(object.jsonData, keyValuePairObject)
        })
    })

})
