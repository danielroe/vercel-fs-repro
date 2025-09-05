export default function (req, res) {
  const query = req.headers["x-now-route-matches"];
  return res.end([
    `header: ${query || 'no route matcher header found '}`,
    `path: ${req.url}`,
    `file: index.func`,
  ].join('\n'))
}
