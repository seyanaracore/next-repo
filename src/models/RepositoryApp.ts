import {IAppItem} from "@/types";

class RepositoryApp implements IAppItem {
	name: string
	bundleIdentifier: string
	developerName: string
	version: string
	versionDate: string
	versionDescription: string
	downloadURL: string
	localizedDescription: string
	iconURL: string
	tintColor: string
	isLanZouCloud: number
	size: number
	type: number

	constructor({name, bundleIdentifier,developerName, version, versionDate, versionDescription, downloadURL, localizedDescription, iconURL, tintColor, isLanZouCloud, size, type}: IAppItem) {
		this.name = name;
		this.bundleIdentifier = bundleIdentifier;
		this.developerName = developerName;
		this.version = version;
		this.versionDate = versionDate;
		this.versionDescription = versionDescription;
		this. downloadURL = downloadURL;
		this.localizedDescription = localizedDescription;
		this.iconURL = iconURL;
		this.tintColor = tintColor;
		this.isLanZouCloud = isLanZouCloud;
		this.size = size;
		this.type = type;
	}
}

export default RepositoryApp;
