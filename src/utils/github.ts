import { Octokit } from "@octokit/core"

const client = new Octokit({ auth: import.meta.env.GH_TOKEN })

export const getMostRecentRepositories = async () => {
  const response = await client.request("GET /users/{username}/repos", {
    username: 'mc-8',
    sort: 'updated'
  })

  return response.data.map((item) => {
    return {
      name: item.name,
      desc: item.description,
      stars: item.stargazers_count,
      url: item.html_url
    }
  })
}
