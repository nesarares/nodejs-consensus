export class ListUtils {
	public static contains(set1: any[], value: any) {
		return set1.some(set1Element => set1Element == value);
	}

	public static intersection(set1: any[], set2: any[]): any[] {
		const common: any[] = [];
		set2.forEach(set2Element => {
			const found = set1.find(set1Element => set1Element == set2Element);
			if (found) common.push(found);
		});
		return common;
	}

	public static reunion(set1: any[], set2: any[]) {
		set2.forEach(set2Element => {
			if (!set1.some(set1Element => set1Element == set2Element)) {
				set1.push(set2Element);
			}
		})
	}

	public static difference(set1: any[], set2: any[]) {
		set1.forEach((set1Element, set1Index) => {
			if (set2.some(set2Element => set1Element == set2Element)) {
				set1.splice(set1Index, 1);
			}
		})
	}
}