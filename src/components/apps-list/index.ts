import getYoutubeApp from "@/components/apps-list/getYoutubeApp";
import RepositoryApp from "@/models/RepositoryApp";

async function getAppsList(): Promise<RepositoryApp[]> {
  const youtubeApp = await getYoutubeApp()

  return [youtubeApp]
}

export default getAppsList
