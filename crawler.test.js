const { normalizeURL } = require('./crawler.js')
const { test, expect } = require('@jest/globals')

test('normalizeURL strip protocol', () => {
    const input = 'https://www.youtube.com/path/'
    const actual = normalizeURL(input)
    const expected = 'www.youtube.com/path'
    expect(actual).toEqual(expected)

})

test('normalizeURL strip slash', () => {
    const input = 'https://www.youtube.com/path/'
    const actual = normalizeURL(input)
    const expected = 'www.youtube.com/path'
    expect(actual).toEqual(expected)

})

test('normalizeURL strip capitals', () => {
    const input = 'https://www.YOUTube.com/path/'
    const actual = normalizeURL(input)
    const expected = 'www.youtube.com/path'
    expect(actual).toEqual(expected)

})

test('normalizeURL strip http', () => {
    const input = 'https://www.youtube.com/path/'
    const actual = normalizeURL(input)
    const expected = 'www.youtube.com/path'
    expect(actual).toEqual(expected)

})