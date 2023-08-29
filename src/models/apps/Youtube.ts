import RepositoryApp from "../RepositoryApp";

class Youtube extends RepositoryApp {
	constructor(downloadURL: string, version: string, versionDate: string, size: number) {
		super({
			name: 'Youtube++',
			bundleIdentifier: 'com.google.ios.youtube',
			developerName: 'MiRO92',
			version,
			versionDate,
			versionDescription: 'Youtube++',
			downloadURL,
			localizedDescription: 'Youtube++',
			iconURL: 'https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg',
			tintColor: '018084',
			isLanZouCloud: 0,
			size,
			type: 1
		});
	}
}

export default Youtube
