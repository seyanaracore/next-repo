import RepositoryApp from "@/models/RepositoryApp";

class Repository {
  name: string;
  identifier: string;
  sourceURL: string;
  apps: RepositoryApp[]

  constructor(sourceUrl: string, apps: RepositoryApp[]) {
    this.name = "seyanaracore_repo";
    this.identifier = "seyanaracore.best.dev";
    this.sourceURL = sourceUrl;
    this.apps = apps
  }
}

export default Repository
