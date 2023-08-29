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
			iconURL: 'https://upload.wikimedia.org/wikipedia/commons/7/72/YouTube_social_white_square_%282017%29.svg',
			tintColor: '018084',
			isLanZouCloud: 0,
			size,
			type: 1
		});
	}
}

export default Youtube
