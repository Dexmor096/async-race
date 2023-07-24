export interface PropsButton {
	text: string,
	buttonId: string
}
export type Beer = { 
	name: string,
	color: string,
	id: number
}
export interface PropsInput {
	type: string,
	value: string,
	placeholder: string
}
export interface Table {
	text: string,
}
export interface Row {
	number: string,
	beer: string,
	beerBrand: string,
	wins: string,
	bestTime: string
}