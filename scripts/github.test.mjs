// Run with `npm test` (node's built-in runner; no dependency). Mocks fetch, so no network.
import test from 'node:test'
import assert from 'node:assert/strict'
import { fetchLiveItems, MAX_PAGES } from '../src/lib/github.js'

const repo = (id) => ({
  id,
  name: `repo-${id}`,
  html_url: `https://github.com/dirtyredz/repo-${id}`,
  created_at: '2020-01-01T00:00:00Z',
  pushed_at: `2024-01-${String(id).padStart(2, '0')}T00:00:00Z`,
  language: 'JavaScript',
  topics: [],
})

const page = (repos, next) => ({
  ok: true,
  status: 200,
  headers: { get: (h) => (h.toLowerCase() === 'link' && next ? `<${next}>; rel="next", <x>; rel="last"` : null) },
  json: async () => repos,
})

test('follows Link rel=next and merges both pages', async () => {
  const urls = []
  globalThis.fetch = async (url) => {
    urls.push(url)
    return url.includes('page=2') ? page([repo(3)]) : page([repo(1), repo(2)], 'https://api.github.com/x?page=2')
  }
  const items = await fetchLiveItems()
  assert.equal(urls.length, 2)
  assert.deepEqual(items.map((i) => i.id).sort(), ['gh-1', 'gh-2', 'gh-3'])
})

test('a single page makes exactly one request', async () => {
  let n = 0
  globalThis.fetch = async () => (n++, page([repo(1)]))
  await fetchLiveItems()
  assert.equal(n, 1)
})

test('a Link chain that never ends stops at MAX_PAGES', async () => {
  let n = 0
  globalThis.fetch = async () => (n++, page([repo(n)], 'https://api.github.com/x?page=more'))
  await fetchLiveItems()
  assert.equal(n, MAX_PAGES)
})

test('a failing later page rejects', async () => {
  globalThis.fetch = async (url) =>
    url.includes('page=2') ? { ok: false, status: 403 } : page([repo(1)], 'https://api.github.com/x?page=2')
  await assert.rejects(fetchLiveItems(), /GitHub API 403/)
})
