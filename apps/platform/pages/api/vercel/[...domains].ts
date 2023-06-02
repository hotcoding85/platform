import { getEnv } from '@codelab/shared/config'
import type { NextApiHandler } from 'next'
import url from 'url'

export const vercelDomainProxy: NextApiHandler = async (req, res) => {
  const { getBaseHeaders, projectApiUrl, teamIdParam } = getEnv().vercel

  if (!req.url) {
    return res.status(400).send('Missing url')
  }

  const reqUrl = url.parse(req.url).href.replace('/api/vercel/', '')
  const { apiVersion } = JSON.parse(req.body || '{}')
  const projectUrl = projectApiUrl(apiVersion)

  try {
    const vercelRes = await fetch(`${projectUrl}/${reqUrl}?${teamIdParam}`, {
      headers: getBaseHeaders(),
      method: req.method,
      ...(req.body && { body: req.body }),
    })

    return res.status(vercelRes.status).send(vercelRes.body)
  } catch (error) {
    console.log(error)

    return res.status(500).send(false)
  }
}

export default vercelDomainProxy
