import Youtube from "@/models/apps/Youtube";
import {requestRevalidate} from "@/constants"

const githubUrl = 'https://github.com/MiRO92/uYou-for-YouTube'
const linkRegex = /(?<=href=\")(.*)(?=.ipa)/
const versionRegex = /(?<=_)(.*)(?=_uYou)/

const getYoutubeApp = async (): Promise<Youtube> => {
  const gitHubPage = await fetch(githubUrl, { next: { revalidate: requestRevalidate } }).then(res => res.text());
  const ipaLink = gitHubPage.match(linkRegex)?.[0]

  if (!ipaLink) throw new Error('Link on github not found');
  const version = ipaLink.match(versionRegex)?.[0]
  if (!version) throw new Error('Version not found');

  const fullLink = `${ipaLink}.ipa`;

  const fileInfo = await fetch(fullLink, { method: 'HEAD', next: { revalidate: requestRevalidate } })
  if (!fileInfo) throw new Error('File not found');

  const contentLength = fileInfo.headers.get('content-length')
  const lastModified = fileInfo.headers.get('last-modified')

  if (!contentLength) throw new Error('Content length not specified')
  if (!lastModified) throw new Error('Last Modified not specified')
  const versionDate = new Date(lastModified).toISOString()
  const size = Number(contentLength)

  return new Youtube(fullLink, version, versionDate, size);
}


export default getYoutubeApp
